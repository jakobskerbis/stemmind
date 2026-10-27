#!/bin/bash
cd "$(dirname "$0")"

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

if [ ! -d node_modules ]; then
  echo "Nameščam potrebne knjižnice, to traja minuto ..."
  npm install --omit=dev
fi

echo
echo "STEMMind se zaganja. Brskalnik se bo odprl sam."
echo "Za ustavitev zapri to okno."
(sleep 3; open http://localhost:3000) &
npm start
