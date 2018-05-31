#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Extract a time segment of a video to a new file'
echo '# Usage: $ ./videoTimeCrop.sh /Absolute/video/path.mov 10 15 ["-crf 24 -vf scale=800:-1 -an"]'
echo '# Param 1: Video file'
echo '# Param 2: Start time'
echo '# Param 3: End time'
echo '# Param 4 [Optional]: Custom args'
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
  echoError '2nd arg must be start time'
  exit 1
fi

if [[ $3 -eq 0 ]] ; then
  echoError '2nd arg must be end time'
  exit 1
fi

customArgs="-crf 1"
if [[ $4 -eq 0 ]] ; then
  echoInfo "[Optional]: Using default customArgs ${customArgs}"
else
  customArgs=$4
fi

################################################################################
################################################################################

# get filename
filename=$1
extension=$(extension $filename)
outputFile="$1.crop.$2-$3s.$extension"
echoInfo "Time cropping video from $2 to $3 at quality $4: $filename ###"

# do conversion
ffmpeg -y -i "$filename" -vcodec copy -ss $2 -to $3 "$outputFile"

################################################################################
################################################################################
# complete

echoSuccess "Video time cropped: \n# $outputFile"
