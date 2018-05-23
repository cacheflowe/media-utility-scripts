#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Resize images to a maximum dimension'
echo '# Usage: $ ./imageResizeDirToMaxDimension.sh /path/to/images 640'
echo '# Param 1: Directory of images'
echo '# Param 2: Maximum width/height'
echo '# Requires: Imagemagick'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
  echoError '1st arg must be a directory'
  exit 1
fi

if [[ $2 -eq 0 ]] ; then
  echoError '2nd arg must be maximum size'
  exit 1
fi

################################################################################
################################################################################
# loop through files

for file in "$1"/*.{png,jpg,jpeg,gif}
do
  if [ -f $file ]; then
    ./imageResizeToMaxDimension.sh "$file" $2
  fi
done

################################################################################
################################################################################
# complete

echoSuccess "Success: Resized files in: $1"
say Images resized
