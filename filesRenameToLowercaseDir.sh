#!/bin/bash
# usage: ./imageResizeTo.sh /absolute/path/to/files
for f in $1/*; do mv "$f" "$f.tmp"; mv "$f.tmp" "`echo $f | tr "[:upper:]" "[:lower:]"`"; done
