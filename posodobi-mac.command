#!/bin/bash
# STEMMIND-SAMOPOSODOBITEV: vse je v funkciji main, zato je prepis med tekom varen.
# STEMMind se posodablja sam (ob zagonu in vsakih 15 minut). Ta datoteka posodobitev sproži takoj.
# Ključ (.env), podatki (data) in knjižnice (node_modules) ostanejo.
main() {
  cd "$(dirname "$0")" || exit 1
  if curl -s -o /dev/null -m 2 http://localhost:3000/healthz; then
    mkdir -p data && touch data/posodobi-zdaj
    echo "STEMMind teče: nova različica se namesti v pol minute in aplikacija se znova zažene sama."
    read -r -p "Pritisni Enter za izhod."
    exit 0
  fi
  # STEMMind ne teče: zagon-mac.command ga najprej posodobi in nato zažene.
  exec bash ./zagon-mac.command
}
main "$@"
exit $?
