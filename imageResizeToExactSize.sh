#!/bin/bash
echo '###################################################'
echo '# Description: Resize an image to a exact dimensions'
echo '# Usage: $ ./imageResizeToExactSize.sh /Absolute/image/file.jpg 1024 512'
echo '# Param 1: Image file'
echo '# Param 2: Width'
echo '# Param 3: Height'
echo '# Requires: Imagemagick'
echo '###################################################'

################################################################################
################################################################################
# check parameters

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

if [[ $1 == "" ]] ; then
    echo "# ${red}[ERROR]${reset}: 1st arg must be an image file"
    echo '###################################################'
    exit 1
fi

if [[ $2 -eq 0 ]] ; then
    echo "# ${red}[ERROR]${reset}: 2nd arg must be width"
    echo '###################################################'
    exit 1
fi

if [[ $3 -eq 0 ]] ; then
    echo "# ${red}[ERROR]${reset}: 3rd arg must be height"
    echo '###################################################'
    exit 1
fi

################################################################################
################################################################################

# resize with Imagemagick
filename=$1
extension="${filename##*.}"
convert $1 -resize $2x$3\! "$1.$2x$3.$extension"

echo '###################################################'
echo "# Success: Image resized to exact dimension of: ${green}$2x$3${reset}"
echo '###################################################'
