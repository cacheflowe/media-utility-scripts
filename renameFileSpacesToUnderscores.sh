#!/bin/sh
source @includes.sh
echo '###################################################'
echo '# Description: Rename a file or directory, replacing spaces with underscores'
echo '# Usage: $ ./renameFileSpacesToUnderscores.sh input with spaces.txt'
echo '# Param 1: File or directory'
echo '###################################################'
echoNewline

################################################################################
###############################################################################
# check parameters
if [[ $1 == "" ]] ; then
    echoError '1st arg must be a file'
    exit 1
fi

################################################################################
################################################################################

# Replace spaces with underscores
replaced=`echo "$1" | tr ' ' '_'`
mv "$1" "$replaced";

################################################################################
################################################################################
# complete

echoSuccess "File renamed: $replaced"
