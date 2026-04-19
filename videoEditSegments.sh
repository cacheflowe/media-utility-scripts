#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Cut multiple segments from a video and concatenate them without re-encoding'
echo '# Usage: ./videoEditSegments.sh /path/to/video.mov "62.8-73.0 10.8-23.0" "-map 0"'
echo '# Param 1: Input video file'
echo '# Param 2: Space-separated start and end times for each segment, formatted as START-END'
echo '#          Time format can be HH:MM:SS.MILLISECONDS (e.g., 00:01:30) or Seconds (e.g., 90 or 12.5)'
echo '#          Example using mixed formats: "00:01:30-105.5"'
echo '# Param 3 [Optional]: Custom args (applied to each segment during extraction)'
echo '# Requires: ffmpeg'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters & set defaults
if [[ $1 == "" ]] || [[ ! -f $1 ]] ; then
    echoError '1st arg must be a valid video file'
    exit 1
fi

if [[ $2 == "" ]] ; then
    echoError '2nd arg must be a space-separated string of segments (e.g. "00:00:00-00:00:05 00:01:00-00:01:10")'
    exit 1
fi

customArgs=""
if [[ $3 == "" ]] ; then
    echoInfo "[Optional]: Using default customArgs (none)"
else
    customArgs=$3
    echoInfo "[Optional]: Using user-defined customArgs ${customArgs}"
fi

################################################################################
################################################################################

filename=$1
segments=$2
outputFile="$filename.edit.mp4"
listFile="$filename.concat_list.txt"

echoInfo "Processing video: $filename"

# clear list file if exists
> "$listFile"

i=0
tempFiles=()

for segment in $segments; do
    start=${segment%-*}
    end=${segment#*-}
    
    if [[ -z "$start" ]] || [[ -z "$end" ]]; then
        echoError "Invalid segment format: $segment"
        continue
    fi
    
    tempVid="${filename}.temp_${i}.mp4"
    tempFiles+=("$tempVid")
    
    echoInfo "Cutting segment ${i}: ${start} to ${end}"
    
    # Do conversion for the segment natively
    # Note: placing -ss before -i for faster seeking, -to after -i to stop at accurate duration
    ffmpeg -y -ss "$start" -to "$end" -i "$filename" -c copy $customArgs "$tempVid"
    
    # Add to concat list
    echo "file '$(basename "$tempVid")'" >> "$listFile"
    
    ((i++))
done

echoNewline
echoInfo "Concatenating ${#tempFiles[@]} segments into final video..."

# Concatenate all segments
ffmpeg -y -f concat -safe 0 -i "$listFile" -c copy "$outputFile"

echoNewline
echoInfo "Cleaning up temporary files..."
for temp in "${tempFiles[@]}"; do
    rm -f "$temp"
done
rm -f "$listFile"

################################################################################
################################################################################
# complete

echoSuccess "Video Edited: $outputFile"
