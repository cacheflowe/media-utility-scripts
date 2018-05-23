#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Normalizes an audio file directory to wav'
echo '# Usage: $ ./wavNormalizeTo16-44.sh /path/to/audio/files/'
echo '# Param 1: Audio file directory'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError "1st arg must be a path of audio files"
    exit 1
fi

################################################################################
################################################################################
# do conversion

for file in "$1"/*.{wav,aif,mp3}
do
  if [ -f $file ]; then
    ./wavNormalizeTo16-44.sh "$file"
  fi
done

################################################################################
################################################################################
# complete

echoSuccess "Normalized audio files to 16/44.1 wav"
