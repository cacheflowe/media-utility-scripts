#!/bin/bash
# usage: $ ./compress-videos-in-dir /path/to/videos 4000
for file in $1/*mov
do
  echo "Compressing file: $file ..."
  extension="${file##*.}"
  # echo "$file.rate-$2.$extension"
  # ffmpeg -y -i $file -b:v $2k "$file.rate-$2.$extension"
  ffmpeg -y -i $file -vcodec mpeg4 -b:v $2k -pix_fmt yuv420p -f mp4 -r 30 "$file.mp4"
done
