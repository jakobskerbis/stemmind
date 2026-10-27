// Shramba (SQLite, vgrajen v Node 22).
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { DEFAULT_SETTINGS, normalizeSettings, normalizeWeaknessList } from "./settings.js";

export function openDb(file = process.env.STEMMIND_DB || "data/stemmind.db") {
  if (file !== ":memory:") fs.mkdirSync(path.dirname(file), { recursive: true });
  const db = new DatabaseSync(file);
  db.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      settings TEXT NOT NULL,
      manual_weaknesses TEXT NOT NULL DEFAULT '[]',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS conversations (
      id INTEGER PRIMARY KEY,
      student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
      title TEXT NOT NULL DEFAULT 'Nov pogovor',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY,
      conversation_id INTEGER NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
      role TEXT NOT NULL CHECK (role IN ('user','assistant')),
      api_content TEXT NOT NULL,   -- vsebina, kot gre v API (JSON)
      display_text TEXT NOT NULL,  -- besedilo za prikaz (brez META)
      has_image INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY,
      student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
      conversation_id INTEGER NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
      message_id INTEGER REFERENCES messages(id) ON DELETE SET NULL,
      subject TEXT,
      topic TEXT,
      error INTEGER NOT NULL DEFAULT 0,
      mode TEXT,
      flag TEXT NOT NULL DEFAULT 'none',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_msg_conv ON messages(conversation_id, id);
    CREATE INDEX IF NOT EXISTS idx_events_student ON events(student_id, created_at);
  `);
  return new Store(db);
}

const parseStudent = (row) =>
  row && {
    id: row.id,
    name: row.name,
    settings: normalizeSettings(JSON.parse(row.settings)),
    manual_weaknesses: JSON.parse(row.manual_weaknesses),
    created_at: row.created_at,
  };

export class Store {
  constructor(db) {
    this.db = db;
  }

  // --- učenci ---
  listStudents() {
    return this.db.prepare("SELECT * FROM students ORDER BY id").all().map(parseStudent);
  }
  getStudent(id) {
    return parseStudent(this.db.prepare("SELECT * FROM students WHERE id = ?").get(id));
  }
  createStudent(name, settings = DEFAULT_SETTINGS) {
    const r = this.db
      .prepare("INSERT INTO students (name, settings) VALUES (?, ?)")
      .run(name, JSON.stringify(normalizeSettings(settings)));
    return this.getStudent(Number(r.lastInsertRowid));
  }
  updateStudent(id, { name, settings, manual_weaknesses }) {
    const cur = this.getStudent(id);
    if (!cur) return null;
    this.db
      .prepare("UPDATE students SET name = ?, settings = ?, manual_weaknesses = ? WHERE id = ?")
      .run(
        name ?? cur.name,
        JSON.stringify(normalizeSettings({ ...cur.settings, ...(settings || {}) })),
        JSON.stringify(manual_weaknesses !== undefined ? normalizeWeaknessList(manual_weaknesses) : cur.manual_weaknesses),
        id,
      );
    return this.getStudent(id);
  }
  deleteStudent(id) {
    return this.db.prepare("DELETE FROM students WHERE id = ?").run(id).changes > 0;
  }

  // --- pogovori ---
  listConversations(studentId) {
    return this.db
      .prepare("SELECT * FROM conversations WHERE student_id = ? ORDER BY updated_at DESC, id DESC")
      .all(studentId);
  }
  getConversation(id) {
    return this.db.prepare("SELECT * FROM conversations WHERE id = ?").get(id);
  }
  createConversation(studentId) {
    const r = this.db.prepare("INSERT INTO conversations (student_id) VALUES (?)").run(studentId);
    return this.getConversation(Number(r.lastInsertRowid));
  }
  renameConversation(id, title) {
    this.db.prepare("UPDATE conversations SET title = ? WHERE id = ?").run(title, id);
  }
  touchConversation(id) {
    this.db.prepare("UPDATE conversations SET updated_at = datetime('now') WHERE id = ?").run(id);
  }
  deleteConversation(id) {
    return this.db.prepare("DELETE FROM conversations WHERE id = ?").run(id).changes > 0;
  }

  // --- sporočila ---
  addMessage(conversationId, role, apiContent, displayText, hasImage = false) {
    const r = this.db
      .prepare(
        "INSERT INTO messages (conversation_id, role, api_content, display_text, has_image) VALUES (?, ?, ?, ?, ?)",
      )
      .run(conversationId, role, JSON.stringify(apiContent), displayText, hasImage ? 1 : 0);
    this.touchConversation(conversationId);
    return Number(r.lastInsertRowid);
  }
  listMessages(conversationId) {
    return this.db
      .prepare("SELECT * FROM messages WHERE conversation_id = ? ORDER BY id")
      .all(conversationId)
      .map((m) => ({ ...m, api_content: JSON.parse(m.api_content) }));
  }
  // Zgodovina za API: dosledno zaporedje, brez sprememb že poslanih blokov.
  apiHistory(conversationId) {
    return this.listMessages(conversationId).map((m) => ({ role: m.role, content: m.api_content }));
  }

  // --- analitika ---
  addEvent(e) {
    this.db
      .prepare(
        `INSERT INTO events (student_id, conversation_id, message_id, subject, topic, error, mode, flag)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(e.student_id, e.conversation_id, e.message_id ?? null, e.subject, e.topic, e.error, e.mode, e.flag);
  }
  lastEvent(conversationId) {
    return this.db
      .prepare("SELECT * FROM events WHERE conversation_id = ? ORDER BY id DESC LIMIT 1")
      .get(conversationId);
  }
  topicStats(studentId, days = 60) {
    return this.db
      .prepare(
        `SELECT subject, topic, COUNT(*) AS turns, SUM(error) AS errors, MAX(created_at) AS last_seen
         FROM events
         WHERE student_id = ? AND topic IS NOT NULL AND created_at >= datetime('now', ?)
         GROUP BY subject, topic
         ORDER BY last_seen DESC`,
      )
      .all(studentId, `-${days} days`);
  }
  flagEvents(studentId, limit = 50) {
    return this.db
      .prepare(
        `SELECT e.flag, e.created_at, e.conversation_id, c.title
         FROM events e JOIN conversations c ON c.id = e.conversation_id
         WHERE e.student_id = ? AND e.flag != 'none'
         ORDER BY e.id DESC LIMIT ?`,
      )
      .all(studentId, limit);
  }
  activityByDay(studentId, days = 30) {
    return this.db
      .prepare(
        `SELECT date(created_at) AS day, COUNT(*) AS turns, SUM(error) AS errors
         FROM events WHERE student_id = ? AND created_at >= datetime('now', ?)
         GROUP BY day ORDER BY day`,
      )
      .all(studentId, `-${days} days`);
  }
}
