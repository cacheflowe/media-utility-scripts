#!/bin/bash
# usage: $ ./convert-mp3 /path/to/files
# docs: http://lame.cvs.sourceforge.net/viewvc/lame/lame/USAGE

filename=$1
lame --abr 320 --resample 44.1 --bitwidth 16 -q0 -a $filename ${filename/wav/mp3}
