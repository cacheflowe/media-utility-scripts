#!/bin/bash
# usage: ./resizeImageDir.sh /Absolute/image/dir/ 640
for file in $1/*png
do
  # echo "Cropping image: $file ..."
  # Crop image to a specific size
  # convert $file -gravity Center -crop 638x670+0+0 "$file.crop.png"

  # Bottom-align content on transparent bg
  echo "Aligning image: $file ..."
  convert $file -background white -splice 0x1 -trim +repage  -gravity South -background transparent  -extent 638x670 $file
  convert $file -bordercolor transparent -border 100 -gravity South -background transparent -extent 638x670 $file
  # -background white -splice 0x1 -trim +repage  -gravity South -background transparent  -extent 638x670  -bordercolor transparent -border 100 -gravity South -background transparent -extent 638x670
done
