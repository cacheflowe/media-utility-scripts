#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Extract a time segment of a video to a new file'
echo '# Usage: $ ./videoTimeCrop.sh /Absolute/video.mov 10 15'
echo '# Param 1: Video file'
echo '# Param 2: Start time'
echo '# Param 3: End time'
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

################################################################################
################################################################################
# do conversion

filename=$1
extension=$(extension $filename)
outputFile="$1.crop.$2-$3s.mp4"
echoInfo "Time cropping video from $2 to $3 at quality $4: $filename ###"
ffmpeg -y -i "$filename" -vcodec libx264 -crf 1 -pix_fmt yuv420p -f mp4 -ss $2 -to $3 "$outputFile"

################################################################################
################################################################################
# complete

echoSuccess "Video time cropped: \n# $outputFile"

# scale down: -vf "scale=960:-1"
# frame rate: -r 30
# h264: -c:v libx264
# -vcodec mpeg4
# ffmpeg -y -i $1 -vcodec mpeg4 -b:v $2k -pix_fmt yuv420p -f mp4 -r 30 "$1.rate-$2.mp4"
# start: -ss 2.3
# end:   -to 4.3
# ex:   -ss 0 -to 1.5
# ffmpeg -y -i "$1" -vcodec mpeg4 -c:v libx264 -vf "scale=2688:-1" -b:v 50000 -pix_fmt yuv420p -f mp4 -r 30 "$1.mp4"
# ffmpeg -y -i "$1" -vcodec mpeg4 -q:v $4 -vf "scale=1280:-1" -pix_fmt yuv420p -an -f mp4 -r 30 -ss $2 -to $3 "$1.crop.mp4"
# or without re-encoding:
# ffmpeg -y -i "$1" -vcodec copy -an -ss $2 -to $3 "$1.crop.mp4"
