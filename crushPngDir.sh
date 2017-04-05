#!/bin/bash
# usage: ./crushPngDir.sh /Absolute/image/dir/ 32
if [[ $2 -eq 0 ]] ; then
    echo 'Please pass in color count, like 16 or 64'
    exit 1
fi
/Applications/ImageAlpha.app/Contents/MacOS/pngquant $2 --ext .png -f $1/*.png
