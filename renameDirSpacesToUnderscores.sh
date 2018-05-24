#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Rename files in a directory, replacing spaces with underscores'
echo '# Usage: $ ./renameDirSpacesToUnderscores.sh /path/to/files'
echo '# Param 1: Directory of files'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters
if [[ $1 == "" ]] ; then
    echoError '1st arg must be a directory'
    exit 1
fi

################################################################################
################################################################################

# loop through files
for file in "$1"/*
do
  ./renameFileSpacesToUnderscores.sh "$file"
done

################################################################################
################################################################################
# complete

echoSuccess "Renamed files in $1"
