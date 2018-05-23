#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Change the speed of a video file'
echo '# Usage: $ ./videoChangeRate.sh /Absolute/video.mov 1.5'
echo '# Param 1: Video file'
echo '# Param 2: New rate time multiplier (0.5 is 2x as fast)'
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
  echoError '2nd arg must be new rate'
  exit 1
fi

################################################################################
################################################################################
# do conversion

filename=$1
extension=$(extension $filename)
outputFile="$filename.rate-$2.$extension"
echoInfo "Altering video: $filename"
ffmpeg -i $filename -filter:v "setpts=$2*PTS" -filter:a "atempo=1.0/$2" -vcodec libx264 -crf 1 -pix_fmt yuv420p -f mp4 $outputFile
# ffmpeg -r 60 -i 001.mov -filter:v "setpts=0.25*PTS,transpose=0" -filter:a "atempo=2.0,atempo=2.0" -r 30 001.portrait.mp4

################################################################################
################################################################################
# complete

echoSuccess "Video rate changed: \n# $outputFile"
