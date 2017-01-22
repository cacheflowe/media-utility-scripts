#!/bin/sh
# usage: $ ./videoTowav.sh input.mov
ffmpeg -i $1 "$1.wav"
./wav-to-mp3.sh "$1.wav"
