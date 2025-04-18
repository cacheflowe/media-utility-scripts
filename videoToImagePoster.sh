#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Extract a poster frame from a video or videos in a directory'
echo '# Usage: $ ./videoToImagePoster.sh /path/to/video.mov [2.0]'
echo '#        $ ./videoToImagePoster.sh /path/to/videos/directory [2.0]'
echo '# Param 1: Video file or directory containing video files'
echo '# Param 2 [Optional]: Time in seconds'
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

extractTime=0
if [[ -z "$2" ]] ; then
    echoInfo "[Optional]: Using default frametime of ${extractTime} seconds"
else
    extractTime=$2
fi

################################################################################
################################################################################
# Function to process a single video file
processPosterFrame() {
    local videoFile="$1"
    local extractTime="$2"
    
    # Skip if file doesn't exist
    if [ ! -f "$videoFile" ]; then
        echoError "File not found: $videoFile"
        return 1
    fi
    
    # Get filename and create output filename
    local filename="$videoFile"
    local extension=$(extension "$filename")
    local outputFile="$filename.$extractTime.jpg"
    
    echoInfo "Saving thumbnail for movie: $filename at $extractTime seconds"
    
    # Do conversion
    ffmpeg -ss "$extractTime" -i "$videoFile" -t 1 -q:v 0 -f image2 "$outputFile"
    
    if [ $? -eq 0 ]; then
        echoSuccess "Extracted poster frame at $extractTime seconds: \n# $outputFile"
        return 0
    else
        echoError "Failed to extract poster frame from: $videoFile"
        return 1
    fi
}

# Check if path is a directory or a file
if [ -d "$1" ]; then
    # Process directory
    echoInfo "Processing all video files in directory: $1"
    
    # Process all video files in the directory
    for file in "$1"/*.{mp4,mov,avi,mkv,wmv}; do
        # Skip if no matches found
        [ -e "$file" ] || continue
        
        echoNewline
        echoInfo "Processing: $file"
        
        # Process the file
        processPosterFrame "$file" "$extractTime"
    done
    
    echoNewline
    echoSuccess "Finished processing all videos in directory: $1"
else
    echoInfo "Processing file: $1"
    # Process single file
    processPosterFrame "$1" "$extractTime"
fi
