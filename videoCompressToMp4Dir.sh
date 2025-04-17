#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Compress a video directory to mp4'
echo '# Usage: $ ./videoCompressToMp4Dir.sh /path/to/videos "-crf 24 -vf scale=1280:-1 -an"'
echo '# Param 1: Video directory'
echo '# Param 2 [Optional]: Custom args'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
  echoError '1st arg must be a directory'
  exit 1
fi

if [[ $2 -eq 0 ]] ; then
  echoError '2nd arg should be custom compression arguments'
  exit 1
fi

################################################################################
################################################################################

# loop through files
for file in "$1"/*.{mov,mp4,avi,wmv}
do
  if [ -f "$file" ]; then
    echo "Compressing: $file"
    echo "With args: $2"
    videoCompressToMp4.sh "$file" "$2"
  fi
done

################################################################################
################################################################################
# complete

echoSuccess "Success: Compressed videos in: $1"
