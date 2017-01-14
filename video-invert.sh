#!/bin/bash
# usage: ./video-invert.sh /Absolute/movie/file.mov
filename=$1
extension="${filename##*.}"
ffmpeg -i $1 -vf lutrgb="r=negval:g=negval:b=negval" -pix_fmt yuv420p "$1.inverted.$extension"
