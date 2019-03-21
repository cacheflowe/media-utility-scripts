#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Generate a waveform image from an audio file'
echo '# Usage: $ ./wavToPng.sh /audio/path.wav 800 200'
echo '# Param 1: Audio file'
echo '# Param 2: Png width'
echo '# Param 3: Png height'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
  echoError '1st arg must be an audio file'
  exit 1
fi

if [[ $2 -eq 0 ]] ; then
  echoError '2nd arg must be output image width'
  exit 1
fi

if [[ $3 -eq 0 ]] ; then
  echoError '2nd arg must be output image height'
  exit 1
fi

################################################################################
################################################################################

# get filename
filename=$1
extension=$(extension $filename)
outputFile="$1.$2x$3.png"
echoInfo "Audio to image [$2 x $3]: $filename"

# do conversion
ffmpeg -i "$filename" -filter_complex "aformat=channel_layouts=mono,showwavespic=s=$2x$3" -frames:v 1 "$outputFile"

################################################################################
################################################################################
# complete

echoSuccess "Audio to waveform image: \n# $outputFile"

# https://trac.ffmpeg.org/wiki/Waveform
