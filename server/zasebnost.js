// Varstvo podatkov učencev (docs/varnost-podatkov.md): šifriranje obstoječih vrstic ob zagonu,
// roki hrambe in dnevno čiščenje. Šifriranje polj: server/crypto-polje.js.
import { seal, unseal, isEncrypted, currentKeyId, encryptionOn, canOpen, blindIndex, warnIfNoKey } from "./crypto-polje.js";
import { normCard } from "./flashcards.js";
import { audit, ensureAuditTable } from "./dnevnik-dostopov.js";

// Šifrirani stolpci. Nešifrirano ostane, kar SQL uporablja za iskanje ali je skupno vsem (glej dokument):
// students.name (iskanje podvojenih), answer_cache (skupni, brez osebnih podatkov), knowledge_items (samo id-ji predmetov).
export const SEALED = [
  { table: "messages", cols: ["api_content", "display_text"] },
  { table: "conversations", cols: ["title"] },
  { table: "message_reports", cols: ["note", "question", "answer"] },
  { table: "feedback", cols: ["name", "good", "bad", "ideas", "interview"] },
  { table: "schedules", cols: ["data"] },
  // norm (za UNIQUE) postane slepi indeks HMAC, sicer bi razkril vprašanje s kartice.
  { table: "flashcards", cols: ["front", "back"], norm: true },
];

// --- roki hrambe (vse na enem mestu) ---
const days = (v, d) => (Number.isFinite(Number(v)) && Number(v) > 0 ? Number(v) : d);
export const RETENTION = {
  // Fotografije nalog v pogovorih: po toliko dneh ostane le opomba (besedilo pogovora ostane).
  imageDays: () => days(process.env.EVKLID_IMAGE_DAYS, 7),
  // Dnevnik dostopov: eno leto (varnostna sled za morebitne incidente).
  auditDays: 365,
  // Dnevnik poslanih e-poštnih sporočil (samo za preprečevanje dvojnega pošiljanja): eno leto.
  emailLogDays: 365,
  // Dnevnik obvestil na telefon (enako): 90 dni.
  pushLogDays: 90,
  // Račun, ki e-naslova ni potrdil v toliko dneh in nima profilov s podatki, plačil ali seje, se izbriše.
  unverifiedDays: 30,
  // Potekle seje in odklepi profilov se izbrišejo takoj (niso več veljavni).
};

export const imageGoneText = (n = RETENTION.imageDays()) => `[Fotografija je bila po ${n} dneh izbrisana zaradi varstva podatkov.]`;
export const PHOTO_REJECTED_TEXT = "[Fotografija ni bila shranjena, ker ni povezana z učenjem.]";

const hasTable = (db, t) => !!db.prepare("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?").get(t);
const hasCol = (db, t, c) => db.prepare(`PRAGMA table_info(${t})`).all().some((x) => x.name === c);

// Zamenja slikovne bloke v vsebini sporočila z besedilom. Vrne null, če slike ni.
export function withoutImages(content, text) {
  if (!Array.isArray(content) || !content.some((b) => b?.type === "image")) return null;
  return content.map((b) => (b?.type === "image" ? { type: "text", text } : b));
}

// --- šifriranje obstoječih vrstic ---
// Zašifrira nešifrirane vrstice in znova zašifrira tiste s starim ključem. Idempotentno, ena transakcija na paket.
// Neberljive vrstice (neznan ključ) pusti pri miru. Vrne { [tabela]: število spremenjenih }.
export function* encryptionSteps(db, batch = 200) {
  const cur = currentKeyId();
  if (!cur) return;
  const fresh = `enc1:${cur}:%`;
  for (const t of SEALED) {
    if (!hasTable(db, t.table)) continue;
    const cols = t.cols.filter((c) => hasCol(db, t.table, c));
    const need = cols.map((c) => `(${c} IS NOT NULL AND ${c} NOT LIKE '${fresh}')`);
    if (t.norm) need.push(`norm NOT LIKE 'h1:${cur}:%'`);
    const pick = db.prepare(`SELECT rowid AS rid, ${cols.join(", ")}${t.norm ? ", norm" : ""} FROM ${t.table} WHERE rowid > ? AND (${need.join(" OR ")}) ORDER BY rowid LIMIT ?`);
    const upd = db.prepare(`UPDATE ${t.table} SET ${cols.map((c) => `${c} = ?`).join(", ")}${t.norm ? ", norm = ?" : ""} WHERE rowid = ?`);
    let last = 0;
    let changed = 0;
    for (;;) {
      const rows = pick.all(last, batch);
      if (!rows.length) break;
      db.exec("BEGIN IMMEDIATE");
      try {
        for (const r of rows) {
          last = r.rid;
          const plain = cols.map((c) => (r[c] === null ? null : unseal(r[c], null)));
          if (plain.some((v, i) => v === null && r[cols[i]] !== null)) continue; // neberljivo: pusti
          const vals = plain.map((v) => (v === null ? null : seal(v)));
          if (!t.norm) {
            upd.run(...vals, r.rid);
          } else {
            const norm = blindIndex(normCard(plain[0]));
            try {
              upd.run(...vals, norm, r.rid);
            } catch {
              upd.run(...vals, blindIndex(`${normCard(plain[0])}#${r.rid}`), r.rid); // podvojena kartica
            }
          }
          changed++;
        }
        db.exec("COMMIT");
      } catch (e) {
        db.exec("ROLLBACK");
        throw e;
      }
      yield { table: t.table, changed };
    }
  }
}

export function migrateEncryption(db, batch = 200) {
  const out = {};
  for (const s of encryptionSteps(db, batch)) out[s.table] = s.changed;
  return out;
}

// Koliko vrstic je šifriranih, nešifriranih in neberljivih (scripts/kljuc-podatkov.js --preveri).
export function encryptionStats(db) {
  const out = [];
  for (const t of SEALED) {
    if (!hasTable(db, t.table)) continue;
    for (const c of t.cols.filter((x) => hasCol(db, t.table, x))) {
      const s = { table: t.table, col: c, encrypted: 0, plain: 0, unreadable: 0, oldKey: 0 };
      const cur = currentKeyId();
      for (const r of db.prepare(`SELECT ${c} AS v FROM ${t.table} WHERE ${c} IS NOT NULL`).iterate()) {
        if (!isEncrypted(r.v)) s.plain++;
        else if (!canOpen(r.v)) s.unreadable++;
        else {
          s.encrypted++;
          if (cur && !r.v.startsWith(`enc1:${cur}:`)) s.oldKey++;
        }
      }
      out.push(s);
    }
  }
  return out;
}

// --- dnevno čiščenje ---
export function runRetention(db, { now = Date.now(), log = console } = {}) {
  const out = { images: 0, sessions: 0, unlocks: 0, emailLog: 0, pushLog: 0, audit: 0, unverified: 0 };
  const n = RETENTION.imageDays();
  // Fotografije: sporočila s sliko, starejša od n dni (has_image = 2 pomeni, da je slika že odstranjena).
  if (hasTable(db, "messages")) {
    const rows = db.prepare("SELECT id, api_content FROM messages WHERE has_image = 1 AND created_at < datetime(?, 'unixepoch', ?)").all(Math.floor(now / 1000), `-${n} days`);
    const upd = db.prepare("UPDATE messages SET api_content = ?, has_image = 2 WHERE id = ?");
    for (const r of rows) {
      const plain = unseal(r.api_content, null);
      if (plain === null) continue; // neberljivo (manjka ključ): pusti
      let content;
      try {
        content = JSON.parse(plain);
      } catch {
        continue;
      }
      const next = withoutImages(content, imageGoneText(n));
      upd.run(next ? seal(JSON.stringify(next)) : r.api_content, r.id);
      if (next) out.images++;
    }
  }
  const nowIso = new Date(now).toISOString();
  if (hasTable(db, "parent_sessions")) out.sessions = Number(db.prepare("DELETE FROM parent_sessions WHERE expires_at < ?").run(nowIso).changes);
  if (hasTable(db, "profile_unlocks")) out.unlocks = Number(db.prepare("DELETE FROM profile_unlocks WHERE expires_at < ?").run(now).changes);
  const ago = (d) => new Date(now - d * 86400000).toISOString().replace("T", " ").slice(0, 19);
  if (hasTable(db, "email_log")) out.emailLog = Number(db.prepare("DELETE FROM email_log WHERE created_at < ?").run(ago(RETENTION.emailLogDays)).changes);
  if (hasTable(db, "push_log")) {
    // period se začne z datumom (YYYY-MM-DD:učenec).
    out.pushLog = Number(db.prepare("DELETE FROM push_log WHERE period GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]*' AND substr(period, 1, 10) < ?").run(ago(RETENTION.pushLogDays).slice(0, 10)).changes);
  }
  ensureAuditTable(db);
  out.audit = Number(db.prepare("DELETE FROM audit_log WHERE at < ?").run(ago(RETENTION.auditDays)).changes);
  out.unverified = deleteStaleUnverified(db, { nowIso, before: ago(RETENTION.unverifiedDays) });
  const total = Object.values(out).reduce((a, b) => a + b, 0);
  if (total) log.info?.(`[evklid] čiščenje po rokih hrambe: ${JSON.stringify(out)}`);
  return out;
}

// Nepotrjeni računi: samo brez profilov s podatki, brez plačil ali kode, brez veljavne seje in ne gostje
// (goste čisti server/accounts/guest.js). Previdno: ob dvomu račun ostane.
function deleteStaleUnverified(db, { nowIso, before }) {
  if (!hasTable(db, "parents") || !hasCol(db, "students", "parent_id")) return 0;
  const cols = db.prepare("PRAGMA table_info(parents)").all().map((c) => c.name);
  const paid = ["stripe_customer_id", "sub_id", "sub_status", "promo_until", "bonus_until"].filter((c) => cols.includes(c)).map((c) => `p.${c} IS NULL`);
  const data = ["conversations", "tasks", "topic_state", "xp_events", "flashcards"]
    .filter((t) => hasTable(db, t))
    .map((t) => `EXISTS (SELECT 1 FROM ${t} x WHERE x.student_id = s.id)`);
  const ids = db
    .prepare(
      `SELECT p.id FROM parents p
       WHERE p.is_guest = 0 AND p.email_verified_at IS NULL AND p.created_at < ?
         ${paid.map((c) => `AND ${c}`).join(" ")}
         AND NOT EXISTS (SELECT 1 FROM parent_sessions ps WHERE ps.parent_id = p.id AND ps.expires_at > ?)
         ${data.length ? `AND NOT EXISTS (SELECT 1 FROM students s WHERE s.parent_id = p.id AND (${data.join(" OR ")}))` : ""}`,
    )
    .all(before, nowIso)
    .map((r) => r.id);
  for (const id of ids) {
    db.exec("BEGIN IMMEDIATE");
    try {
      db.prepare("DELETE FROM students WHERE parent_id = ?").run(id);
      db.prepare("DELETE FROM parents WHERE id = ?").run(id);
      db.prepare("UPDATE audit_log SET parent_id = NULL WHERE parent_id = ?").run(id);
      db.exec("COMMIT");
    } catch {
      db.exec("ROLLBACK");
    }
  }
  if (ids.length) audit(db, { actor: "system", action: "unverified_deleted", target: `n:${ids.length}` });
  return ids.length;
}

// Ob zagonu: opozorilo brez ključa, šifriranje v ozadju (paket za paketom, strežnik med tem odgovarja),
// čiščenje takoj in nato enkrat na dan.
export function startPrivacyJobs(db, { scheduler = true, log = console } = {}) {
  warnIfNoKey(log);
  const run = () => {
    if (db.isOpen === false) return;
    try {
      runRetention(db, { log });
    } catch (e) {
      log.error?.(`[evklid] čiščenje po rokih hrambe: ${e.message}`);
    }
  };
  if (!scheduler) return;
  if (encryptionOn()) {
    const steps = encryptionSteps(db);
    const done = {};
    const tick = () => {
      if (db.isOpen === false) return;
      try {
        const s = steps.next();
        if (s.done) {
          const total = Object.values(done).reduce((a, b) => a + b, 0);
          if (total) log.info?.(`[evklid] šifriranje obstoječih podatkov končano: ${JSON.stringify(done)}.`);
          return run();
        }
        done[s.value.table] = s.value.changed;
        setImmediate(tick).unref?.();
      } catch (e) {
        log.error?.(`[evklid] šifriranje obstoječih podatkov: ${e.message}`);
      }
    };
    setImmediate(tick).unref?.();
  } else {
    setImmediate(run).unref?.();
  }
  setInterval(run, 24 * 3600000).unref();
}
