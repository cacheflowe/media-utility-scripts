#!/bin/bash
# usage: ./imageResizeTo.sh /absolute/path/to/files
for file in $1/*; do mv "$file" `echo $file | tr ' ' '_'` ; done
