#!/bin/bash

echo '###################################################'
echo '# Description: Crops directory of images to remove transparent pixels'
echo '# Usage: $ $ ./imageCropTransparentPixelsDir.sh /path/to/files'
echo '# Param 1: Directory of images'
echo '# Requires: Imagemagick'
echo '###################################################'

################################################################################
################################################################################
# check parameters
if [[ $1 == "" ]] ; then
    echo '# [ERROR]: 1st arg must be a directory'
    echo '###################################################'
    exit 1
fi

################################################################################
################################################################################

for file in "$1"/*
do
  ./imageCropTransparentPixels.sh "$file"
done

echo '###################################################'
echo "# Success: Renamed files in $1"
echo '###################################################'
