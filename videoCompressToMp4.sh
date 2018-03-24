#!/bin/bash
echo '###################################################'
echo '# Description: Extract a poster frame from a video'
echo '# Usage: $ ./videoCompressToMp4.sh /path/to/video.mov "-crf 24 -vf scale=1280:-1 -an"'
echo '# Param 1: Video file'
echo '# Requires: ffmpeg'
echo '###################################################'

# SCALE TO WIDTH:
# -vf "scale=960:-1"

# FRAME RATE
# frame rate: -r 30
# frame rate: -r 60

# VIDEO CODEC / QUALITY
# h264: -c:v libx264    -crf 1          not this: -q:v 0
# mpeg4: -c:v mpeg4     -crf 1

# TIME CROP:
# start:    -ss 2.3
# end:      -to 4.3
# example:  -ss 0.5 -to 1.5

# REMOVE AUDIO
# -an

# AUDIO CODEC
# -c:a aac -b:a 128k -ac 2

# EFFECTS 
# -vf eq=brightness=0.08:saturation=1.2:contrast=1.15

# MERGE AUDIO TO VIDEO FILE
# %ffmpeg% -f concat -i _concat.txt -i %audioFile% -c:a aac -b:a 128k -ac 2 final-render\%sessionId%.mp4

# CONCAT VIDEO FILES & ADD AUDIO
# %ffmpeg% -f concat -i _concat.txt -i %audioFile% -c:a aac -b:a 128k -ac 2 final-render\%sessionId%.mp4

# IMAGE SEQUENCE TO VIDEO (WINDOWS)
# %ffmpeg% -r 30 -f image2 -i %%04d.tga -c:v libx264 -crf 16 -pix_fmt yuv420p -f mp4 ..\_frames-rendered.mp4


################################################################################
################################################################################
# check parameters & set defaults
if [[ $1 == "" ]] ; then
    echo '# [ERROR]: 1st arg must be a video file'
    echo '###################################################'
    exit 1
fi

customArgs="-crf 1 -an"
if [[ $2 -eq 0 ]] ; then
    echo "# [Optional]: Using default customArgs ${customArgs}"
    echo '###################################################'
else
    customArgs=$2
fi

################################################################################
################################################################################

echo "#####################################"
echo "# Compressing video:"
echo "# $filename"
echo "#####################################"
filename=$1
extension="${filename##*.}"
ffmpeg -y -i "$filename" -vcodec libx264 -pix_fmt yuv420p -f mp4 $customArgs "$filename.compressed.mp4"
# -an
echo '###################################################'
echo "# Success: Video Compressed:"
echo "# $filename.mp4"
echo '###################################################'
