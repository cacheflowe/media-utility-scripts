#!/bin/bash
# usage: ./videoToImageSequence.sh /Absolute/movie/file.mov [jpg]
# jpeg quality info: http://stackoverflow.com/questions/10225403/how-can-i-extract-a-good-quality-jpeg-image-from-an-h264-video-file-with-ffmpeg
filename=$1
extension="${filename##*.}"
newDir="$1_frames"
echo $newDir
mkdir $newDir
if [ $2 = "jpg" ]; then
  ffmpeg -i $1 -qscale:v 1 $newDir/ffout%05d.jpg
else
  ffmpeg -i $1 $newDir/ffout%05d.png
fi
