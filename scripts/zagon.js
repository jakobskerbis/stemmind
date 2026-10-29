// STEMMind na tem računalniku: zažene strežnik, ga drži prižganega in ga vsake 2 uri
// samodejno posodobi z GitHuba (docs/posodobitve.md).
// Uporaba: node scripts/zaganjalnik.js zagon [--odpri]   (Windows: zagon-windows.bat)
import path from "node:path";
import { execFile } from "node:child_process";
import { fileURLToPath } from "node:url";
import { superviseServer, autoUpdate, openLog, logSay, serverStatus, RESTART_CODE } from "./nadzor.js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 3000);
const local = `http://localhost:${port}`;
const say = (s = "") => console.log(s);

function openBrowser() {
  if (!process.argv.includes("--odpri") || process.env.STEMMIND_PONOVNO) return;
  const [cmd, args] = process.platform === "win32" ? ["cmd", ["/c", "start", "", local]]
    : process.platform === "darwin" ? ["open", [local]] : ["xdg-open", [local]];
  execFile(cmd, args, () => {});
}

process.chdir(root);
if (await serverStatus(port)) {
  say("STEMMind že teče.");
  openBrowser();
  process.exit(0);
}
const log = openLog(root);
const server = superviseServer({ root, port, say, log });
const stop = (code = 0) => { server.stop(); process.exit(code); };
process.on("SIGINT", () => stop());
process.on("SIGTERM", () => stop());
if (!(await server.start())) say("Strežnik se še zaganja ...");
openBrowser();
say();
say(`STEMMind teče na ${local}`);
say("Za ustavitev zapri to okno. Posodobitve se namestijo same (vsake 2 uri).");
autoUpdate({
  root, port, say: logSay(log), server,
  restartSelf: process.env.STEMMIND_ZAGANJALNIK ? () => stop(RESTART_CODE) : null,
});
