#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Resize an image to a exact dimensions'
echo '# Usage: $ ./imageResizeToExactSize.sh /Absolute/image/file.jpg 1024 512'
echo '# Param 1: Image file'
echo '# Param 2: Width'
echo '# Param 3: Height'
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
  echoError '2nd arg must be width'
  exit 1
fi

if [[ $3 -eq 0 ]] ; then
  echoError '3rd arg must be height'
  exit 1
fi

################################################################################
################################################################################

# get filename
filename=$1
extension=$(extension $filename)
echoInfo "Resizing image: $filename"
outputFile="$1.$2x$3.$extension"

# do conversion
convert $1 -resize $2x$3\! $outputFile

################################################################################
################################################################################
# complete

echoSuccess "Success: Image resized to exact dimension of: $2x$3 \n# $outputFile"
