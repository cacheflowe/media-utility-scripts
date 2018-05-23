#!/bin/sh
# usage: $ ./videoTowav.sh input.mov
ffmpeg -i $1 "$1.wav"
./wavToMp3.sh "$1.wav"
