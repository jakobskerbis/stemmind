// Gesla (scrypt), seje s piškotkom in žetoni za e-poštne povezave.
import crypto from "node:crypto";

export const COOKIE = "sm_session";
const SESSION_DAYS = 30;

export function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const key = crypto.scryptSync(password, salt, 64);
  return `scrypt$${salt.toString("base64")}$${key.toString("base64")}`;
}

export function verifyPassword(password, stored) {
  const [kind, salt, key] = String(stored).split("$");
  if (kind !== "scrypt" || !salt || !key) return false;
  const expected = Buffer.from(key, "base64");
  const actual = crypto.scryptSync(password, Buffer.from(salt, "base64"), expected.length);
  return crypto.timingSafeEqual(actual, expected);
}

export const randomToken = (bytes = 32) => crypto.randomBytes(bytes).toString("base64url");
export const sha256 = (s) => crypto.createHash("sha256").update(String(s)).digest("hex");

export function readCookie(req, name = COOKIE) {
  for (const part of (req.headers.cookie || "").split(";")) {
    const i = part.indexOf("=");
    if (i > 0 && part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim());
  }
  return null;
}

export class Sessions {
  constructor(db) {
    this.db = db;
  }
  create(parentId) {
    const token = randomToken();
    const expires = new Date(Date.now() + SESSION_DAYS * 86400000).toISOString();
    this.db.prepare("INSERT INTO parent_sessions (token_hash, parent_id, expires_at) VALUES (?, ?, ?)").run(sha256(token), parentId, expires);
    return { token, maxAge: SESSION_DAYS * 86400 };
  }
  parentId(token) {
    if (!token) return null;
    const row = this.db.prepare("SELECT parent_id, expires_at FROM parent_sessions WHERE token_hash = ?").get(sha256(token));
    if (!row) return null;
    if (Date.parse(row.expires_at) < Date.now()) {
      this.destroy(token);
      return null;
    }
    return row.parent_id;
  }
  destroy(token) {
    if (token) this.db.prepare("DELETE FROM parent_sessions WHERE token_hash = ?").run(sha256(token));
  }
  destroyAll(parentId) {
    this.db.prepare("DELETE FROM parent_sessions WHERE parent_id = ?").run(parentId);
  }
}

export function setSessionCookie(req, res, { token, maxAge }) {
  const secure = req.secure ? "; Secure" : "";
  res.append("Set-Cookie", `${COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure}`);
}
export function clearSessionCookie(res) {
  res.append("Set-Cookie", `${COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
}

// Preprosta omejitev poskusov prijave (v pomnilniku).
export class Throttle {
  constructor(max = 10, windowMs = 15 * 60000) {
    this.max = max;
    this.windowMs = windowMs;
    this.hits = new Map();
  }
  blocked(key) {
    const h = this.hits.get(key);
    if (!h || Date.now() - h.start > this.windowMs) return false;
    return h.count >= this.max;
  }
  fail(key) {
    const h = this.hits.get(key);
    if (!h || Date.now() - h.start > this.windowMs) this.hits.set(key, { start: Date.now(), count: 1 });
    else h.count++;
  }
  reset(key) {
    this.hits.delete(key);
  }
}
