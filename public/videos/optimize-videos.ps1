# optimize-videos.ps1
# Run this from inside your public/videos folder (where your source .mp4 files live)

$posterDir = "posters"
$optimizedDir = "optimized"

New-Item -ItemType Directory -Force -Path $posterDir | Out-Null
New-Item -ItemType Directory -Force -Path $optimizedDir | Out-Null

Get-ChildItem -Filter *.mp4 | ForEach-Object {
    $name = $_.BaseName
    $inputFile = $_.Name
    $outputFile = "$optimizedDir\$name.mp4"

    # Skip files that have already been optimized (delete the output file to force a re-run)
    if (Test-Path $outputFile) {
        Write-Host "Skipping $inputFile (already optimized)" -ForegroundColor DarkGray
        return
    }

    Write-Host "Processing $inputFile..." -ForegroundColor Cyan

    # 1. Generate a poster frame (1 second in)
    ffmpeg -y -i $inputFile -ss 00:00:01 -vframes 1 -update 1 -q:v 2 "$posterDir\$name-poster.jpg"

    # 2. Generate a compressed, web-ready version
    #    - caps resolution to fit within 1080x1920 (no upscaling), preserving aspect ratio
    #    - re-encodes with crf 23 (good quality/size tradeoff)
    #    - moves metadata to the front for instant playback start (+faststart)
    ffmpeg -y -i $inputFile `
        -vf "scale=w='min(1080,iw)':h='min(1920,ih)':force_original_aspect_ratio=decrease" `
        -c:v libx264 -crf 23 -preset slow `
        -c:a aac -b:a 128k `
        -movflags +faststart `
        "$optimizedDir\$name.mp4"

    $origSize = [math]::Round($_.Length / 1MB, 2)
    $newSize = [math]::Round((Get-Item "$optimizedDir\$name.mp4").Length / 1MB, 2)
    Write-Host "  $origSize MB -> $newSize MB" -ForegroundColor Green
}

Write-Host ""
Write-Host "Done! Posters are in .\$posterDir, optimized videos are in .\$optimizedDir" -ForegroundColor Yellow