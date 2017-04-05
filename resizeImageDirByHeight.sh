#!/bin/bash
# usage: ./resizeImageDirByHeight.sh /Absolute/image/dir/ 540
for file in $1/*jpg
do
  echo "Resizing image: $file ..."
  convert $file -geometry x$2 $file
done
for file in $1/*png
do
  echo "Resizing image: $file ..."
  convert $file -geometry x$2 $file
done
