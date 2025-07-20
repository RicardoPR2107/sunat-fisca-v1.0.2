# Script de inicio automático para sunat-fisca-v1.0.2
# Este script verifica y gestiona las dependencias necesarias

# Función para verificar y mostrar mensaje de error
function Show-Error {
    param([string]$message)
    Write-Host "`nERROR: $message" -ForegroundColor Red
    exit 1
}

# Verificar si npm está instalado
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Show-Error "npm no está instalado. Por favor, instala Node.js primero."
}

# Verificar si AWS CLI está instalado
if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
    Write-Host "`nADVERTENCIA: AWS CLI no está instalado. Se recomienda instalarlo para funcionalidades completas." -ForegroundColor Yellow
}

# Función para instalar dependencias
function Install-Dependencies {
    param([string]$directory)
    Write-Host "`nInstalando dependencias en $directory..."
    Set-Location $directory
    npm install
    if ($LASTEXITCODE -ne 0) {
        Show-Error "Error al instalar dependencias en $directory"
    }
}

# Instalar dependencias del proyecto
Write-Host "`n=== Iniciando proceso de instalación ==="
Install-Dependencies "$(Get-Location)"
Install-Dependencies "$(Get-Location)\backend"

# Iniciar servicios
Write-Host "`n=== Iniciando servicios ==="

# Iniciar backend
Write-Host "`nIniciando backend..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; npm start"

# Esperar unos segundos para asegurar que el backend esté listo
Start-Sleep -Seconds 5

# Iniciar frontend
Write-Host "`nIniciando frontend..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm start"

Write-Host "`n=== Proceso completado ==="
Write-Host "Los servicios se están iniciando. Por favor, espera unos momentos."
Write-Host "El frontend se abrirá automáticamente en tu navegador."
Write-Host "`nPara detener los servicios, cierra las ventanas de PowerShell correspondientes."
