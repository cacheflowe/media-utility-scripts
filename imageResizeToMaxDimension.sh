#!/bin/bash
echo '###################################################'
echo '# Description: Resize an image to a maximum dimension'
echo '# Usage: $ ./imageResizeTo.sh /Absolute/image/file.jpg 640'
echo '# Param 1: Image file'
echo '# Param 2: Maximum width/height'
echo '# Requires: Imagemagick'
echo '###################################################'

################################################################################
################################################################################
# check parameters
if [[ $1 == "" ]] ; then
    echo '# [ERROR]: 1st arg must be an image file'
    echo '###################################################'
    exit 1
fi

if [[ $2 -eq 0 ]] ; then
    echo '# [ERROR]: 2nd arg must be maximum size'
    echo '###################################################'
    exit 1
fi

################################################################################
################################################################################

# resize with Imagemagick
filename=$1
extension="${filename##*.}"
convert $1 -resize $2 "$1.$2.$extension"

echo '###################################################'
echo "# Success: Image resized to max dimension of: $2"
echo '###################################################'
