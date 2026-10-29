@echo off
rem KOMPRENO-SAMOPOSODOBITEV: to datoteko lahko samodejna posodobitev varno prepise tudi med tekom
rem (dolgi ukazi so v eni vrstici z "exit /b", po posodobitvi se datoteka prebere znova).
setlocal enabledelayedexpansion
cd /d "%~dp0"
title Kompreno za telefon

rem Odpre Kompreno na telefonu: posodobi aplikacijo, jo zazene z geslom in odpre
rem povezavo (stalno prek ngrok ali zacasno prek Cloudflare). Racunalnik mora ostati prizgan.
rem Med tekom se aplikacija sama posodobi (preverja vsakih 15 minut), povezava ostane ista.

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js ni namescen. Namesti ga s https://nodejs.org ^(gumb LTS^) in nato znova dvakrat klikni to datoteko.
  pause
  exit /b 1
)

if not "%~1"=="--posodobljeno" (
  rem Ustavi Kompreno, ce ze tece ^(tudi okno zagon-windows.bat^), da se zazene z geslom.
  powershell -NoProfile -Command "Get-CimInstance Win32_Process | Where-Object { $_.Name -eq 'node.exe' -and $_.CommandLine -match 'scripts.(zaganjalnik|zagon|telefon)\.js' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }" >nul 2>nul
  for /f "tokens=5" %%p in ('netstat -ano ^| findstr ":3000 " ^| findstr LISTENING') do taskkill /PID %%p /F >nul 2>nul
  rem Najnovejsa razlicica z GitHuba; nato to datoteko preberemo znova od zacetka.
  if exist scripts\posodobitev.js (
    node scripts\posodobitev.js
  ) else (
    rem Starejsa mapa brez programa za posodobitev: prenesi celotno razlicico enkrat po starem.
    echo Prenasam najnovejso razlicico ...
    if exist "%TEMP%\kompreno-posodobitev" rmdir /s /q "%TEMP%\kompreno-posodobitev"
    mkdir "%TEMP%\kompreno-posodobitev"
    curl -L -s -o "%TEMP%\kompreno-posodobitev\main.zip" https://github.com/jakobskerbis/stemmind/archive/refs/heads/main.zip
    tar -xf "%TEMP%\kompreno-posodobitev\main.zip" -C "%TEMP%\kompreno-posodobitev" >nul 2>nul
    if exist "%TEMP%\kompreno-posodobitev\stemmind-main\package.json" robocopy "%TEMP%\kompreno-posodobitev\stemmind-main" "%~dp0." /E /NFL /NDL /NJH /NJS /XF .env /XD data node_modules .git >nul
    rmdir /s /q "%TEMP%\kompreno-posodobitev" >nul 2>nul
  )
  call "%~f0" --posodobljeno
  exit /b
)

if not exist .env (
  echo.
  set /p KEY=Prilepi svoj API kljuc ^(sk-ant-...^) in pritisni Enter: 
  echo ANTHROPIC_API_KEY=!KEY!>.env
)

set NEED_INSTALL=0
if not exist node_modules\.kompreno-package.json set NEED_INSTALL=1
if exist node_modules\.kompreno-package.json fc /b package.json node_modules\.kompreno-package.json >nul 2>nul || set NEED_INSTALL=1
if "!NEED_INSTALL!"=="1" (
  echo Namescam potrebne knjiznice, to traja minuto ...
  call npm install --omit=dev --no-audit --no-fund
  copy /y package.json node_modules\.kompreno-package.json >nul
)

echo.
node scripts\zaganjalnik.js telefon & pause & exit /b
