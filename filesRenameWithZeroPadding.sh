#!/bin/bash
# usage: ./fixZeroPadding.sh /Absolute/dir/
for file in $1/*png
do
  # find files with "_XX.png"
  if [[ $file =~ ^(.*)(_[0-9]{2}\.png)$ ]];
  then
    # look for 2 digits and prepend '0'
    newFilename=$(echo $file | sed 's/_\([0-9][0-9]\)\.png/_0\1.png/g');
    mv $file $newFilename
  # else
  #   echo "Not match";
  fi

done
