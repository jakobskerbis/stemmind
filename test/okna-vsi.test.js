// Vsak zavihek zgoraj, tudi novi iz tedenskih posodobitev (j, 2026-10-31), dela s premičnimi okni:
// ima svoj pogled <main id="view-…"> in ga inštruktor zna odpreti z ukazom (orodje open_window).
// Izjeme so naštete z razlogom. Okna sama in ročaje preveri scripts/preveri-aplikacijo.cjs (korak okna-vsi).
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { WINDOW_VIEWS } from "../server/chat-settings.js";

const html = fs.readFileSync(new URL("../public/index.html", import.meta.url), "utf8");
const nav = html.match(/<nav class="tabs"[\s\S]*?<\/nav>/)[0];
const tabs = [...nav.matchAll(/data-view="([\w-]+)"/g)].map((m) => m[1]);

// Brez ukaza inštruktorju: klepet je inštruktor sam; Račun ima osebne in finančne podatke (inštruktor jih ne sme
// odpirati, public/settings-registry.js); Mnenje je obrazec za odziv, ne orodje pri učenju.
const NO_COMMAND = { chat: "inštruktor sam", account: "osebni in finančni podatki", feedback: "obrazec za mnenje" };

test("every top tab has its own view (so it can open as a window)", () => {
  assert.ok(tabs.length >= 10);
  for (const v of tabs) assert.match(html, new RegExp(`<main id="view-${v}"`), `zavihek ${v} nima <main id="view-${v}">`);
});

test("the tutor can open every top tab as a window, except the listed ones", () => {
  for (const v of tabs) {
    if (NO_COMMAND[v]) continue;
    assert.ok(WINDOW_VIEWS.includes(v), `nov zavihek »${v}«: dodaj ga v WINDOW_VIEWS (server/chat-settings.js), da ga inštruktor odpre kot okno`);
  }
  for (const v of WINDOW_VIEWS) assert.ok(tabs.includes(v), `WINDOW_VIEWS ima »${v}«, ki ni zavihek zgoraj`);
});
