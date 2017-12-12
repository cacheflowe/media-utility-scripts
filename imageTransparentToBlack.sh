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
    echo '# [ERROR]: 1st arg must be a directory'
    echo '###################################################'
    exit 1
fi

################################################################################
################################################################################
files="$1/*png"
dir=$1
echo "# Running on $dir"
mogrify -background black -flatten "$files"


################################################################################
################################################################################
# count successful optimizations
# cmd="find "\""$dir"\"" -maxdepth 1 -type f -name *png"
# echo $cmd
# numFiles="$($cmd | wc -l)"

# echo '###################################################'
echo "# Result: png files have been given a black background"
echo '###################################################'
