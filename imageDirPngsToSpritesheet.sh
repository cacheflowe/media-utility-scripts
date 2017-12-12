#!/bin/bash
echo '###################################################'
echo '# Description: Creates a single-column spritesheet out of a directory of png files'
echo '# Usage: $ ./imageDirPngsToSpritesheet.sh /path/to/images'
echo '# Param 1: Image directory'
echo '# Param 2: Number of rows'
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

if [[ $2 == "" ]] ; then
    echo "# ${red}[ERROR]${reset}: 2nd arg must be number of spritesheet rows"
    echo '###################################################'
    exit 1
fi

################################################################################
################################################################################

filename=$1
extension="${filename##*.}"
montage $1/*.png -tile 1x$2 -geometry +0+2 -background none $1/_tiles.png

echo '###################################################'
echo "# Success: Spritesheet created: $1"
echo '###################################################'
say Spritesheet created
