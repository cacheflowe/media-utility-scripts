#!/bin/bash
# docs: http://lame.cvs.sourceforge.net/viewvc/lame/lame/USAGE
source @includes.sh
echo '###################################################'
echo '# Description: Convert a wav/aif file to mp3'
echo '# Usage: $ ./wavToMp3.sh /path/to/file.wav [256] [1]'
echo '# Param 1: Wav or Aif file'
echo '# Param 2 [Optional]: Bitrate'
echo '# Param 3 [Optional]: Channels'
echo '# Requires: Lame'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError '1st arg must be a wav or aif file'
    exit 1
fi

bitrate=320
if [[ $2 -eq 0 ]] ; then
    echoInfo '[Optional]: Using default bitrate of 320'
else
    bitrate=$2
fi

mono=""
if [[ $3 -eq 1 ]] ; then
    mono="-a"
    echoInfo '[Optional]: Converting to mono'
fi

################################################################################
################################################################################

# get filename
filename=$1
extension=$(extension $filename)
outputFile="$1.$bitrate.mp3"

# do conversion
lame --abr $bitrate --resample 44.1 --bitwidth 16 $mono -q0 "$filename" $outputFile

################################################################################
################################################################################
# complete

echoSuccess "Converted to 16/44.1 mp3 \n# $outputFile"
