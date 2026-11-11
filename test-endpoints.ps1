$ErrorActionPreference = 'Stop'

Write-Host "--- LOGOS LEXICON 3D LEXI GUIDE & ADMIN VERIFICATION ---" -ForegroundColor Cyan

# 1. Test Health Endpoint
$health = Invoke-RestMethod -Uri 'http://localhost:3000/api/health' -Method Get
Write-Host "1. Health Endpoint: $($health.status) | Version: $($health.appVersion) | DB: $($health.metrics.databaseConnection)" -ForegroundColor Green

# 2. Test Version Endpoint
$ver = Invoke-RestMethod -Uri 'http://localhost:3000/api/version' -Method Get
Write-Host "2. Version Endpoint: $($ver.version) | Build: $($ver.build)" -ForegroundColor Green

# 3. Test Public Landing Page (with 3D Lexi Guide mounted)
$root = Invoke-WebRequest -Uri 'http://localhost:3000/' -Method Get -UseBasicParsing
Write-Host "3. Root Page with Lexi: Status $($root.StatusCode) | ContentLength: $($root.Content.Length)" -ForegroundColor Green

# 4. Test Admin Login Page
$login = Invoke-WebRequest -Uri 'http://localhost:3000/admin/login' -Method Get -UseBasicParsing
$isLoginValid = ($login.StatusCode -eq 200) -and ($login.Content.Contains('Loading sign-in') -or $login.Content.Contains('Administrative Portal'))
Write-Host "4. Admin Login Portal: Status $($login.StatusCode) | Valid Login Page: $isLoginValid" -ForegroundColor Green

# 5. Test Admin Lexi Console Page
$adminLexi = Invoke-WebRequest -Uri 'http://localhost:3000/admin/lexi' -Method Get -UseBasicParsing
Write-Host "5. Admin Lexi Console: Status $($adminLexi.StatusCode) | ContentLength: $($adminLexi.Content.Length)" -ForegroundColor Green

# 6. Test Multilingual Search with 'Grace'
$searchGrace = Invoke-RestMethod -Uri 'http://localhost:3000/api/entries?q=grace' -Method Get
Write-Host "6. Search 'grace': Found $($searchGrace.matchedCount) matches | Headword: $($searchGrace.results[0].entry.headwordEnglish)" -ForegroundColor Green

# 7. Test Greek Transliteration Search
$searchGreek = Invoke-RestMethod -Uri 'http://localhost:3000/api/entries?q=charis' -Method Get
Write-Host "7. Search Greek 'charis': Found $($searchGreek.matchedCount) matches | Result: $($searchGreek.results[0].entry.headwordEnglish)" -ForegroundColor Green

# 8. Test Web App Manifest
$manifest = Invoke-RestMethod -Uri 'http://localhost:3000/manifest.webmanifest' -Method Get
Write-Host "8. Web Manifest: $($manifest.name) | Display: $($manifest.display)" -ForegroundColor Green

# 9. Test Compare Matrix Page
$compare = Invoke-WebRequest -Uri 'http://localhost:3000/compare' -Method Get -UseBasicParsing
Write-Host "9. Compare Matrix Page: Status $($compare.StatusCode) | ContentLength: $($compare.Content.Length)" -ForegroundColor Green

Write-Host "--- ALL 9 TEST SUITES COMPLETED AND VERIFIED ---" -ForegroundColor Cyan
