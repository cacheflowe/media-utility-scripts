#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Copy a directory recursively & safely'
echo '# Usage: $ ./directoryCopyRecursive.sh /path/to/copy/from /path/to/copy/to'
echo '# Param 1: Copy path [from]'
echo '# Param 2: Copy path [to]'
echo '# Requires: rsync'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError "1st arg must be a directory to copy from"
    exit 1
fi

size=1
if [[ $2 == "" ]] ; then
  echoError "2nd arg must be a directory to copy to"
  exit 1
fi

################################################################################
################################################################################

# do copy
sudo rsync -rltgoDv "$1" "$2"

################################################################################
################################################################################
# complete

echoSuccess "Files copied!"
