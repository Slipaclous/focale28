# Script pour supprimer les images non utilisees
# Images utilisees sur le site
$usedImages = @(
    "hero.jpg",
    "Mariage - Alain Heymans focale 2.8 - 001.jpg",
    "Event - Alain Heymans focale 2.8 -30.jpg",
    "Portrait - Alain Heymans focale 2.8 -1.jpg",
    "Nightlife - Alain Heymans focale 2.8 -221.jpg",
    "Concert - Alain Heymans focale 2.8 -10.jpg",
    "Famille - Alain Heymans focale 2.8 -12.jpg"
)

$imagesDir = "public\images"
$deletedCount = 0
$keptCount = 0

Write-Host "Nettoyage des images non utilisees..." -ForegroundColor Cyan
Write-Host ""

# Recuperer toutes les images dans le dossier
$allImages = Get-ChildItem -Path $imagesDir -Filter "*.jpg" -File

foreach ($image in $allImages) {
    $imageName = $image.Name
    
    if ($usedImages -contains $imageName) {
        Write-Host "Conserve: $imageName" -ForegroundColor Green
        $keptCount++
    } else {
        Write-Host "Suppression: $imageName" -ForegroundColor Yellow
        Remove-Item -Path $image.FullName -Force
        $deletedCount++
    }
}

Write-Host ""
Write-Host "Resume:" -ForegroundColor Cyan
Write-Host "   Images conservees: $keptCount" -ForegroundColor Green
Write-Host "   Images supprimees: $deletedCount" -ForegroundColor Yellow
Write-Host ""
Write-Host "Nettoyage termine!" -ForegroundColor Green
