#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Compress an image to jpg, with a specified quality'
echo '# Usage: $ ./imageCompressToJpg.sh /path/to/image.png 85'
echo '# Param 1: Image file'
echo '# Param 2: JPG quality (0-100)'
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
    echoError "2nd arg must be compression quality"
    exit 1
fi

################################################################################
################################################################################

# get filename
filename=$1
extension="${filename##*.}"
outputFile="$1.compressed.$2.jpg"

# do conversion
convert "$1" -sampling-factor 4:2:0 -strip -quality $2 -interlace JPEG -colorspace RGB "$outputFile"

################################################################################
################################################################################
# complete

echoSuccess "Compressed jpg at $2% quality: $outputFile"
# say Image compressed at $2 percent
