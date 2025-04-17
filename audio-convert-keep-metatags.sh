mkdir -p outputdir
for i in Full_Book/*.wma; do
  o=outputdir/${i#Full_Book/}
  # sox -r 16000 -e unsigned -b 16 -c 1 "$i" "${o%.wma}.mp3"
  ffmpeg -i "$i" -ab 128k -map_metadata 0 -id3v2_version 3 "${o%.wma}.mp3"
done