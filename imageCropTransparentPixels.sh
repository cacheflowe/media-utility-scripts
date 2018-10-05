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

# get filename
filename=$1
extension=$(extension $filename)
outputFile="$1.crop.$extension"
echoInfo "Cropping image: $filename"

# do conversion
convert "$filename" -trim "$outputFile"

################################################################################
################################################################################
# complete

echoSuccess "Cropped file: $outputFile"
# say Image cropped
