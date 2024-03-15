foreach ($i in Get-ChildItem *.jpg) {
    $fileName = $i.BaseName     
    magick convert "$i"  "$fileName.webp"
    magick convert "$i" -resize 200x200 "$fileName-200x.webp"
    magick convert "$i" -resize 400x400 "$fileName-400x.webp"
    magick convert "$i" -resize 600x600 "$fileName-600x.webp"
    magick convert "$i" -resize 800x800 "$fileName-800x.webp"
}

