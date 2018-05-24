#!/bin/bash
# http://graphicdesign.stackexchange.com/questions/20908/how-to-remove-every-second-frame-from-an-animated-gif
source @includes.sh
echo '###################################################'
echo '# Description: Cut a gif in half by removing every other frame'
echo '# Usage: $ ./gifRemoveEveryOtherFrame.sh /path/to/image.gif'
echo '# Param 1: Gif file'
echo '# Requires: gifsicle'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError "1st arg must be a gif file"
    exit 1
fi

################################################################################
################################################################################

# get filename
filename=$1
extension="${filename##*.}"
outputFile="$1.half.gif"

# do conversion
# [cacheflowe] util [system] [master *+] gifsicle -U /Users/cacheflowe/Downloads/c4f64a4a-688e-468c-2c76-e35423a33db5.gif  `seq -f "#%g" 0 2 250` -O2 -o /Users/cacheflowe/Downloads/c4f64a4a-688e-468c-2c76-e35423a33db5-quick.gif
gifsicle -U $filename `seq -f "#%g" 0 2 $(identify $filename | tail -1 | cut -d "[" -f2 - | cut -d "]" -f1 -)` -O2 -o "$outputFile"

################################################################################
################################################################################
# complete

echoSuccess "Halved gif: $outputFile"
