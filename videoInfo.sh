#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Get info about a video'
echo '# Usage: $ ./videoInfo.sh /video/path.mp4'
echo '# Param 1: Video file'
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

################################################################################
################################################################################

# get filename
ffprobe $1
