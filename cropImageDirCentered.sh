#!/bin/bash
# usage: ./resizeImageDir.sh /Absolute/image/dir/ 200 500
for file in $1/*png
do
  echo "Cropping image: $file ..."
  convert $file -gravity Center -crop $2x$3+0+0 +repage $file
done
