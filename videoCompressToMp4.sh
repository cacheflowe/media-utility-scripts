#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Compress a video to mp4'
echo '# Usage: $ ./videoCompressToMp4.sh /path/to/video.mov "-crf 24 -vf scale=1280:-1 -an"'
echo '# Param 1: Video file'
echo '# Param 2 [Optional]: Custom args'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

# SCALE TO WIDTH:
# -vf "scale=960:-1"

# SCALE TO NEW ASPECT RATIO
# -vf scale=800:600 -aspect 800:600

# FRAME RATE
# frame rate: -r 30
# frame rate: -r 60

# VIDEO CODEC / QUALITY
# h264:  -c:v libx264   -crf 1          not this: -q:v 0
# mpeg4: -c:v mpeg4     -crf 1
# webm:  -c:v libvpx -c:a libvorbis
# https://thethemefoundry.com/blog/convert-mp4-to-webm/

# VIDEO PLAYBACK
# faster decoding: -tune fastdecode

# TIME CROP:
# start:    -ss 2.3
# end:      -to 4.3
# example:  -ss 0.5 -to 1.5

# ROTATE VIDEO
# 0 = 90CounterCLockwise and Vertical Flip (default)
# 1 = 90Clockwise
# 2 = 90CounterClockwise
# 3 = 90Clockwise and Vertical Flip
# Use -vf "transpose=2,transpose=2" for 180 degrees.
# example: -vf "transpose=1"

# REMOVE AUDIO
# -an

# Convert audio to mono
# -af "pan=mono|c0=c1" -map 0:0 -c:v
# ffmpeg -i video.mp4 -af "pan=mono|c0=c1" video.mp4

# AUDIO CODEC
# -c:a aac -b:a 128k -ac 2

# KEYFRAMES ON EVERY FRAME
# -vcodec libx264 -x264-params keyint=1:scenecut=0
# or for non-mp4:
# -keyint_min 1 -g 1

# COPY CODEC (could result in non-mp4 output)
# -vcodec copy

# EFFECTS
# Brightness/saturation/contrast
# -vf eq=brightness=0.08:saturation=1.2:contrast=1.15
# Grayscale:
# -vf format=gray
# Invert:
# -vf lutrgb="r=negval:g=negval:b=negval"
# Frame interpolation
# -vf minterpolate='fps=60:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1'
# https://github.com/dthpham/butterflow
# Boomerang
# -filter_complex "[0]reverse[r];[0][r]concat=n=2"

# MERGE AUDIO TO VIDEO FILE
# %ffmpeg% -f concat -i _concat.txt -i %audioFile% -c:a aac -b:a 128k -ac 2 final-render\%sessionId%.mp4

# CONCAT VIDEO FILES & ADD AUDIO
# %ffmpeg% -f concat -i _concat.txt -i %audioFile% -c:a aac -b:a 128k -ac 2 final-render\%sessionId%.mp4

# IMAGE SEQUENCE TO VIDEO (WINDOWS)
# %ffmpeg% -r 30 -f image2 -i %%04d.tga -c:v libx264 -crf 16 -pix_fmt yuv420p -f mp4 ..\_frames-rendered.mp4

# BLANK SPACE PADDING
# -vf "pad=width=1800:height=1200:x=100:y=100:color=black"

# GENERATE A TEST PATTERN
# ffmpeg -f lavfi -i testsrc=duration=10:size=3840x2160:rate=60 -c:v libx264 testsrc1.mp4

# Alpha Channel video
# (2) commands to convert from Prores to webm w/alpha channel
# ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 1000k -pass 1 -an -f null -
# ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 1000k -pass 2 output.webm

# Crop and scale at the same time!
# From: https://stackoverflow.com/a/52675535
# crop=iw-100:ih-200,scale=960:576 

# Specific recommendations for Twitter
# From: https://gist.github.com/marcduiker/abe8e4b7353b4c6430d556b727666620
# - Convert pngs to mp4
# ffmpeg -framerate 10 -i frame_%04d.png -c:v h264_qsv -b:v 5M video.mp4
# - Convert and scale an existing mp4 to 1080:
# ffmpeg -i input.mp4 -c:v h264_qsv -vf: scale=1080:-1 -b:v 5M output.mp4
# - Convert infinite looping gif to limited looping mp4 (no scaling)
# ffmpeg -i input.gif -c:v h264_qsv -filter_complex loop=loop=<NrOfLoops>:size=<TotalFrames>:start=<FramesToSkip> -b:v 5M output.mp4

# Fix Waifu2x super high framterate video
# -r 60 -vf: scale=1080:-1,setpts=2*PTS

# ProRes
# Info: https://ottverse.com/ffmpeg-convert-to-apple-prores-422-4444-hq/

################################################################################
################################################################################
# check parameters & set defaults
if [[ $1 == "" ]] ; then
    echoError '1st arg must be a video file'
    exit 1
fi

customArgs="-crf 1 -an"
if [[ $2 -eq 0 ]] ; then
    echoInfo "[Optional]: Using default customArgs ${customArgs}"
else
    customArgs=$2
    echoInfo "[Optional]: Using user-defined customArgs ${customArgs}"
fi

################################################################################
################################################################################

# get filename
filename=$1
extension=$(extension $filename)
outputFile="$filename.compressed.mp4"
echoInfo "Compressing video: $filename"

# do conversion
ffmpeg -y -i "$filename" -vcodec libx265 -pix_fmt yuv420p -f mp4 $customArgs $outputFile

################################################################################
################################################################################
# complete

echoSuccess "Video Compressed: $filename.mp4"
