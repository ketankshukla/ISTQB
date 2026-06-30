# _convert_all.ps1
# Converts every .md in ctfl-course to a .docx in ctfl-course-word-docs,
# mirroring the exact folder structure. One docx per markdown file.

$ErrorActionPreference = "Stop"

$srcRoot   = "e:\ISTQB\ctfl-course"
$outRoot   = "e:\ISTQB\ctfl-course-word-docs"
$refDoc    = "e:\ISTQB\ctfl-course\word-docs\ctfl-reference.docx"
$filter    = "e:\ISTQB\ctfl-course\word-docs\filters\ctfl.lua"

# --- Find pandoc ---
$pandoc = (Get-Command pandoc -ErrorAction SilentlyContinue)?.Source
if (-not $pandoc) {
  $candidates = @("$env:LOCALAPPDATA\Pandoc\pandoc.exe","$env:ProgramFiles\Pandoc\pandoc.exe","${env:ProgramFiles(x86)}\Pandoc\pandoc.exe") | Where-Object { Test-Path $_ }
  if ($candidates.Count -gt 0) { $pandoc = $candidates[0] }
}
if (-not $pandoc) { throw "pandoc.exe not found. Install: winget install JohnMacFarlane.Pandoc" }
Write-Host "Using pandoc: $pandoc"

# Clean and recreate output root (but keep this script!)
if (Test-Path $outRoot) {
  Get-ChildItem $outRoot | Where-Object { $_.Name -ne "_convert_all.ps1" } | Remove-Item -Recurse -Force
}
New-Item -ItemType Directory -Force $outRoot | Out-Null

# --- Mirror folders ---
$mdFiles = Get-ChildItem -Path $srcRoot -Recurse -File -Filter "*.md"
Write-Host "Found $($mdFiles.Count) markdown files to convert."

# Create directories first
$mdFiles | ForEach-Object {
  $relDir = $_.DirectoryName.Substring($srcRoot.Length).TrimStart('\','/')
  if ($relDir) {
    $targetDir = Join-Path $outRoot $relDir
    New-Item -ItemType Directory -Force $targetDir | Out-Null
  }
}

# --- Convert each .md to .docx ---
$converted = 0
foreach ($f in $mdFiles) {
  $relDir  = $f.DirectoryName.Substring($srcRoot.Length).TrimStart('\','/')
  $outDir  = if ($relDir) { Join-Path $outRoot $relDir } else { $outRoot }
  $outFile = Join-Path $outDir ($f.BaseName + ".docx")

  $pandocArgs = @($f.FullName, '--from=markdown', '--to=docx')
  if (Test-Path $refDoc) { $pandocArgs += "--reference-doc=$refDoc" }
  $pandocArgs += '--lua-filter', $filter
  $pandocArgs += '-o', $outFile

  & $pandoc @pandocArgs
  if ($LASTEXITCODE -ne 0) { Write-Warning "Failed: $($f.Name)"; continue }

  $converted++
  Write-Host "  $($f.FullName.Substring($srcRoot.Length+1))  ->  $($outFile.Substring($outRoot.Length+1))"
}

Write-Host "`nDone. Converted $converted of $($mdFiles.Count) markdown files."
