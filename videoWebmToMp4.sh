#!/bin/sh
# usage: $ ./webm2mp4.sh input.webm
# ffmpeg -fflags +genpts -i $1 -r 30 -b:v 10000k "$1.mp4"
ffmpeg -fflags +genpts -i $1 -r 30 -crf 1 "$1.mp4"
