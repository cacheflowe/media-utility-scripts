#!/bin/bash
# docs: https://aubio.org/manual/latest/cli.html
source @includes.sh
echo '###################################################'
echo '# Description: Extract a midi note from a wav file'
echo '# Info: Displays tmies and MIDI notes if successful'
echo '# Usage: $ ./wavExtractNote.sh /path/to/file.wav'
echo '# Param 1: Wav or Aif file'
echo '# Requires: Aubio'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError '1st arg must be a wav or aif file'
    exit 1
fi

################################################################################
################################################################################

# get filename
filename=$1

# do conversion
aubio notes "$filename" --release-drop 90

################################################################################
################################################################################
# complete

# echoSuccess "Converted to 16/44.1 mp3 \n# $outputFile"
