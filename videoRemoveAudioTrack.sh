#!/bin/bash
echo '###################################################'
echo '# Description: Removes audio track from video'
echo '# Usage: $ ./videoRemoveAudioTrack.sh /path/to/video.mov'
echo '# Param 1: Video file'
echo '# Requires: ffmpeg'
echo '###################################################'

################################################################################
################################################################################
# check parameters

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

if [[ $1 == "" ]] ; then
    echo "# ${red}[ERROR]${reset}: 1st arg must be a video"
    echo '###################################################'
    exit 1
fi

################################################################################
################################################################################

filename=$1
extension="${filename##*.}"
ffmpeg -i $filename -vcodec copy -an "$filename.noaudio.$extension"

echo '###################################################'
echo "# Success: Removed audio from: $1"
echo '###################################################'
