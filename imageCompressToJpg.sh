#!/bin/bash
echo '###################################################'
echo '# Description: Compress an image to jpg, with a specified quality'
echo '# Usage: $ ./imageCompressToJpg.sh /path/to/image.png' 85
echo '# Param 1: Image file'
echo '# Param 2: JPG quality (0-100)'
echo '# Requires: Imagemagick'
echo '###################################################'

################################################################################
################################################################################
# check parameters

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

if [[ $1 == "" ]] ; then
    echo "# ${red}[ERROR]${reset}: 1st arg must be an image"
    echo '###################################################'
    exit 1
fi

if [[ $2 -eq 0 ]] ; then
    echo "# ${red}[ERROR]${reset}: 2nd arg must be compression quality"
    echo '###################################################'
    exit 1
fi

################################################################################
################################################################################

filename=$1
extension="${filename##*.}"
convert "$1" -sampling-factor 4:2:0 -strip -quality $2 -interlace JPEG -colorspace RGB "$1.compressed.$2.jpg"

echo '###################################################'
echo "# Success: Compressed file at $2% quality: $1"
echo '###################################################'
# say Image compressed at $2 percent
