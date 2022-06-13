#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Change the speed of a video file'
echo '# Usage: $ ./videoChangeRate.sh /Absolute/video.mov 1.5 16'
echo '# Param 1: Video file'
echo '# Param 2: New rate time multiplier (0.5 is 2x as fast)'
echo '# Param 3: crf compression'
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

if [[ $3 -eq 0 ]] ; then
  echoError '3nd arg must be crf compression'
  exit 1
fi

################################################################################
################################################################################

# get filename
filename=$1
extension=$(extension $filename)
outputFile="$filename.rate-$2.$extension"
echoInfo "Changing video rate: $filename"

# do conversion
# ffmpeg -i $filename -filter:v "setpts=$2*PTS" -filter:a "atempo=1.0/$2" -vcodec libx264 -crf $3 -pix_fmt yuv420p -f mp4 $outputFile
ffmpeg -i $filename -filter:v "setpts=$2*PTS","crop=$6:$7:$4:$5" -filter:a "atempo=1.0/$2" -vcodec libx264 -crf $3 -pix_fmt yuv420p -f mp4 $outputFile

################################################################################
################################################################################
# complete

echoSuccess "Video rate changed: \n# $outputFile"
