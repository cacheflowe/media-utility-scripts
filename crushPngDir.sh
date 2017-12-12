#!/bin/bash
echo '###################################################'
echo '# Description: Reduce png color pallette on a directory'
echo '# Usage: $ ./crushPngDir.sh /Absolute/image/dir/ 32'
echo '# Param 1: Directory'
echo '# Param 2: Number of colors'
echo '# Requires: ImageAlpha, ImageOptim'
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
    echo "# ${red}[ERROR]${reset}: 2nd arg must be color count, 32"
    echo '###################################################'
    exit 1
fi

################################################################################
################################################################################
# run image compression with ImageAlpha, then ImageOptim
/Applications/ImageAlpha.app/Contents/MacOS/pngquant $2 --ext .png -f $1/*.png
/Applications/ImageOptim.app/Contents/MacOS/ImageOptim $1/*.png

################################################################################
################################################################################
# count successful optimizations
numFiles="$(find $1 -maxdepth 1 -type f -name '*.png' | wc -l)"

echo '###################################################'
echo "# Results: ${numFiles} png files have been crushed"
echo '###################################################'
say Ping files crushed
