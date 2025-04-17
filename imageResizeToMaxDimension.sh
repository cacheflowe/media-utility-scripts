#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Resize an image or images in a directory to a maximum dimension'
echo '# Usage: $ ./imageResizeToMaxDimension.sh /Absolute/image/file.jpg 640'
echo '#        $ ./imageResizeToMaxDimension.sh /path/to/images/ 640'
echo '# Param 1: Image file or directory containing image files'
echo '# Param 2: Maximum width/height'
echo '# Requires: Imagemagick'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
  echoError '1st arg must be an image file or directory'
  exit 1
fi

if [[ $2 -eq 0 ]] ; then
  echoError '2nd arg must be maximum size'
  exit 1
fi

################################################################################
################################################################################

# Check if path is a directory or a file
if [ -d "$1" ]; then
    # Process directory
    echoInfo "Processing all image files in directory: $1"
    
    # Loop through files
    for file in "$1"/*.{png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF,heic,HEIC}; do
        # Skip if no matches found
        [ -e "$file" ] || continue
        
        echoNewline
        echoInfo "Processing: $file"
        
        # Get filename and extension
        filename="$file"
        extension=$(extension "$filename")
        outputFile="$filename.$2.$extension"
        echoInfo "Resizing image: $filename to max dimension of $2"
        
        # Do conversion
        convert "$filename" -resize $2x$2 "$outputFile"
        
        echoSuccess "Image resized to max dimension of: $2 \n# $outputFile"
    done
    
    echoNewline
    echoSuccess "Success: Resized all images in directory: $1"
else
    # Process single file
    # get filename
    filename=$1
    extension=$(extension $filename)
    echoInfo "Resizing image: $filename"
    outputFile="$1.$2.$extension"

    # do conversion
    convert $1 -resize $2x$2 $outputFile
    # convert $1 -resize $2x$2 -sampling-factor 4:2:0 -strip -quality 80 -interlace JPEG -colorspace RGB $outputFile.jpg

    ################################################################################
    ################################################################################
    # complete

    echoSuccess "Success: Image resized to max dimension of: $2 \n# $outputFile"
fi
