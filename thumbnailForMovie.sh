#!/bin/bash
# usage: $ ./thumbnailForMovie /path/to/video 1.0
# $1 is file
# $2 is time in seconds
file=$1
echo "#####################################"
echo "# Saving thumbnail for movie:"
echo "# $file"
echo "#####################################"
extension="${1##*.}"
ffmpeg -ss $2 -i $file -t 1 -qscale 0 -f image2 "$file.jpg"
