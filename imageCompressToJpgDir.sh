#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Compress a directory of image to jpg with a specified quality'
echo '# Usage: $ ./imageCompressToJpgDir.sh /path/to/images 85'
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

# loop through files
for file in "$1"/*.{png,jpg,jpeg,gif}
do
  if [ -f $file ]; then
    ./imageCompressToJpg.sh "$file" $2
  fi
done

################################################################################
################################################################################
# complete

echoSuccess "Compressed files in $1"
say Images compressed at $2 percent
