#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Forces format 16/44.1 wav'
echo '# Usage: $ ./wavFormatTo16-44.sh /path/to/audio.aif'
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
extension=$(extension $filename)
outputFile="$filename.16-44.wav"

# do conversion
ffmpeg -i $filename -af aformat=s16:44100 "$outputFile"
rm $filename
mv "$outputFile" $filename

################################################################################
################################################################################
# complete

echoSuccess "Normalized audio to 16/44.1 wav: $outputFile"
