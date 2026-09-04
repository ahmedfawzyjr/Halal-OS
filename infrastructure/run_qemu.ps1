# ☪ Halal OS - Sovereign Live ISO QEMU Virtualization Runner (Windows PowerShell)
# Boots the compiled Halal OS Live ISO in an accelerated virtual machine.

param (
    [string]$IsoPath = "",
    [string]$Ram = "4096",
    [string]$Cores = "4",
    [switch]$NoAccel = $false
)

$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RootDir = (Get-Item "$ScriptDir\..").FullName
if (-not $IsoPath) {
    $IsoPath = "$RootDir\dist\halal-os-v2.0-amd64.iso"
}
$DiskPath = "$RootDir\dist\halal-os-testdisk.qcow2"
$DiskSize = "20G"

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "☪  Launching Halal OS v2.0 in QEMU Virtualization Sandbox  ☪" -ForegroundColor Green
Write-Host "=================================================================" -ForegroundColor Cyan

# Locate QEMU Binary on Windows
$QemuCmd = Get-Command "qemu-system-x86_64.exe" -ErrorAction SilentlyContinue
$QemuImgCmd = Get-Command "qemu-img.exe" -ErrorAction SilentlyContinue

if (-not $QemuCmd) {
    # Check standard install directories
    $SearchPaths = @(
        "C:\Program Files\qemu\qemu-system-x86_64.exe",
        "C:\ProgramData\chocolatey\bin\qemu-system-x86_64.exe",
        "$env:USERPROFILE\scoop\shims\qemu-system-x86_64.exe",
        "C:\msys64\mingw64\bin\qemu-system-x86_64.exe"
    )
    foreach ($path in $SearchPaths) {
        if (Test-Path $path) {
            $QemuCmd = $path
            $QemuImgCmd = Join-Path (Split-Path $path) "qemu-img.exe"
            break
        }
    }
}

if (-not $QemuCmd) {
    Write-Host "Error: QEMU binary (qemu-system-x86_64.exe) not found." -ForegroundColor Red
    Write-Host "To install QEMU on Windows:" -ForegroundColor Yellow
    Write-Host "  winget install SoftwareFreedomConservancy.QEMU" -ForegroundColor White
    Write-Host "  OR: choco install qemu" -ForegroundColor White
    Write-Host "  OR download from: https://www.qemu.org/download/#windows" -ForegroundColor White
    exit 1
}

# Ensure dist directory exists
$DistDir = Split-Path -Parent $IsoPath
if (-not (Test-Path $DistDir)) {
    New-Item -ItemType Directory -Path $DistDir | Out-Null
}

# Determine Acceleration Flags
$AccelArgs = @("-cpu", "qemu64")
if (-not $NoAccel) {
    # Test WHPX (Windows Hypervisor Platform)
    Write-Host "==> Hardware Acceleration: Checking WHPX / Hyper-V..." -ForegroundColor Yellow
    $AccelArgs = @("-accel", "whpx", "-cpu", "host")
}

# Create test virtual hard drive if not present
if (-not (Test-Path $DiskPath) -and $QemuImgCmd) {
    Write-Host "==> Creating virtual test disk ($DiskPath, $DiskSize)..." -ForegroundColor Yellow
    & $QemuImgCmd create -f qcow2 $DiskPath $DiskSize
}

Write-Host "==> Starting QEMU VM (RAM: ${Ram}MB, Cores: $Cores)..." -ForegroundColor Green
Write-Host "    Press Ctrl+Alt+G to release mouse cursor." -ForegroundColor Gray

$Arguments = @(
    $AccelArgs,
    "-m", $Ram,
    "-smp", $Cores,
    "-cdrom", $IsoPath,
    "-drive", "file=$DiskPath,format=qcow2,if=virtio",
    "-boot", "d",
    "-vga", "virtio",
    "-display", "default",
    "-device", "virtio-net-pci,netdev=net0",
    "-netdev", "user,id=net0,hostfwd=tcp::3000-:3000,hostfwd=tcp::8080-:8080,hostfwd=tcp::8082-:8082,hostfwd=tcp::8088-:8088",
    "-audiodev", "dsound,id=snd0",
    "-device", "intel-hda",
    "-device", "hda-duplex,audiodev=snd0",
    "-usb",
    "-device", "usb-tablet"
) | ForEach-Object { $_ }

& $QemuCmd $Arguments
