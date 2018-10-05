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
