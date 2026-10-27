import { openDb } from "./db.js";
import { createApp } from "./app.js";
import { isMockMode, MODEL } from "./claude.js";

const store = openDb();
const app = createApp(store);
const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  console.log(`STEMMind teče na http://localhost:${port}`);
  console.log(isMockMode() ? "Preizkusni način (brez API ključa)." : `Model: ${MODEL}`);
});
