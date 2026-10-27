@echo off
rem Enkrat dvakrat klikni to datoteko: na namizju ustvari bliznjico "STEMMind".
cd /d "%~dp0"
set "STEM_DIR=%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$d=$env:STEM_DIR.TrimEnd('\');" ^
  "$desk=[Environment]::GetFolderPath('Desktop');" ^
  "$s=(New-Object -ComObject WScript.Shell).CreateShortcut((Join-Path $desk 'STEMMind.lnk'));" ^
  "$s.TargetPath=(Join-Path $d 'zagon-windows.bat');" ^
  "$s.WorkingDirectory=$d;" ^
  "$s.IconLocation=(Join-Path $d 'assets\stemmind.ico');" ^
  "$s.Description='Odpri STEMMind';" ^
  "$s.Save()"
if errorlevel 1 (
  echo Bliznjice ni bilo mogoce ustvariti.
) else (
  echo.
  echo Bliznjica STEMMind je na namizju. Odslej klikni kar njo.
)
echo.
pause
