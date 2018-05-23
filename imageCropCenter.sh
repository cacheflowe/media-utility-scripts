#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Compress an image to jpg, with a specified quality'
echo '# Usage: $ ./imageCenterCrop.sh /path/to/image.png '
echo '# Param 1: Image file'
echo '# Param 2: Crop width'
echo '# Param 2: Crop height'
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

if [[ $2 -eq 0 ]] ; then
    echoError "2nd arg must be crop width"
    exit 1
fi

if [[ $3 -eq 0 ]] ; then
    echoError "3rd arg must be crop height"
    exit 1
fi

################################################################################
################################################################################
# do conversion

filename=$1
extension=$(extension $filename)
echoInfo "Cropping image: $filename"
outputFile="$filename.crop$2x$3.$extension"
convert $filename -gravity Center -crop $2x$3+0+0 +repage "$outputFile"

################################################################################
################################################################################
# complete

echoSuccess "Cropped jpg at $2x$3 \n# $outputFile"
