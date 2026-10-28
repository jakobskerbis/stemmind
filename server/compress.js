// Stiskanje odgovorov (brotli ali gzip) brez dodatnih knjižnic: za počasne in drage
// mobilne povezave. Statične datoteke stisnemo enkrat in jih hranimo v pomnilniku,
// JSON odgovore API stisnemo sproti. Pretočni odgovori (SSE klepet) ostanejo nestisnjeni.
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import crypto from "node:crypto";

const TYPES = {
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
};
const MIN_SIZE = 1024;

// Izbere kodiranje iz glave Accept-Encoding (brotli ima prednost).
export function pickEncoding(header = "") {
  const h = String(header).toLowerCase();
  if (/\bbr\b/.test(h)) return "br";
  if (/\bgzip\b/.test(h)) return "gzip";
  return null;
}

const encode = (buf, enc) =>
  enc === "br"
    ? zlib.brotliCompressSync(buf, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 9, [zlib.constants.BROTLI_PARAM_SIZE_HINT]: buf.length } })
    : zlib.gzipSync(buf, { level: 9 });

// Stisnjene statične datoteke iz mape `root` (in podmap, npr. vendor), predpomnjene po času spremembe.
// mounts: [[url predpona, mapa], ...]
export function compressedStatic(mounts) {
  const cache = new Map(); // "enc:datoteka" -> { mtime, body, etag }
  return (req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();
    const enc = pickEncoding(req.headers["accept-encoding"]);
    if (!enc) return next();
    let url;
    try {
      url = decodeURIComponent(req.path);
    } catch {
      return next();
    }
    if (url.endsWith("/")) url += "index.html";
    const ext = path.extname(url).toLowerCase();
    if (!TYPES[ext]) return next();
    for (const [prefix, dir] of mounts) {
      if (!url.startsWith(prefix)) continue;
      const file = path.join(dir, url.slice(prefix.length));
      if (!file.startsWith(dir + path.sep) && file !== dir) return next(); // ../ ven iz mape
      let st;
      try {
        st = fs.statSync(file);
      } catch {
        continue;
      }
      if (!st.isFile() || st.size < MIN_SIZE) return next();
      const key = `${enc}:${file}`;
      let hit = cache.get(key);
      if (!hit || hit.mtime !== st.mtimeMs) {
        const raw = fs.readFileSync(file);
        hit = { mtime: st.mtimeMs, body: encode(raw, enc), etag: `"${crypto.createHash("sha1").update(raw).digest("base64url").slice(0, 20)}-${enc}"` };
        cache.set(key, hit);
      }
      res.setHeader("Vary", "Accept-Encoding");
      res.setHeader("ETag", hit.etag);
      res.setHeader("Cache-Control", prefix.startsWith("/vendor") ? "public, max-age=604800" : "no-cache");
      if (req.headers["if-none-match"] === hit.etag) return res.status(304).end();
      res.setHeader("Content-Type", TYPES[ext]);
      res.setHeader("Content-Encoding", enc);
      res.setHeader("Content-Length", hit.body.length);
      return req.method === "HEAD" ? res.end() : res.end(hit.body);
    }
    next();
  };
}

// JSON odgovori API: res.json stisne telo, če je dovolj veliko in ga odjemalec sprejme.
export function compressedJson() {
  return (req, res, next) => {
    const enc = pickEncoding(req.headers["accept-encoding"]);
    if (!enc) return next();
    const plain = res.json.bind(res);
    res.json = (obj) => {
      const body = Buffer.from(JSON.stringify(obj));
      if (body.length < MIN_SIZE || res.headersSent) return plain(obj);
      // Hitrejša raven za sprotno stiskanje.
      const out = enc === "br" ? zlib.brotliCompressSync(body, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 5 } }) : zlib.gzipSync(body, { level: 6 });
      res.setHeader("Vary", "Accept-Encoding");
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.setHeader("Content-Encoding", enc);
      res.setHeader("Content-Length", out.length);
      return res.end(out);
    };
    next();
  };
}
