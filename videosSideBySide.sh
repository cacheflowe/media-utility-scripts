# https://trac.ffmpeg.org/wiki/Create%20a%20mosaic%20out%20of%20several%20input%20videos

ffmpeg -i IMG_6269.MOV -i IMG_6274.MOV -i IMG_6275.MOV -filter_complex "
nullsrc=size=3240x1920 [background];
[0:v] setpts=PTS-STARTPTS, scale=1080x1920 [left];
[1:v] setpts=PTS-STARTPTS, scale=1080x1920 [middle];
[2:v] setpts=PTS-STARTPTS, scale=1080x1920 [right];
[background][left]         overlay=shortest=1        [background+left];
[background+left][middle]  overlay=shortest=1:x=1080 [background+middle];
[background+middle][right] overlay=shortest=1:x=2160
" -c:v libx264 output.mp4
