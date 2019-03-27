#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Add audio file to mp4'
echo '# Usage: $ ./videoAddAudioToMp4.sh /video/path.mp4 /audio/path.mp4'
echo '# Param 1: Video file'
echo '# Param 2: Audio file'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
  echoError '1st arg must be a video file'
  exit 1
fi

if [[ $2 -eq 0 ]] ; then
  echoError '2nd arg must be audio file'
  exit 1
fi

################################################################################
################################################################################

# get filename
filename=$1
audioFile=$2
extension=$(extension $filename)
outputFile="$1.with-audio.$extension"
echoInfo "Adding audio $2 to $1"

# add audio. via: https://superuser.com/a/590210
ffmpeg -y -i "$filename" -i "$audioFile" -c:v copy -c:a aac -b:a 320k -strict -2 -map 0:v:0 -map 1:a:0 "$outputFile"

################################################################################
################################################################################
# complete

echoSuccess "Video with audio: \n# $outputFile"
