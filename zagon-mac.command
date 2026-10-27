#!/bin/bash
cd "$(dirname "$0")"

# Če STEMMind že teče, samo odpri brskalnik.
if lsof -iTCP:3000 -sTCP:LISTEN >/dev/null 2>&1; then
  open http://localhost:3000
  exit 0
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js ni nameščen. Namesti ga s https://nodejs.org (gumb LTS) in nato znova odpri to datoteko."
  read -r -p "Pritisni Enter za izhod."
  exit 1
fi

if [ ! -f .env ]; then
  echo
  read -r -p "Prilepi svoj API ključ (sk-ant-...) in pritisni Enter: " KEY
  echo "ANTHROPIC_API_KEY=$KEY" > .env
  echo "Ključ je shranjen v datoteko .env"
fi

# Knjižnice namesti ob prvem zagonu in po vsaki posodobitvi (ko se package.json spremeni).
if ! cmp -s package.json node_modules/.stemmind-package.json; then
  echo "Nameščam potrebne knjižnice, to traja minuto ..."
  npm install --omit=dev --no-audit --no-fund && cp package.json node_modules/.stemmind-package.json
fi

echo
echo "STEMMind se zaganja. Brskalnik se bo odprl sam."
echo "Za ustavitev zapri to okno."
(sleep 3; open http://localhost:3000) &
npm start
