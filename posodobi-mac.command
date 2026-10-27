#!/bin/bash
cd "$(dirname "$0")"

# Prenese najnovejšo različico STEMMind z GitHuba in jo prekopira čez to mapo.
# Ključ (.env), podatki (data) in knjižnice (node_modules) ostanejo.

TMP_DIR="$(mktemp -d)"
echo "Prenašam najnovejšo različico ..."
if ! curl -L -s -o "$TMP_DIR/main.zip" https://github.com/jakobskerbis/stemmind/archive/refs/heads/main.zip; then
  echo "Prenos ni uspel. Preveri internetno povezavo in poskusi znova."
  read -r -p "Pritisni Enter za izhod."
  exit 1
fi
unzip -q "$TMP_DIR/main.zip" -d "$TMP_DIR"
if [ ! -f "$TMP_DIR/stemmind-main/package.json" ]; then
  echo "Razpakiranje ni uspelo."
  read -r -p "Pritisni Enter za izhod."
  exit 1
fi

# Če STEMMind teče, ga ustavi, da se naloži nova različica.
PID="$(lsof -tiTCP:3000 -sTCP:LISTEN 2>/dev/null)"
[ -n "$PID" ] && kill "$PID" 2>/dev/null

rsync -a --exclude .env --exclude data --exclude node_modules --exclude .git "$TMP_DIR/stemmind-main/" ./
rm -rf "$TMP_DIR"

echo "Posodobljeno. STEMMind se zdaj zažene."
exec bash ./zagon-mac.command
