#!/bin/bash

echo '###################################################'
echo '# Description: Rename files in a directory, replacing spaces with underscores'
echo '# Usage: $ $ ./renameDirSpacesToUnderscores.sh /path/to/files'
echo '# Param 1: Directory of files'
echo '###################################################'

################################################################################
################################################################################
# check parameters
if [[ $1 == "" ]] ; then
    echo '# [ERROR]: 1st arg must be a directory'
    echo '###################################################'
    exit 1
fi

################################################################################
################################################################################

for file in "$1"/*
do
  ./renameFileSpacesToUnderscores.sh "$file"
done

echo '###################################################'
echo "# Success: Renamed files in $1"
echo '###################################################'
