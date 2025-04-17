# Media Utility Scripts

Bash scripts for common conversion tasks on multimedia (video, image, audio) files. I've put these scripts together so I don't have to look up common conversion parameters all the time. Built to work on OS X.

## Prerequisites

These scripts depend on the following libraries, which can be easily installed with `apt` or [Homebrew](https://brew.sh/):

* ffmpeg
* imagemagick
* pngquant
* jpegoptim
* optipng
* gifsicle
* LAME
* SoX
* [ImageAlpha](https://pngmini.com/)

## Setup

Make sure these scripts have appropriate permissions:

`chmod 755 *`

## Using the scripts

In your shell, just put a `./` in front of the script name then provide parameters described in the script file. For example, using `movie2gif.sh` looks like this:

`./videoToGif.sh /Path/to/movie/file.mov 600`

## Windows Setup

* Get Ubuntu installed from the Windows Store. This requires enabling Windows Subsystem for Linux (WSL) from Turn Windows Features on/off in Control Panel
* Open the Ubuntu app installed from the Store or `CMD + R` and type `wsl`
* Install Linuxbrew:
  * `sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"`
  * `PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"`
* Install libraries:
  * `brew install imagemagick`
  * `brew install ffmpeg`
  * `brew install gifsicle`
  * `brew install LAME`
  * `brew install SoX`
  * `brew install dos2unix`
* Convert dos carriage returns to UNIX format with [dos2unix](https://askubuntu.com/questions/1071403/cannot-cd-or-change-directory-using-bash-script-in-wsl)
* Find your C: drive and path to the scripts:
  * `cd /mnt/c/files/media-utility-scripts`


## Video Compression Notes

SCALE TO WIDTH:
```bash
-vf "scale=960:-1"
```

SCALE TO NEW ASPECT RATIO
```bash
-vf scale=800:600 -aspect 800:600
```

FRAME RATE
```bash
frame rate: -r 30
frame rate: -r 60
```

VIDEO CODEC / QUALITY
```bash
h264:  -c:v libx264   -crf 1          not this: -q:v 0
mpeg4: -c:v mpeg4     -crf 1
webm:  -c:v libvpx -c:a libvorbis
# https://thethemefoundry.com/blog/convert-mp4-to-webm/
```

VIDEO PLAYBACK
```bash
# faster decoding: 
-tune fastdecode
```

TIME CROP:
```bash
start:    -ss 2.3
end:      -to 4.3
example:  -ss 0.5 -to 1.5
```

ROTATE VIDEO
```bash
0 = 90CounterCLockwise and Vertical Flip (default)
1 = 90Clockwise
2 = 90CounterClockwise
3 = 90Clockwise and Vertical Flip
Use -vf "transpose=2,transpose=2" for 180 degrees.
# example: -vf "transpose=1"
```

REMOVE AUDIO
```bash
-an
```

Convert audio to mono
```bash
-af "pan=mono|c0=c1" -map 0:0 -c:v
ffmpeg -i video.mp4 -af "pan=mono|c0=c1" video.mp4
```

AUDIO CODEC
```bash
-c:a aac -b:a 128k -ac 2
```

KEYFRAMES ON EVERY FRAME
```bash
-vcodec libx264 -x264-params keyint=1:scenecut=0
# or for non-mp4:
-keyint_min 1 -g 1
```

COPY CODEC (could result in non-mp4 output)
```bash
-vcodec copy
```

EFFECTS
```bash
# Brightness/saturation/contrast
-vf eq=brightness=0.08:saturation=1.2:contrast=1.15
# Grayscale:
-vf format=gray
# Invert:
-vf lutrgb="r=negval:g=negval:b=negval"
# Frame interpolation
-vf minterpolate='fps=60:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1'
# https://github.com/dthpham/butterflow
# Boomerang
-filter_complex "[0]reverse[r];[0][r]concat=n=2"
```

MERGE AUDIO TO VIDEO FILE
```bash
%ffmpeg% -f concat -i _concat.txt -i %audioFile% -c:a aac -b:a 128k -ac 2 final-render\%sessionId%.mp4
```

CONCAT VIDEO FILES & ADD AUDIO
```bash
%ffmpeg% -f concat -i _concat.txt -i %audioFile% -c:a aac -b:a 128k -ac 2 final-render\%sessionId%.mp4
```

IMAGE SEQUENCE TO VIDEO (WINDOWS)
```bash
%ffmpeg% -r 30 -f image2 -i %%04d.tga -c:v libx264 -crf 16 -pix_fmt yuv420p -f mp4 ..\_frames-rendered.mp4
```

BLANK SPACE PADDING
```bash
-vf "pad=width=1800:height=1200:x=100:y=100:color=black"
```

GENERATE A TEST PATTERN
```bash
ffmpeg -f lavfi -i testsrc=duration=10:size=3840x2160:rate=60 -c:v libx264 testsrc1.mp4
```

Alpha Channel video
```bash
# (2) commands to convert from Prores to webm w/alpha channel
ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 1000k -pass 1 -an -f null -
ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 1000k -pass 2 output.webm
```

Crop and scale at the same time!
```bash
# From: https://stackoverflow.com/a/52675535
crop=iw-100:ih-200,scale=960:576 
```

Specific recommendations for Twitter
```bash
# From: https://gist.github.com/marcduiker/abe8e4b7353b4c6430d556b727666620
# - Convert pngs to mp4
ffmpeg -framerate 10 -i frame_%04d.png -c:v h264_qsv -b:v 5M video.mp4
# - Convert and scale an existing mp4 to 1080:
ffmpeg -i input.mp4 -c:v h264_qsv -vf: scale=1080:-1 -b:v 5M output.mp4
# - Convert infinite looping gif to limited looping mp4 (no scaling)
ffmpeg -i input.gif -c:v h264_qsv -filter_complex loop=loop=<NrOfLoops>:size=<TotalFrames>:start=<FramesToSkip> -b:v 5M output.mp4
```

Fix Waifu2x super high framterate video
```bash
-r 60 -vf: scale=1080:-1,setpts=2*PTS
```

ProRes
```bash
# Info: https://ottverse.com/ffmpeg-convert-to-apple-prores-422-4444-hq/
```