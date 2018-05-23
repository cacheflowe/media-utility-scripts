#!/bin/bash

file=$1
fileTemp="$1.temp.png"
extension="${1##*.}"

echo "#####################################"
echo "# Saving Coolors image to 5x1 png:"
echo "# $file"
echo "#####################################"

# grab top pixel 
convert $file -crop 800x1-0 $fileTemp
# convert to 5x1, aliased
convert $fileTemp -filter point -resize 5x1 $file.min.$extension 
# delete 800x1 temp file
rm $fileTemp