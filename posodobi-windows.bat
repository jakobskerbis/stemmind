@echo off
setlocal
cd /d "%~dp0"
title STEMMind - posodobitev

rem Prenese najnovejso razlicico STEMMind z GitHuba in jo prekopira cez to mapo.
rem Kljuc (.env), podatki (data) in knjiznice (node_modules) ostanejo.

set "TMP_DIR=%TEMP%\stemmind-posodobitev"
if exist "%TMP_DIR%" rmdir /s /q "%TMP_DIR%"
mkdir "%TMP_DIR%"

echo Prenasam najnovejso razlicico ...
curl -L -s -o "%TMP_DIR%\main.zip" https://github.com/jakobskerbis/stemmind/archive/refs/heads/main.zip
if errorlevel 1 (
  echo Prenos ni uspel. Preveri internetno povezavo in poskusi znova.
  pause
  exit /b 1
)

tar -xf "%TMP_DIR%\main.zip" -C "%TMP_DIR%"
if not exist "%TMP_DIR%\stemmind-main\package.json" (
  echo Razpakiranje ni uspelo.
  pause
  exit /b 1
)

rem Ce STEMMind tece, ga ustavi, da se nalozi nova razlicica.
for /f "tokens=5" %%p in ('netstat -ano ^| findstr ":3000 " ^| findstr LISTENING') do taskkill /PID %%p /F >nul 2>nul

robocopy "%TMP_DIR%\stemmind-main" "%~dp0." /E /NFL /NDL /NJH /NJS /XF .env /XD data node_modules .git >nul
if %errorlevel% geq 8 (
  echo Kopiranje ni uspelo. Zapri STEMMind in poskusi znova.
  pause
  exit /b 1
)
rmdir /s /q "%TMP_DIR%"

echo Posodobljeno. STEMMind se zdaj zazene.
call zagon-windows.bat
