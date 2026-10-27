#!/bin/bash
# Enkrat dvakrat klikni to datoteko: na namizju ustvari bližnjico "STEMMind".
DIR="$(cd "$(dirname "$0")" && pwd)"
LINK="$HOME/Desktop/STEMMind"
rm -f "$LINK"
osascript -e "tell application \"Finder\" to make alias file to POSIX file \"$DIR/zagon-mac.command\" at POSIX file \"$HOME/Desktop\" with properties {name:\"STEMMind\"}" >/dev/null
osascript -l JavaScript -e "ObjC.import('AppKit'); \$.NSWorkspace.sharedWorkspace.setIconForFileOptions(\$.NSImage.alloc.initWithContentsOfFile('$DIR/assets/stemmind.png'), '$LINK', 0)" >/dev/null 2>&1
echo
echo "Bližnjica STEMMind je na namizju. Odslej klikni kar njo."
read -r -p "Pritisni Enter za izhod."
