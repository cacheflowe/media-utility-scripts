#!/bin/bash
echo '###################################################'
echo '# Description: Get RGB color components for image average color'
echo '# Usage: $ ./imageAverageColor.sh /Absolute/image/file.jpg'
echo '# Param 1: Image file'
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

################################################################################
################################################################################
# convert $1 -resize 1x1\! \
#     -format "# Average color (RGB): %[fx:int(255*r+.5)],%[fx:int(255*g+.5)],%[fx:int(255*b+.5)]\n" info:-

convert $1  -resize 1x1 txt:-

echo '###################################################'
