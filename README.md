# Media Utility Scripts

Scripts for common conversion tasks on media (video, image, audio) files. I've put these scripts together so I don't have to look up common conversion parameters all the time.

## Prerequisites

These scripts depend on the following libraries:

* ffmpeg
* imagemagick
* gifsicle
* LAME

## Setup

Make sure these scripts have appropriate permissions:

`chmod 755 *`

## Using the scripts

In your shell, just put a `./` in front of the script name then provide parameters described in the script file. For example, using `movie2gif.sh` looks like this:

`./movie2gif.sh /Path/to/movie/file.mov 600`
