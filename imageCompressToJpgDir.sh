#!/bin/bash
echo '###################################################'
echo '# Description: Compress a directory of image to jpg, with a specified quality'
echo '# Usage: $ ./imageCompressToJpgDir.sh /path/to/images' 85
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

for file in "$1"/*
do
  ./imageCompressToJpg.sh "$file" $2
done

echo '###################################################'
echo "# Success: Compressed files in $1"
echo '###################################################'
say Images compressed at $2 percent
