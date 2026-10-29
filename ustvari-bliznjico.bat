@echo off
rem Enkrat dvakrat klikni to datoteko: na namizju ustvari bliznjico "Kompreno".
cd /d "%~dp0"
set "STEM_DIR=%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$d=$env:STEM_DIR.TrimEnd('\');" ^
  "$desk=[Environment]::GetFolderPath('Desktop');" ^
  "$s=(New-Object -ComObject WScript.Shell).CreateShortcut((Join-Path $desk 'Kompreno.lnk'));" ^
  "$old=(Join-Path $desk 'STEMMind.lnk'); if (Test-Path $old) { Remove-Item $old };" ^
  "$s.TargetPath=(Join-Path $d 'zagon-windows.bat');" ^
  "$s.WorkingDirectory=$d;" ^
  "$s.IconLocation=(Join-Path $d 'assets\kompreno.ico');" ^
  "$s.Description='Odpri Kompreno';" ^
  "$s.Save()"
if errorlevel 1 (
  echo Bliznjice ni bilo mogoce ustvariti.
) else (
  echo.
  echo Bliznjica Kompreno je na namizju. Odslej klikni kar njo.
)
echo.
pause
