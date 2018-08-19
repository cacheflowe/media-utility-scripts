#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Resize an image to a maximum dimension'
echo '# Usage: $ ./imageSequenceToMovie.sh /Absolute/image/files'
echo '# Param 1: Image files directory'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
  echoError '1st arg must be an image directory'
  exit 1
fi

################################################################################
################################################################################

# get filename
filesDir=$1
echoInfo "Images to video: $filesDir"
outputFile="$filesDir/_output.mp4"

# do conversion
ffmpeg -framerate 30 -pattern_type glob -i "$filesDir/*.png" -vcodec libx264 -crf 1 -pix_fmt yuv420p -f mp4 "$outputFile"
# ffmpeg -framerate 10 -pattern_type glob -i '*.jpg' -c:v libx264 -pix_fmt yuv420p "$outputFile"
# -f image2 
# On windows, glob might not work, so use this: `image2 -i %%04d.tga`

################################################################################
################################################################################
# complete

echoSuccess "Movie created from image sequence: \n# $outputFile"


# usage: $ ./imageSequenceToMovie /path/to/images
# for file in $1/*mp4
# ffmpeg -r 24 -f image2 -s 2688x896 -i SianJillian-1_0%04d.png -vcodec libx264 -crf 15  -pix_fmt yuv420p test.mp4
# ffmpeg -r 24 -f image2 -i $1/*.png -vcodec libx264 -crf 15 -pix_fmt yuv420p $1.mp4
#  -i color=c=black = background color?
# ffmpeg -r 24 -f image2 -pattern_type glob -i "$1/*.png" -vcodec libx264 -crf 12 -pix_fmt yuv420p $1.mp4
# ffmpeg -f image2 -pattern_type glob -i "$1/*.png" -vcodec libx264 -crf 12 -vf fps=30 -pix_fmt yuv420p $1.mp4
