#!/bin/bash
echo '###################################################'
echo '# Description: Turn alpha transparent pixels into black'
echo '# Usage: $ ./imageTransparentToBlack.sh /Absolute/image/dir/'
echo '# Param 1: Directory'
echo '###################################################'

################################################################################
################################################################################
# check parameters
if [[ $1 == "" ]] ; then
    echoError '1st arg must be a directory'
    exit 1
fi

################################################################################
################################################################################

# get filename
files="$1/*png"
dir=$1
echoInfo "Running on $dir"

# do conversion
mogrify -background black -flatten "$files"

################################################################################
################################################################################
# count successful optimizations
# cmd="find "\""$dir"\"" -maxdepth 1 -type f -name *png"
# echo $cmd
# numFiles="$($cmd | wc -l)"

################################################################################
################################################################################
# complete

echoSuccess "png files have been given a black background"
