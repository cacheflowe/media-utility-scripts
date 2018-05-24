#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Extract image sequence from a video'
echo '# Usage: $ ./videoToImageSequence.sh /path/to/video.mov [jpg]'
echo '# Param 1: Video file'
echo '# Param 2 [Optional]: Output file format [jpg]'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters & set defaults
if [[ $1 == "" ]] ; then
    echoError '1st arg must be a video file'
    exit 1
fi

outputFormat="png"
if [[ $2 == "" ]] ; then
    echoInfo "[Optional]: Using default image format of $outputFormat"
else
    outputFormat=$2
fi

################################################################################
################################################################################

# get filename
filename=$1
extension=$(extension $filename)
echoInfo "Saving images from video: $filename"

# create output directory
newDir="$filename-frames"
mkdir $newDir
echoInfo "Created directory: $newDir"

# do conversion
if [ $outputFormat = "jpg" ]; then
  # jpeg quality info: http://stackoverflow.com/questions/10225403/how-can-i-extract-a-good-quality-jpeg-image-from-an-h264-video-file-with-ffmpeg
  ffmpeg -i $filename -qscale:v 1 $newDir/ffout%08d.jpg
else
  ffmpeg -i $filename $newDir/ffout%08d.png
fi

################################################################################
################################################################################
# complete

echoSuccess "Extracted video frames: \n# $newDir"
