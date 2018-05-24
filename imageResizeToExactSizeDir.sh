#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Resize an image directory to a exact dimensions'
echo '# Usage: $ ./imageResizeToMaxDimension.sh /Absolute/image/files/ 640 480'
echo '# Param 1: Image directory'
echo '# Param 2: Width'
echo '# Param 3: Height'
echo '# Requires: Imagemagick'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
  echoError '1st arg must be an image file'
  exit 1
fi

if [[ $2 -eq 0 ]] ; then
  echoError '2nd arg must be maximum size'
  exit 1
fi

if [[ $3 -eq 0 ]] ; then
  echoError '3rd arg must be height'
  exit 1
fi

################################################################################
################################################################################

# loop through files
for file in "$1"/*.{png,jpg,jpeg,gif}
do
  if [ -f $file ]; then
    ./imageResizeToExactSize.sh "$file" $2 $3
  fi
done

################################################################################
################################################################################
# complete

echoSuccess "Success: Resized files in: $1"
say Images resized
