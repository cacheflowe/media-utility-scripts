#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Normalizes a wav file'
echo '# Usage: $ ./wavNormalize.sh /path/to/audio.wav [-3]'
echo '# Param 1: Audio file'
echo '# Param 2 [Optional: db to normalize to (0 is max volume)'
echo '# Requires: SoX'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError "1st arg must be an audio file"
    exit 1
fi

gain=0
if [[ $2 -eq 0 ]] ; then
  echoInfo "[Optional]: Using default gain of $gain"
else
  gain=$2
fi

################################################################################
################################################################################

# get filename
filename=$1
extension=$(extension $filename)
outputFile="$filename.normalized.$extension"
echoInfo "Normalizing audio: $filename"

# do conversion
sox $filename "$outputFile" norm $gain 

################################################################################
################################################################################
# complete

echoSuccess "Normalized: $outputFile"
