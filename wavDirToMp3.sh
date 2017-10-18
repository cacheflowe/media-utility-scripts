#!/bin/bash
# docs: http://lame.cvs.sourceforge.net/viewvc/lame/lame/USAGE
echo '###################################################'
echo '# Description: Convert a directory of wav/aif files to mp3'
echo '# Usage: $ $ ./wavDirToMp3.sh /path/to/file.wav'
echo '# Param 1: Wav/Aif directory'
echo '# Param 2 [Optional]: Bitrate'
echo '# Param 3 [Optional]: Channels'
echo '# Requires: Lame'
echo '###################################################'

################################################################################
################################################################################
# check parameters
if [[ $1 == "" ]] ; then
    echo '# [ERROR]: 1st arg must be a wav or aif file'
    echo '###################################################'
    exit 1
fi

bitrate=320
if [[ $2 -eq 0 ]] ; then
    bitrate=320
else
    bitrate=$2
fi

mono=""
if [[ $3 -eq 1 ]] ; then
    mono=1
fi

################################################################################
################################################################################

for file in $1/*wav
do
  ./wavToMp3.sh "$file" $bitrate $mono
done
for file in $1/*aif
do
  ./wavToMp3.sh "$file" $bitrate $mono
done

echo '###################################################'
echo "# Success: Converted directory 16/44.1 mp3"
echo '###################################################'
