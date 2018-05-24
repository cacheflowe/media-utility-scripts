#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Removes audio track from video'
echo '# Usage: $ ./videoRemoveAudioTrack.sh /path/to/video.mov'
echo '# Param 1: Video file'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError "1st arg must be a video"
    exit 1
fi

################################################################################
################################################################################

# get filename
filename=$1
extension=$(extension $filename)
outputFile="$filename.noaudio.$extension"

# do conversion
ffmpeg -i $filename -vcodec copy -an $outputFile

################################################################################
################################################################################
# complete

echoSuccess "Removed audio from video: $outputFile"
