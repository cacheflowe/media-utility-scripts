#!/bin/sh
# http://blog.pkh.me/p/21-high-quality-gif-with-ffmpeg.html
# be sure to create ./tmp/ directory to make it work
source @includes.sh
echo '###################################################'
echo '# Description: Video to optimized gif'
echo '# Usage: $ ./videoToGif.sh input.mov 600 [60]'
echo '# Param 1: Video file'
echo '# Param 2: Output width'
echo '# Param 3 [Optional]: framerate'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
###############################################################################
# check parameters
if [[ $1 == "" ]] ; then
    echoError '1st arg must be a video file'
    exit 1
fi

if [[ $2 -eq 0 ]] ; then
    echoError '2nd arg must be output width'
    exit 1
fi

fps=30
if [[ $3 -eq 0 ]] ; then
  echoInfo "[Optional]: Using default framerate of $fps"
else
  fps=$3
fi


################################################################################
################################################################################
# do conversion

outputFile="$1.$2w.$fps-fps.gif"
echoInfo "Converting $outputFile"
palette="./tmp/palette.png"
filters="fps=$fps,scale=$2:-1:flags=lanczos"
echoInfo $filters
ffmpeg -v warning -i $1 -vf "$filters,palettegen" -y $palette
ffmpeg -v warning -i $1 -i $palette -lavfi "$filters [x]; [x][1:v] paletteuse" -y $outputFile

################################################################################
################################################################################
# complete

echoSuccess "Movie to GIF complete \n# $outputFile"
