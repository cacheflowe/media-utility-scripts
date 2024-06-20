#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Extract a poster frame from a video'
echo '# Usage: $ ./videoToImagePoster.sh /path/to/video.mov 2.0'
echo '# Param 1: Video file'
echo '# Param 2 [Optional]: Time in seconds'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters & set defaults
if [[ $1 == "" ]] ; then
    echoError '1st arg must be a video file'
    exit 1
fi

extractTime=0
if [[ $2 -eq 0 ]] ; then
    echoInfo "[Optional]: Using default frametime of ${extractTime} seconds"
else
    extractTime=$2
fi

################################################################################
################################################################################

# get filename
filename=$1
extension=$(extension $filename)
outputFile="$filename.$extractTime.jpg"
# outputFile="$filename-thumb.jpg"
thumbnailResize="-vf scale=-1:256"
thumbnailResize=""
echoInfo "Saving thumbnail for movie: $filename"

# do conversion
ffmpeg -ss $extractTime -i $filename -t 1 -q:v 0 -f image2 $thumbnailResize "$outputFile"

################################################################################
################################################################################
# complete

echoSuccess "Extracted poster frame at $extractTime seconds: \n# $outputFile"
