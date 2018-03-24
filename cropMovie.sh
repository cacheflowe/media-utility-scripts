#!/bin/bash
# usage: ./cropMovie.sh /Absolute/movie/file.mov x y width height
filename=$1
extension="${filename##*.}"
# ffmpeg -i $filename -filter:v "crop=$4:$5:$2:$3" -b:v $6k -c:a copy "$filename.crop.$extension"
# -an
#  -ss 8 -to 50
# h264: -c:v libx264
# mpeg4: -c:v mpeg4

ffmpeg -i $filename -filter:v "crop=$4:$5:$2:$3" -pix_fmt yuv420p -vcodec libx264 -crf 1 -f mp4 "$filename.crop.mp4"
