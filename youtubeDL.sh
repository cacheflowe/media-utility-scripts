#!/bin/bash
# usage: $ ./youtubeDL.sh 9t2degEnbpqrX

# LIST AVAILABLE FORMATS:
# youtube-dl -k -F $1

# AUDIO:
# youtube-dl -k -f m4a $1

# THUMBNAIL
# youtube-dl -k -f --write-thumbnail --skip-download

# VIDEO:
cd _saved_files
youtube-dl --write-thumbnail -k -f mp4 $1
