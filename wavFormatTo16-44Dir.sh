#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Forces format 16/44.1 wav'
echo '# Usage: $ ./wavFormatTo16-44Dir.sh /path/to/audio/files/'
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

# loop through files
for file in "$1"/*.{wav,aif,mp3}
do
  if [ -f $file ]; then
    wavFormatTo16-44.sh "$file"
  fi
done

################################################################################
################################################################################
# complete

echoSuccess "Normalized audio files to 16/44.1 wav"
