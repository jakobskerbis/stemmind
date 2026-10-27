@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"
title STEMMind

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js ni namescen. Namesti ga s https://nodejs.org ^(gumb LTS^) in nato znova dvakrat klikni to datoteko.
  pause
  exit /b 1
)

if not exist .env (
  echo.
  set /p KEY=Prilepi svoj API kljuc ^(sk-ant-...^) in pritisni Enter: 
  echo ANTHROPIC_API_KEY=!KEY!>.env
  echo Kljuc je shranjen v datoteko .env
)

if not exist node_modules (
  echo Namescam potrebne knjiznice, to traja minuto ...
  call npm install --omit=dev
)

echo.
echo STEMMind se zaganja. Brskalnik se bo odprl sam.
echo Za ustavitev zapri to okno.
start "" cmd /c "timeout /t 3 >nul & start http://localhost:3000"
call npm start
pause
