#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Reduce png color pallette on a directory'
echo '# Usage: $ ./pngCompressDir.sh /Absolute/image/dir/ 32'
echo '# Param 1: Directory'
echo '# Param 2: Number of colors'
echo '# Requires: pngquant, OptiPNG'
echo '###################################################'

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError "1st arg must be a directory"
    exit 1
fi

colors=256
if [[ $2 -eq 0 ]] ; then
    echoInfo '# [Optional]: Using default color count of 256'
else
    colors=$2
fi

################################################################################
################################################################################

# run image compression with ImageAlpha, then ImageOptim
pngquant $colors --ext .png -f $1/*.png
# run lossless compression
optipng $1/*.png

################################################################################
################################################################################
# complete

numFiles="$(find $1 -maxdepth 1 -type f -name '*.png' | wc -l)"
echoSuccess "${numFiles} png files have been crushed"
# say Ping files crushed
