#!/bin/bash
# download video chunks
wget -r https://videohost.com/path/video-{1..7}.ts
# cd to directory
cd path/
# create playlist txt file
echo '72451143001_5599331768001_s-'{1..6}.ts | tr " " "\n" > tslist
# concat video files
while read line; do cat $line >> video_compiled.ts; done < tslist
# remove playlist
rm tslist
# convert to mp4 without re-encoding
ffmpeg -y -i "$1" -vcodec copy "$1.mp4"
