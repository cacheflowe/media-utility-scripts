#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Resize an image to a maximum dimension'
echo '# Usage: $ ./imageResizeToMaxDimension.sh /Absolute/image/file.jpg 640'
echo '# Param 1: Image file'
echo '# Param 2: Maximum width/height'
echo '# Requires: Imagemagick'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
  echoError '1st arg must be an image file'
  exit 1
fi

if [[ $2 -eq 0 ]] ; then
  echoError '2nd arg must be maximum size'
  exit 1
fi

################################################################################
################################################################################

# get filename
filename=$1
extension=$(extension $filename)
echoInfo "Resizing image: $filename"
outputFile="$1.$2.$extension"

# do conversion
convert $1 -resize $2x$2 $outputFile

################################################################################
################################################################################
# complete

echoSuccess "Success: Image resized to max dimension of: $2 \n# $outputFile"
