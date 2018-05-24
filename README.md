# Media Utility Scripts

Bash scripts for common conversion tasks on multimedia (video, image, audio) files. I've put these scripts together so I don't have to look up common conversion parameters all the time. Built to work on OS X.

## Prerequisites

These scripts depend on the following libraries, which can be easily installed with [Homebrew](https://brew.sh/):

* ffmpeg
* imagemagick
* gifsicle
* LAME
* [ImageAlpha](https://pngmini.com/)

## Setup

Make sure these scripts have appropriate permissions:

`chmod 755 *`

## Using the scripts

In your shell, just put a `./` in front of the script name then provide parameters described in the script file. For example, using `movie2gif.sh` looks like this:

`./videoToGif.sh /Path/to/movie/file.mov 600`

## Windows Setup

This is sketchy but I've had some success. If anything, most of these scripts have a single line that does the magic - this is more likely to succeed than running the whole script.

* Get Ubuntu installed from the Windows Store. This requires enabling Windows Subsystem for Linux (WSL) from Turn Windows Features on/off in Control Panel
* Open the Ubuntu app installed from the Store
* Install Linuxbrew:
  * `sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"`
  * `PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"`
* Install libraries:
  * `brew install imagemagick`
  * `brew install ffmpeg`
  * `brew install gifsicle`
* Find your C: drive:
  * `cd /mnt/c`
