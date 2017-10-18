#!/bin/bash
# usage: $ ./convert-mp3 /path/to/files
# docs: http://lame.cvs.sourceforge.net/viewvc/lame/lame/USAGE
for file in $1/*wav
do
  echo "Converting wav to 16/44.1 wav: $file ..."
  ffmpeg -i $file -af aformat=s16:44100 $file
done
for file in $1/*aif
do
  echo "Converting aif to 16/44.1 wav: $file ..."
  ffmpeg -i $file -af aformat=s16:44100 $file
done
