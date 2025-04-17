#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Video to audio format 16/44.1 wav'
echo '# Usage: $ ./videoToWav.sh /path/to/video.mp4'
echo '# Param 1: Video file'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError "1st arg must be an audio file"
    exit 1
fi

################################################################################
################################################################################

# get filename
filename=$1
extension=$(extension $filename)
outputFile="$filename.wav"

# do conversion
ffmpeg -i $filename -af aformat=s16:44100 "$outputFile"

################################################################################
################################################################################
# complete

echoSuccess "Converted file to 16/44.1 wav: $outputFile"
