@echo off
setlocal
rem Enkrat dvakrat klikni: Kompreno za telefon se odslej zazene sam, ko prizges racunalnik
rem (okno se odpre pomanjsano). Ce ga zazenes se enkrat, samodejni zagon izklopis.
cd /d "%~dp0"
set "STEM_DIR=%~dp0"
set "LINK=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\Kompreno za telefon.lnk"
rem Aplikacija se je prej imenovala STEMMind: staro bliznjico preimenuj, da ni dveh zagonov.
set "OLDLINK=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\STEMMind za telefon.lnk"
if exist "%OLDLINK%" if not exist "%LINK%" move "%OLDLINK%" "%LINK%" >nul
if exist "%OLDLINK%" del "%OLDLINK%"

if exist "%LINK%" (
  choice /c DN /m "Samodejni zagon je ze vklopljen. Ga izklopim"
  if errorlevel 2 goto konec
  del "%LINK%"
  echo Samodejni zagon je izklopljen.
  goto konec
)

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$d=$env:STEM_DIR.TrimEnd('\');" ^
  "$s=(New-Object -ComObject WScript.Shell).CreateShortcut($env:LINK);" ^
  "$s.TargetPath=(Join-Path $d 'telefon-windows.bat');" ^
  "$s.WorkingDirectory=$d;" ^
  "$s.WindowStyle=7;" ^
  "$s.IconLocation=(Join-Path $d 'assets\kompreno.ico');" ^
  "$s.Description='Kompreno za telefon';" ^
  "$s.Save()"
if errorlevel 1 (
  echo Samodejnega zagona ni bilo mogoce vklopiti.
  goto konec
)
echo Samodejni zagon je vklopljen: Kompreno za telefon se zazene ob vsakem prizigu racunalnika.
echo.
choice /c DN /m "Naj racunalnik ne zaspi, ko je prikljucen na elektriko (sicer povezava ugasne)"
if errorlevel 2 goto konec
powercfg /change standby-timeout-ac 0
echo Racunalnik na elektriki ne bo vec zaspal. Zaslon se se vedno ugasne kot prej.

:konec
echo.
pause
