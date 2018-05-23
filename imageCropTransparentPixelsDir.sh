#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Crops directory of images to remove transparent pixels'
echo '# Usage: $ $ ./imageCropTransparentPixelsDir.sh /path/to/files'
echo '# Param 1: Directory of images'
echo '# Requires: Imagemagick'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters
if [[ $1 == "" ]] ; then
    echoError '1st arg must be a directory'
    exit 1
fi

################################################################################
################################################################################
# do conversion

for file in "$1"/*png
do
  if [ -f $file ]; then
    ./imageCropTransparentPixels.sh "$file"
  fi
done

################################################################################
################################################################################
# complete

echoSuccess "Cropped files in $1"
