#!/bin/bash
# usage: ./video-to-bw.sh /Absolute/movie/file.mov
filename=$1
extension="${filename##*.}"
ffmpeg -i $1 -vf format=gray -pix_fmt yuv420p "$1.bw.$extension"
