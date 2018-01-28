#!/bin/bash
# usage: $ ./imageSequenceToBoomerang /path/to/images

dir=$1
cd $1
echo "# Running on $dir"

MAX=190

for ((i=1; i<=MAX; i++)); do
    cp $(printf "$1/ffout%05d.png" $((MAX-i+1))) $(printf "$1/ffout%05d.png" $((MAX+i)))
    # echo $((MAX-i+1)) - $((MAX+i))
done
