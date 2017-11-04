# Media Utility Scripts

Bash scripts for common conversion tasks on media (video, image, audio) files. I've put these scripts together so I don't have to look up common conversion parameters all the time. Built to work on OS X.

## Prerequisites

These scripts depend on the following libraries:

* ffmpeg
* imagemagick
* gifsicle
* LAME
* ImageAlpha

## Setup

Make sure these scripts have appropriate permissions:

`chmod 755 *`

## Windows Setup

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

## Using the scripts

In your shell, just put a `./` in front of the script name then provide parameters described in the script file. For example, using `movie2gif.sh` looks like this:

`./movie2gif.sh /Path/to/movie/file.mov 600`
