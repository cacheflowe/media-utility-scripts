#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Creates a single-column spritesheet out of a directory of png files'
echo '# Usage: $ ./imageDirPngsToSpritesheet.sh /path/to/images'
echo '# Param 1: Image directory'
echo '# Param 2: Number of rows'
echo '# Requires: Imagemagick'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError "1st arg must be an image directory"
    exit 1
fi

if [[ $2 == "" ]] ; then
    echoError "2nd arg must be number of spritesheet rows"
    exit 1
fi

################################################################################
################################################################################

# get filename
imgDir=$1
outputFile="$imgDir/_tiles.png"

# do conversion
montage $imgDir/*.png -tile 1x$2 -geometry +0+0 -background none $outputFile

echoSuccess "Spritesheet created: $outputFile"
# say Spritesheet created
