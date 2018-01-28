#!/bin/bash
echo '###################################################'
echo '# Description: Extract a poster frame from a video'
echo '# Usage: $ ./videoToImagePoster.sh /path/to/video.mov 2.0'
echo '# Param 1: Video file'
echo '# Param 2 [Optional]: Time in seconds'
echo '# Requires: ffmpeg'
echo '###################################################'

################################################################################
################################################################################
# check parameters & set defaults
if [[ $1 == "" ]] ; then
    echo '# [ERROR]: 1st arg must be a video file'
    echo '###################################################'
    exit 1
fi

extractTime=0
if [[ $2 -eq 0 ]] ; then
    echo "# [Optional]: Using default frametime of ${extractTime} seconds"
    echo '###################################################'
else
    extractTime=$2
fi

################################################################################
################################################################################

# $1 is file
# $2 is time in seconds
file=$1
echo "#####################################"
echo "# Saving thumbnail for movie:"
echo "# $file.jpg"
echo "#####################################"
extension="${1##*.}"
ffmpeg -ss $extractTime -i $file -t 1 -qscale 0 -f image2 "$file.jpg"

echo '###################################################'
echo "# Success: Extract frame at $extractTime seconds:"
echo "# $file.jpg"
echo '###################################################'
