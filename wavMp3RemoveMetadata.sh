#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Removes metadata from a wav file'
echo '# Usage: $ ./wavRemoveMetadata.sh /path/to/audio.wav'
echo '# Param 1: Audio file'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError "1st arg must be an audio file"
    exit 1
fi

################################################################################
################################################################################

# get filename
filename=$1
outputFile="$filename"

# do conversion
ffmpeg -y -i $filename -map_metadata -1 -vn -codec:a copy -write_xing 0 -id3v2_version 0 "$outputFile"

################################################################################
################################################################################
# complete

echoSuccess "Removed metadata from: $outputFile"
