#!/bin/bash

# define colors: https://unix.stackexchange.com/a/269085
red=`tput setaf 1`
green=`tput setaf 2`
orange=`tput setaf 3`
reset=`tput sgr0`

# example: log 'Hello World'
log() {
  echo '['$(date +'%a %Y-%m-%d %H:%M:%S %z')']' $1
}

# example: result=$(extension $filename)
extension() {
  local filename=$1
  local extension="${filename##*.}"
  echo "$extension"
}

# example: echoNewline
echoNewline() {
  printf "\n"
}

# example: echoDivider
echoDivider() {
  echo '###################################################'
}

# example: echoError 'Kaput'
# -e to enable \n newlines
echoError() {
  echoNewline
  echoDivider
  echo -e "# ${red}[ERROR]${reset}: $1"
  echoDivider
  echoNewline
}

# example: echoInfo 'Informations'
echoInfo() {
  # echoNewline
  echoDivider
  echo -e "# ${orange}[INFO]${reset}: $1"
  echoDivider
  # echoNewline
}

# example: echoSuccess 'Nice!'
echoSuccess() {
  echoNewline
  echoDivider
  echo -e "# ${green}[SUCCESS]${reset}: $1"
  echoDivider
  echoNewline
}
