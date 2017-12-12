#!/bin/bash
# usage: $ ./imageSequenceToMovie /path/to/images
# for file in $1/*mp4
# ffmpeg -r 24 -f image2 -s 2688x896 -i SianJillian-1_0%04d.png -vcodec libx264 -crf 15  -pix_fmt yuv420p test.mp4
# ffmpeg -r 24 -f image2 -i $1/*.png -vcodec libx264 -crf 15 -pix_fmt yuv420p $1.mp4
#  -i color=c=black = background color?
# ffmpeg -r 24 -f image2 -pattern_type glob -i "$1/*.png" -vcodec libx264 -crf 12 -pix_fmt yuv420p $1.mp4
# ffmpeg -f image2 -pattern_type glob -i "$1/*.png" -vcodec libx264 -crf 12 -vf fps=30 -pix_fmt yuv420p $1.mp4
ffmpeg -r 60 -f image2 -pattern_type glob -i "$1/*.png" -vcodec libx264 -crf 12 -pix_fmt yuv420p "$1/_output.mp4"
