#!/bin/bash
# usage: ./videoCompress2mp4.sh /Absolute/movie/file.mov 1280 10000
# scale down: -vf "scale=960:-1"
# frame rate: -r 30
# start: -ss 2.3
# end:   -to 4.3
# ex:    -ss 0 -to 1.5
filename=$1
extension="${filename##*.}"
ffmpeg -y -i $1 -vcodec mpeg4 -b:v $3k -vf scale=$2:-1 -c:v libx264 -pix_fmt yuv420p -f mp4 -r 30 -ss 8.0 -to 8.3 "$1.mp4"
