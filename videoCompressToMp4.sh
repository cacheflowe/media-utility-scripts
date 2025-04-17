#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Compress a video or videos in a directory to mp4'
echo '# Usage: $ ./videoCompressToMp4.sh /path/to/video.mov "-crf 24 -vf scale=1280:-1 -an"'
echo '#        $ ./videoCompressToMp4.sh /path/to/videos/ "-crf 24 -vf scale=1280:-1 -an"'
echo '# Param 1: Video file or directory containing video files'
echo '# Param 2 [Optional]: Custom args'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters & set defaults
if [[ $1 == "" ]] ; then
    echoError '1st arg must be a video file or directory'
    exit 1
fi

customArgs="-crf 1 -an"
if [[ $2 == "" ]] ; then
    echoInfo "[Optional]: Using default customArgs ${customArgs}"
else
    customArgs=$2
    echoInfo "[Optional]: Using user-defined customArgs ${customArgs}"
fi

################################################################################
################################################################################

# Check if path is a directory or a file
if [ -d "$1" ]; then
    # Process directory
    echoInfo "Processing all video files in directory: $1"
    
    # Loop through files
    for file in "$1"/*.{mov,mp4,avi,wmv,mkv}; do
        # Skip if no matches found
        [ -e "$file" ] || continue
        
        echoNewline
        echoInfo "Processing: $file"
        
        # Get filename
        filename="$file"
        extension=$(extension "$filename")
        outputFile="$filename.compressed.mp4"
        echoInfo "Compressing video: $filename with args: $customArgs"
        
        # Do conversion
        ffmpeg -y -i "$filename" -vcodec libx264 -pix_fmt yuv420p -f mp4 $customArgs "$outputFile"
        
        echoSuccess "Video Compressed: $outputFile"
    done
    
    echoNewline
    echoSuccess "Finished compressing all videos in directory: $1"
else
    # Process single file
    # get filename
    filename=$1
    extension=$(extension $filename)
    outputFile="$filename.compressed.mp4"
    echoInfo "Compressing video: $filename"

    # do conversion
    ffmpeg -y -i "$filename" -vcodec libx264 -pix_fmt yuv420p -f mp4 $customArgs "$outputFile"

    ################################################################################
    ################################################################################
    # complete

    echoSuccess "Video Compressed: $outputFile"
fi
