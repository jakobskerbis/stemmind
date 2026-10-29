@echo off
rem STEMMIND-SAMOPOSODOBITEV: to datoteko lahko samodejna posodobitev varno prepise tudi med tekom.
setlocal
cd /d "%~dp0"
title STEMMind - posodobitev

rem STEMMind se posodablja sam (ob zagonu in vsakih 15 minut). Ta datoteka posodobitev sprozi takoj.
rem Kljuc (.env), podatki (data) in knjiznice (node_modules) ostanejo.

curl -s -o nul -m 2 http://localhost:3000/healthz >nul 2>nul
if not errorlevel 1 (
  if not exist data mkdir data
  type nul > data\posodobi-zdaj
  echo STEMMind tece: nova razlicica se namesti v pol minute in aplikacija se znova zazene sama.
  echo Povezava za telefon ostane ista.
  echo.
  pause
  exit /b 0
)

rem STEMMind ne tece: zagon-windows.bat ga najprej posodobi in nato zazene.
call zagon-windows.bat & exit /b
