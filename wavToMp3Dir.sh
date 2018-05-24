#!/bin/bash
# docs: http://lame.cvs.sourceforge.net/viewvc/lame/lame/USAGE
source @includes.sh
echo '###################################################'
echo '# Description: Convert a directory of wav/aif files to mp3'
echo '# Usage: $ $ ./wavDirToMp3.sh /path/to/file.wav [256] [1]'
echo '# Param 1: Wav/Aif directory'
echo '# Param 2 [Optional]: Bitrate'
echo '# Param 3 [Optional]: Channels'
echo '# Requires: Lame'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters
if [[ $1 == "" ]] ; then
    echoError '1st arg must be a wav or aif directory'
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

# loop through files
for file in "$1"/*.{wav,aif,mp3}
do
  if [ -f $file ]; then
    ./wavToMp3.sh "$file" $bitrate $mono
  fi
done

################################################################################
################################################################################
# complete

echoSuccess "Converted directory 16/44.1 mp3"
