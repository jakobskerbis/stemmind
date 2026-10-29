@echo off
rem STEMMIND-SAMOPOSODOBITEV: to datoteko lahko samodejna posodobitev varno prepise tudi med tekom
rem (dolgi ukazi so v eni vrstici z "exit /b", po posodobitvi se datoteka prebere znova).
setlocal enabledelayedexpansion
cd /d "%~dp0"
title STEMMind za telefon

rem Odpre STEMMind na telefonu: posodobi aplikacijo, jo zazene z geslom in odpre
rem povezavo (stalno prek ngrok ali zacasno prek Cloudflare). Racunalnik mora ostati prizgan.
rem Med tekom se aplikacija vsaki 2 uri sama posodobi, povezava ostane ista.

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js ni namescen. Namesti ga s https://nodejs.org ^(gumb LTS^) in nato znova dvakrat klikni to datoteko.
  pause
  exit /b 1
)

if not "%~1"=="--posodobljeno" (
  rem Ustavi STEMMind, ce ze tece ^(tudi okno zagon-windows.bat^), da se zazene z geslom.
  powershell -NoProfile -Command "Get-CimInstance Win32_Process | Where-Object { $_.Name -eq 'node.exe' -and $_.CommandLine -match 'scripts.(zaganjalnik|zagon|telefon)\.js' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }" >nul 2>nul
  for /f "tokens=5" %%p in ('netstat -ano ^| findstr ":3000 " ^| findstr LISTENING') do taskkill /PID %%p /F >nul 2>nul
  rem Najnovejsa razlicica z GitHuba; nato to datoteko preberemo znova od zacetka.
  node scripts\posodobitev.js
  call "%~f0" --posodobljeno
  exit /b
)

if not exist .env (
  echo.
  set /p KEY=Prilepi svoj API kljuc ^(sk-ant-...^) in pritisni Enter: 
  echo ANTHROPIC_API_KEY=!KEY!>.env
)

set NEED_INSTALL=0
if not exist node_modules\.stemmind-package.json set NEED_INSTALL=1
if exist node_modules\.stemmind-package.json fc /b package.json node_modules\.stemmind-package.json >nul 2>nul || set NEED_INSTALL=1
if "!NEED_INSTALL!"=="1" (
  echo Namescam potrebne knjiznice, to traja minuto ...
  call npm install --omit=dev --no-audit --no-fund
  copy /y package.json node_modules\.stemmind-package.json >nul
)

echo.
node scripts\zaganjalnik.js telefon & pause & exit /b
