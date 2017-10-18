#!/bin/bash
# usage: $ ./convert-mp3 /path/to/files
# docs: http://lame.cvs.sourceforge.net/viewvc/lame/lame/USAGE
for file in $1/*wav
do
  echo "Converting mp3: $file ..."
  lame --abr 320 --resample 44.1 --bitwidth 16 -q0 -a $file ${file/wav/mp3}
done
for file in $1/*aif
do
  echo "Converting mp3: $file ..."
  lame --abr 320 --resample 44.1 --bitwidth 16 -q0 -a $file ${file/aif/mp3}
done
