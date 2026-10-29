// Windows: bližnjici iz časa, ko se je aplikacija imenovala STEMMind (namizje in samodejni zagon),
// ob zagonu preimenujemo v »Kompreno« z novo ikono. Cilj (zagon-windows.bat / telefon-windows.bat)
// ostane enak, zato uporabniku ni treba storiti ničesar. Napake tiho preskočimo.
import path from "node:path";
import { execFile } from "node:child_process";

export function renameLegacyShortcuts(root) {
  if (process.platform !== "win32") return;
  const icon = path.join(root, "assets", "kompreno.ico").replace(/'/g, "''");
  const ps = [
    "$ws = New-Object -ComObject WScript.Shell",
    "$startup = Join-Path $env:APPDATA 'Microsoft\\Windows\\Start Menu\\Programs\\Startup'",
    "$pairs = @(@([Environment]::GetFolderPath('Desktop'), 'STEMMind.lnk', 'Kompreno.lnk', 'Odpri Kompreno'),",
    "           @($startup, 'STEMMind za telefon.lnk', 'Kompreno za telefon.lnk', 'Kompreno za telefon'))",
    "foreach ($p in $pairs) {",
    "  $old = Join-Path $p[0] $p[1]; $new = Join-Path $p[0] $p[2]",
    "  if (-not (Test-Path -LiteralPath $old)) { continue }",
    "  if (-not (Test-Path -LiteralPath $new)) {",
    "    $o = $ws.CreateShortcut($old); $n = $ws.CreateShortcut($new)",
    "    $n.TargetPath = $o.TargetPath; $n.Arguments = $o.Arguments; $n.WorkingDirectory = $o.WorkingDirectory",
    `    $n.WindowStyle = $o.WindowStyle; $n.IconLocation = '${icon}'; $n.Description = $p[3]; $n.Save()`,
    "  }",
    "  Remove-Item -LiteralPath $old",
    "}",
  ].join("\n");
  const encoded = Buffer.from(ps, "utf16le").toString("base64"); // brez težav z narekovaji in vrsticami
  execFile("powershell", ["-NoProfile", "-ExecutionPolicy", "Bypass", "-EncodedCommand", encoded], { windowsHide: true }, () => {});
}
