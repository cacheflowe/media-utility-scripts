for file in $1/*mov
do
  ./videoCompress2mp4.sh $file $2
done
