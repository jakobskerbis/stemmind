@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"
title STEMMind za telefon

rem Odpre STEMMind na telefonu: posodobi aplikacijo, jo zazene z geslom in odpre
rem brezplacno povezavo prek Cloudflare. Racunalnik mora ostati prizgan.

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js ni namescen. Namesti ga s https://nodejs.org ^(gumb LTS^) in nato znova dvakrat klikni to datoteko.
  pause
  exit /b 1
)

rem Ustavi STEMMind, ce ze tece, da se zazene z geslom.
for /f "tokens=5" %%p in ('netstat -ano ^| findstr ":3000 " ^| findstr LISTENING') do taskkill /PID %%p /F >nul 2>nul

echo Prenasam najnovejso razlicico ...
set "TMP_DIR=%TEMP%\stemmind-posodobitev"
if exist "%TMP_DIR%" rmdir /s /q "%TMP_DIR%"
mkdir "%TMP_DIR%"
curl -L -s -o "%TMP_DIR%\main.zip" https://github.com/jakobskerbis/stemmind/archive/refs/heads/main.zip
if not errorlevel 1 tar -xf "%TMP_DIR%\main.zip" -C "%TMP_DIR%" >nul 2>nul
if exist "%TMP_DIR%\stemmind-main\package.json" (
  robocopy "%TMP_DIR%\stemmind-main" "%~dp0." /E /NFL /NDL /NJH /NJS /XF .env telefon-windows.bat /XD data node_modules .git >nul
) else (
  echo Posodobitev ni uspela, nadaljujem s trenutno razlicico.
)
rmdir /s /q "%TMP_DIR%" >nul 2>nul

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
node scripts\telefon.js
pause
