#!/bin/bash
# usage: $ ./imageSequenceToBoomerang /path/to/images

dir=$1
cd $1
echo "# Running on $dir"

START=58
MAX=154
inc=1

for ((i=START; i<=MAX; i++)); do
  echo $((MAX-inc+1)) - $((MAX+inc))
  inc=$((inc+1))
  # echo $(printf "$1/%010d.png" $((MAX-inc+1))) $(printf "$1/%010d.png" $((MAX+inc)))
  cp $(printf "$1/%010d.png" $((MAX-inc+1))) $(printf "$1/%010d.png" $((MAX+inc)))
done
