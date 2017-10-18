#!/bin/bash
# usage: $ ./thumbnailsForMovies /path/to/videos
for file in $1/*mp4
do
  ./thumbnailForMovie.sh $1 0.5
done
