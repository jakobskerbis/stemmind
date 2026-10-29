import "./env.js";
import path from "node:path";
import { openDb } from "./db.js";
import { createApp } from "./app.js";
import { isMockMode, MODEL } from "./claude.js";

const store = openDb();
// Povratne informacije testerjev se zapišejo tudi v datoteko ob bazi (data/povratne-informacije.json).
const feedbackFile = path.resolve(path.dirname(process.env.EVKLID_DB || "data/evklid.db"), "povratne-informacije.json");
const app = createApp(store, { feedbackFile });
const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  console.log(`Evklid teče na http://localhost:${port}`);
  console.log(isMockMode() ? "Preizkusni način (brez API ključa)." : `Model: ${MODEL}`);
});
