#!/bin/bash
echo '###################################################'
echo '# Description: Resize images in a directory'
echo '# Usage: $ ./imageResizeDirToMaxDimension.sh /path/to/images'
echo '# Param 1: Directory of images'
echo '# Param 2: Maximum width/height'
echo '# Requires: Imagemagick'
echo '###################################################'

################################################################################
################################################################################
# check parameters

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

if [[ $1 == "" ]] ; then
    echo "# ${red}[ERROR]${reset}: 1st arg must be a directory"
    echo '###################################################'
    exit 1
fi

if [[ $2 -eq 0 ]] ; then
    echo "# ${red}[ERROR]${reset}: 2nd arg must be maximum size"
    echo '###################################################'
    exit 1
fi

################################################################################
################################################################################

for file in "$1"/*.{png,jpg,jpeg,gif}
do
  ./imageResizeToMaxDimension.sh "$file" $2
done

echo '###################################################'
echo "# Success: Resized files in $1"
echo '###################################################'
say Images resized
