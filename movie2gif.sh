#!/bin/sh
# http://blog.pkh.me/p/21-high-quality-gif-with-ffmpeg.html
# be sure to create ./tmp/ directory to make it work
echo '###################################################'
echo '# Description: Video to optimized gif'
echo '# Usage: $ ./movie2gif.sh input.mov 600'
echo '# Param 1: Video file'
echo '# Param 2: Output width'
echo '###################################################'

################################################################################
###############################################################################
# check parameters
if [[ $1 == "" ]] ; then
    echo '# [ERROR]: 1st arg must be a video file'
    echo '###################################################'
    exit 1
fi

if [[ $2 -eq 0 ]] ; then
    echo '# [ERROR]: 2nd arg must be output width'
    echo '###################################################'
    exit 1
fi

################################################################################
################################################################################
# Convert to gif
palette="./tmp/palette.png"
filters="fps=30,scale=$2:-1:flags=lanczos"
ffmpeg -v warning -i $1 -vf "$filters,palettegen" -y $palette
ffmpeg -v warning -i $1 -i $palette -lavfi "$filters [x]; [x][1:v] paletteuse" -y "$1.$2.gif"
