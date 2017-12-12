#!/bin/bash
echo '###################################################'
echo '# Description: Crops an image to remove transparent pixels'
echo '# Usage: $ ./imageCropTransparentPixels.sh /path/to/image.png'
echo '# Param 1: Image file'
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

################################################################################
################################################################################

filename=$1
extension="${filename##*.}"
convert "$1" -trim "$1.crop.$extension"

echo '###################################################'
echo "# Success: Cropped file: $1"
echo '###################################################'
say Image cropped
