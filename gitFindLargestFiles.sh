#!/bin/bash
# From: https://stackoverflow.com/questions/10622179/how-to-find-identify-large-files-commits-in-git-history
# To delete found files: https://stackoverflow.com/a/43640996
source @includes.sh
echo '###################################################'
echo '# Description: Find largest files in a git repo'
echo '# Usage: $ ./gitFindLargestFiles.sh /git/repo/path 30'
echo '# Param 1: Git repo directory'
echo '# Param 2 [Optional]: Numer of files'
echo '###################################################'
echoNewline

################################################################################
################################################################################
# check parameters

if [[ $1 == "" ]] ; then
  echoError '1st arg must be a git repo path'
  exit 1
fi

numFiles="10"
if [[ $2 -eq 0 ]] ; then
    echoInfo "[Optional]: Using default numFiles ${numFiles}"
else
    numFiles=$2
    echoInfo "[Optional]: Using user-defined numFiles ${numFiles}"
fi

################################################################################
################################################################################

# get filename
repoDir=$1
echoInfo "Listing ($numFiles) large files in repo: $repoDir"

# find files in history
cd $repoDir
git rev-list --objects --all \
| git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' \
| sed -n 's/^blob //p' \
| sort --numeric-sort --key=2 \
| cut -c 1-12,41- \
| tail -$numFiles \
| numfmt --field=2 --to=iec-i --suffix=B --padding=7 --round=nearest
cd -

################################################################################
################################################################################
# complete
