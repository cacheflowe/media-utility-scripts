#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Search a directory for files above a size'
echo '# Usage: $ ./findFilesAboveSize.sh /path/to/files/ [10]'
echo '# Param 1: Search path'
echo '# Param 2 [Optional]: Size (megabytes)'
echo '# Requires: Imagemagick'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError "1st arg must be a directory"
    exit 1
fi

size=1
if [[ $2 -eq 0 ]] ; then
  echoInfo "[Optional]: Using default size of $size"
else
  size=$2
fi

################################################################################
################################################################################

# do search
find "$1" -type f -size +"$size"M -exec du -h {} \; | sort -n
# find "$1" -size +"$size"M

################################################################################
################################################################################
# complete

echoSuccess "Searched for files above: $size MB"
