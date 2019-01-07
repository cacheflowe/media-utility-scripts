#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: List files in directory'
echo '# Usage: $ ./fileListRecursive.sh /path/to/list'
echo '# Param 1: Path'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
    echoError "1st arg must be a path"
    exit 1
fi

################################################################################
################################################################################

# get path
path=$1
echoInfo "Listing files in: $path"

# do listing
cd $path
find "$PWD" -type f

################################################################################
################################################################################
# complete

echoSuccess "File listing done!"
