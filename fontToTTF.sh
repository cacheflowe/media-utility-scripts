#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Convert a font to .ttf'
echo '# Usage: $ ./fontToTTF.sh /path/to/font.otf'
echo '# Param 1: Font file'
echo '# Requires: fontforge'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError "1st arg must be a font file"
    exit 1
fi

################################################################################
################################################################################

# get filename
filename=$1
extension="${filename##*.}"

# do conversion
fontforge -lang=ff -c 'Open($1); Generate($1:r + ".ttf")' "$1"

################################################################################
################################################################################
# complete

echoSuccess "Converted .$extension font to .ttf"
