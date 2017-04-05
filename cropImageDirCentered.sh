#!/bin/bash
# usage: ./resizeImageDir.sh /Absolute/image/dir/
for file in $1/*png
do
  echo "Cropping image to jpg: $file ..."
  convert $file -gravity Center -crop 2400x1600+0+0 +repage $file.jpg
done
