#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Loop a video [x] times'
echo '# Usage: $ ./videoLoopConcat.sh /video/path.mp4 2'
echo '# Param 1: Video file'
echo '# Param 2: Number of loops'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
  echoError '1st arg must be a video file'
  exit 1
fi

loops="2"
if [[ $2 -eq 0 ]] ; then
    echoInfo "2nd arg must be number of loops. Defaulting to $loops"
else
    loops=$2
fi


################################################################################
################################################################################

# get filename
filename=$1
extension=$(extension $filename)
outputFile="$1.$loops-loops.$extension"
echoInfo "Looping video $filename [$loops] times"

# concat by building textfile
concatFile="_list.txt"
rm "$concatFile";
for i in {1..2}; do printf "file '%s'\n" "$filename" >> "$concatFile"; done
ffmpeg -f concat -i "$concatFile" -c copy "$outputFile"
rm "$concatFile";

################################################################################
################################################################################
# complete

echoSuccess "Video looped: \n# $outputFile"
