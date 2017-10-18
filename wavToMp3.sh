#!/bin/bash
# docs: http://lame.cvs.sourceforge.net/viewvc/lame/lame/USAGE
echo '###################################################'
echo '# Description: Convert a wav/aif file to mp3'
echo '# Usage: $ $ ./wavToMp3.sh /path/to/file.wav [256] [1]'
echo '# Param 1: Wav or Aif file'
echo '# Param 2 [Optional]: Bitrate'
echo '# Param 3 [Optional]: Channels'
echo '# Requires: Lame'
echo '###################################################'

################################################################################
################################################################################
# check parameters
if [[ $1 == "" ]] ; then
    echo '# [ERROR]: 1st arg must be a wav or aif file'
    echo '###################################################'
    exit 1
fi

bitrate=320
if [[ $2 -eq 0 ]] ; then
    echo '# [Optional]: Using default bitrate of 320'
    echo '###################################################'
else
    bitrate=$2
fi

mono=""
if [[ $3 -eq 1 ]] ; then
    mono="-m m"
    echo '# [Optional]: Converting to mono'
    echo '###################################################'
fi

################################################################################
################################################################################

filename=$1
extension="${filename##*.}"
lame --abr $bitrate --resample 44.1 --bitwidth 16 $mono -q0 -a "$filename" "$1.mp3"

echo '###################################################'
echo "# Success: Converted to 16/44.1 mp3"
echo '###################################################'
