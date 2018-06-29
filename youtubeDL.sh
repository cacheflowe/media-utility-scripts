#!/bin/bash
# usage: $ ./youtubeDL.sh 9t2degEnbpqrX

# LIST AVAILABLE FORMATS:
# youtube-dl -k -F $1

# AUDIO:
# youtube-dl -k -f m4a $1

# VIDEO:
cd _saved_files
youtube-dl -k -f mp4 $1
