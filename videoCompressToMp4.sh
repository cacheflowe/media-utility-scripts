#!/bin/bash
echo '###################################################'
echo '# Description: Extract a poster frame from a video'
echo '# Usage: $ ./videoCompressToMp4.sh /path/to/video.mov'
echo '# Param 1: Video file'
echo '# Requires: ffmpeg'
echo '###################################################'

# scale down: -vf "scale=960:-1"
# frame rate: -r 30
# frame rate: -r 60
# Codec:
# h264: -c:v libx264
# mpeg4: -c:v mpeg4
# -vcodec mpeg4
# ffmpeg -y -i $1 -vcodec mpeg4 -b:v $2k -pix_fmt yuv420p -f mp4 -r 30 "$1.rate-$2.mp4"
# start: -ss 2.3
# end:   -to 4.3
# ex:   -ss 0 -to 1.5
# ffmpeg -y -i "$1" -vcodec mpeg4 -c:v libx264 -vf "scale=2688:-1" -b:v 50000 -pix_fmt yuv420p -f mp4 -r 30 "$1.mp4"
# remove audio: -an
# resize: -vf "scale=1280:-1"
# quality (full): -q:v 1
# quality (good): -q:v 5
# quality (compressed): -q:v 12
# effects: -vf eq=brightness=0.08:saturation=1.2:contrast=1.15
# why?: -pix_fmt yuv420p

################################################################################
################################################################################
# check parameters & set defaults
if [[ $1 == "" ]] ; then
    echo '# [ERROR]: 1st arg must be a video file'
    echo '###################################################'
    exit 1
fi

# extractTime=0
# if [[ $2 -eq 0 ]] ; then
#     echo "# [Optional]: Using default frametime of ${extractTime} seconds"
#     echo '###################################################'
# else
#     extractTime=$2
# fi

################################################################################
################################################################################

echo "#####################################"
echo "# Compressing video:"
echo "# $filename"
echo "#####################################"
filename=$1
extension="${filename##*.}"
ffmpeg -y -i "$filename" -vcodec libx264 -q:v 0 -pix_fmt yuv420p -f mp4 "$filename.mp4"
# -an
echo '###################################################'
echo "# Success: Video Compressed:"
echo "# $filename.mp4"
echo '###################################################'
