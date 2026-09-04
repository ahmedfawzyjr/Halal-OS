# ☪ Halal OS - Dockerized ISO Build Runner (Windows PowerShell)
# Builds the Debian Live ISO within a privileged container and outputs to ./dist/

$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RootDir = (Get-Item "$ScriptDir\..").FullName
$ImageName = "halal-os-builder:v2.0"
$DistDir = "$RootDir\dist"

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "☪  Building Halal OS v2.0 Live ISO via Containerized Builder  ☪" -ForegroundColor Green
Write-Host "=================================================================" -ForegroundColor Cyan

# Check Docker availability
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    Write-Host "Error: Docker is not installed or not running in PATH." -ForegroundColor Red
    Write-Host "Please install or start Docker Desktop for Windows: https://www.docker.com" -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path $DistDir)) {
    New-Item -ItemType Directory -Path $DistDir | Out-Null
}

Write-Host "==> Building Docker builder image ($ImageName)..." -ForegroundColor Yellow
docker build -t $ImageName -f "$ScriptDir\Dockerfile.builder" "$RootDir"

Write-Host "==> Compiling Halal OS Live ISO inside privileged builder container..." -ForegroundColor Yellow
docker run --rm --privileged `
    -v "${DistDir}:/build/infrastructure/dist" `
    -v "${DistDir}:/dist" `
    $ImageName

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "✅ Build Complete! Check .\dist\ for halal-os-v2.0-amd64.iso" -ForegroundColor Green
Write-Host "=================================================================" -ForegroundColor Cyan
