#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Crops a portion of a video'
echo '# Usage: $ ./videoCropDimensions.sh /path/to/video.mov 10 10 200 200'
echo '# Param 1: Video file'
echo '# Param 2: x'
echo '# Param 3: y'
echo '# Param 4: width'
echo '# Param 5: height'
echo '# Param 6 [Optional]: Custom args "-crf 1"'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError '1st arg must be a video file'
    exit 1
fi

if [[ $2 == "" ]] ; then
    echoError '2nd arg must be a crop x'
    exit 1
fi

if [[ $3 == "" ]] ; then
    echoError '3rd arg must be a crop y'
    exit 1
fi

if [[ $4 == "" ]] ; then
    echoError '4th arg must be a crop width'
    exit 1
fi

if [[ $5 == "" ]] ; then
    echoError '5th arg must be a crop height'
    exit 1
fi

customArgs="-crf 1"
if [[ $6 -eq 0 ]] ; then
  echoInfo "[Optional]: Using default customArgs ${customArgs}"
else
  customArgs=$6
fi

extraVFArgs=""
if [[ $6 -eq 0 ]] ; then
  echoInfo "[Optional]: Using default extraVFArgs ${extraVFArgs}"
else
  extraVFArgs=$7
fi



################################################################################
################################################################################

# get filename
filename=$1
extension=$(extension $filename)
outputFile="$filename.crop.x$2.y$3.w$4.h$5.mp4"
echoInfo "Cropping video: $filename"

# do conversion
ffmpeg -i $filename -filter:v "crop=$4:$5:$2:$3 $extraVFArgs" -pix_fmt yuv420p -vcodec libx264 $customArgs -f mp4 "$outputFile"

################################################################################
################################################################################
# complete

echoSuccess "Video cropped: $filename.mp4"
