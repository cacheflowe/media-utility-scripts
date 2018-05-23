#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Crops an image to remove transparent pixels'
echo '# Usage: $ ./imageCropTransparentPixels.sh /path/to/image.png'
echo '# Param 1: Image file'
echo '# Requires: Imagemagick'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError "1st arg must be an image"
    exit 1
fi

################################################################################
################################################################################
# do conversion

filename=$1
extension=$(extension $filename)
echoInfo "Cropping image: $filename"
convert "$1" -trim "$1.crop.$extension"

################################################################################
################################################################################
# complete

echoSuccess "Cropped file: $1"
say Image cropped
