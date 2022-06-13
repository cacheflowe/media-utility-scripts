#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Resize an image to a maximum dimension'
echo '# Usage: $ ./imageSequenceToMovie.sh /Absolute/image/files'
echo '# Param 1: Image files directory'
echo '# Param 2: -crf compression quality [1-24]'
echo '# Param 3: filetype [png, jpg]'
echo '# Param 4 [Optional]: framerate [1-60]'
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

if [[ $2 == "" ]] ; then
  echoError "2nd arg must be crf: 1-24 if best to worst compression"
  exit 1
fi

if [[ $3 == "" ]] ; then
  echoError "3nd arg must be image filetype: jpg, png, tga, etc"
  exit 1
fi

fps="60"
if [[ $4 == "" ]] ; then
    echoInfo "[Optional]: Using default fps ${fps}"
else
    fps=$4
    echoInfo "[Optional]: Using user-defined fps ${fps}"
fi


################################################################################
################################################################################

# get filename
filesDir=$1
echoInfo "Images to video: $filesDir"
dirLastEl="$(basename $filesDir)"
curDirName=${PWD##*/}
outputFile="$filesDir/_$curDirName.mp4"
outputFile="$filesDir/../../Content_Equirect/$curDirName.mp4"
quality="-crf $2"
quality="-b:v 30M"

# do conversion
addAllKeyframes="-x264-params keyint=1:scenecut=0"
formatMp4="-vcodec libx264 -pix_fmt yuvj420p -f mp4"
temporalSmoothing="-vf minterpolate='fps=60:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1'"
temporalSmoothing="-vf minterpolate='mi_mode=2'"
# -vf scale=3840:-1
ffmpeg -r $fps -f image2 -pattern_type glob -i "$filesDir/*.$3" $formatMp4 $addAllKeyframes $quality -an "$outputFile"
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
