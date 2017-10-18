#!/bin/bash
# usage: ./videoCompress2mp4.sh /Absolute/movie/file.mov 10000
# scale down: -vf "scale=960:-1"
# frame rate: -r 30
# h264: -c:v libx264
# -vcodec mpeg4
# ffmpeg -y -i $1 -vcodec mpeg4 -b:v $2k -pix_fmt yuv420p -f mp4 -r 30 "$1.rate-$2.mp4"
# start: -ss 2.3
# end:   -to 4.3
# ex:   -ss 0 -to 1.5
# ffmpeg -y -i "$1" -vcodec mpeg4 -c:v libx264 -vf "scale=2688:-1" -b:v 50000 -pix_fmt yuv420p -f mp4 -r 30 "$1.mp4"
filename=$1
extension="${filename##*.}"
echo "##########################################"
echo "### Time cropping video from $2 to $3 at quality $4: $filename ###"
echo "##########################################"
# ffmpeg -y -i "$1" -vcodec mpeg4 -q:v $4 -vf "scale=1280:-1" -pix_fmt yuv420p -an -f mp4 -r 30 -ss $2 -to $3 "$1.crop.mp4"
# or without re-encoding:
ffmpeg -y -i "$1" -vcodec copy -an -ss $2 -to $3 "$1.crop.mp4"
