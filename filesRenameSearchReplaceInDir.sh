#!/bin/bash
source @includes.sh
echo '###################################################'
echo '# Description: Search & replace strings in filenames within a directory'
echo '# Usage: $ ./filesRenameSearchReplaceInDir.sh /some/files test hello'
echo '# Param 1: Directory'
echo '# Param 2: Search term'
echo '# Param 3: Replacement string'
echo '# Requires: Linux rename (might not exist on default OS X)'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
  echoError '1st arg must be a directory'
  exit 1
fi

if [[ $2 == "" ]] ; then
  echoError '2nd arg must be search term'
  exit 1
fi

if [[ $3 == "" ]] ; then
  echoError '3rd arg must be replacement string'
  exit 1
fi

################################################################################
################################################################################

# update filenames
rename $1 $2 $3/*

################################################################################
################################################################################
# complete

echoSuccess "Images renamed in $1"
