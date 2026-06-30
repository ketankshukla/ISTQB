# _make_reference.ps1 — Creates a professional pandoc reference.docx with custom styles.
param([switch]$Force)
$ErrorActionPreference = "Stop"
$outDir = "e:\ISTQB\ctfl-course\word-docs"
$refDoc = Join-Path $outDir "ctfl-reference.docx"
$tempDir = Join-Path $outDir "_temp_ref"
New-Item -ItemType Directory -Force $outDir | Out-Null

if ((Test-Path $refDoc) -and -not $Force) { Write-Host "Reference doc already exists. Use -Force to rebuild."; exit }

# Find pandoc
$pandoc = (Get-Command pandoc -ErrorAction SilentlyContinue)?.Source
if (-not $pandoc) {
  $candidates = @("$env:LOCALAPPDATA\Pandoc\pandoc.exe","$env:ProgramFiles\Pandoc\pandoc.exe","${env:ProgramFiles(x86)}\Pandoc\pandoc.exe") | Where-Object { Test-Path $_ }
  if ($candidates.Count -gt 0) { $pandoc = $candidates[0] }
}
if (-not $pandoc) { throw "pandoc.exe not found." }

# Generate default reference doc & extract
& $pandoc -o "$refDoc" --print-default-data-file reference.docx
Remove-Item $tempDir -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force $tempDir | Out-Null
Add-Type -AssemblyName System.IO.Compression.FileSystem
[IO.Compression.ZipFile]::ExtractToDirectory($refDoc, $tempDir)

# Load styles.xml with namespace manager
[xml]$styles = Get-Content (Join-Path $tempDir "word\styles.xml") -Raw
$nsUri = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
$nsmgr = New-Object System.Xml.XmlNamespaceManager($styles.NameTable)
$nsmgr.AddNamespace("w", $nsUri)

function ns($tag) { return "w:$tag" }
function attr($el, $name, $val) { $el.SetAttribute($name, $nsUri, $val); return $el }
function add($parent, $tag) { $c = $styles.CreateElement((ns $tag), $nsUri); [void]$parent.AppendChild($c); return $c }
function clear($node) { while ($node.HasChildNodes) { [void]$node.RemoveChild($node.FirstChild) } }
function style($id) {
  $s = $styles.SelectSingleNode("/w:styles/w:style[@w:styleId='$id']", $nsmgr)
  if (-not $s) {
    $s = $styles.CreateElement((ns "style"), $nsUri)
    attr $s "type" "paragraph"
    attr $s "styleId" $id
    $n = add $s "name"; attr $n "val" $id
    [void]$styles.DocumentElement.AppendChild($s)
  }
  return $s
}
function sChild($s, $tag) {
  $c = $s.SelectSingleNode((ns $tag), $nsmgr)
  if (-not $c) { $c = add $s $tag }
  clear $c; return $c
}

# Color palette
$NAVY = "1A237E"; $BODY = "212121"; $BD = "3949AB"; $CODE = "F5F5F5"; $QB = "3949AB"

# --- Normal ---
$s = style "Normal"; $p = sChild $s "pPr"
attr (add $p "spacing") "line" "276"; attr $p.LastChild "lineRule" "auto"; attr $p.LastChild "after" "120"
$r = sChild $s "rPr"
attr (add $r "rFonts") "ascii" "Calibri"; attr $r.LastChild "hAnsi" "Calibri"; attr $r.LastChild "eastAsia" "Calibri"
attr (add $r "sz") "val" "24"; attr (add $r "szCs") "val" "24"; attr (add $r "color") "val" $BODY

# --- Heading 1 ---
$s = style "Heading1"; $p = sChild $s "pPr"
add $p "keepNext" | Out-Null; add $p "keepLines" | Out-Null
attr (add $p "spacing") "before" "480"; attr $p.LastChild "after" "240"
attr (add $p "jc") "val" "left"
$bdr = add $p "pBdr"; attr (add $bdr "bottom") "val" "single"; attr $bdr.LastChild "sz" "12"; attr $bdr.LastChild "space" "4"; attr $bdr.LastChild "color" $BD
attr (add $p "outlineLvl") "val" "0"
$r = sChild $s "rPr"
attr (add $r "rFonts") "ascii" "Cambria"; attr $r.LastChild "hAnsi" "Cambria"
add $r "b" | Out-Null; attr (add $r "color") "val" $NAVY
attr (add $r "sz") "val" "52"; attr (add $r "szCs") "val" "52"

# --- Heading 2 ---
$s = style "Heading2"; $p = sChild $s "pPr"
add $p "keepNext" | Out-Null; add $p "keepLines" | Out-Null
attr (add $p "spacing") "before" "360"; attr $p.LastChild "after" "160"
attr (add $p "outlineLvl") "val" "1"
$r = sChild $s "rPr"
attr (add $r "rFonts") "ascii" "Cambria"; attr $r.LastChild "hAnsi" "Cambria"
add $r "b" | Out-Null; attr (add $r "color") "val" $NAVY
attr (add $r "sz") "val" "40"; attr (add $r "szCs") "val" "40"

# --- Heading 3 ---
$s = style "Heading3"; $p = sChild $s "pPr"
add $p "keepNext" | Out-Null; add $p "keepLines" | Out-Null
attr (add $p "spacing") "before" "280"; attr $p.LastChild "after" "120"
attr (add $p "outlineLvl") "val" "2"
$r = sChild $s "rPr"
attr (add $r "rFonts") "ascii" "Cambria"; attr $r.LastChild "hAnsi" "Cambria"
add $r "b" | Out-Null; attr (add $r "color") "val" $NAVY
attr (add $r "sz") "val" "32"; attr (add $r "szCs") "val" "32"

# --- Heading 4 ---
$s = style "Heading4"; $p = sChild $s "pPr"
add $p "keepNext" | Out-Null; add $p "keepLines" | Out-Null
attr (add $p "spacing") "before" "240"; attr $p.LastChild "after" "80"
attr (add $p "outlineLvl") "val" "3"
$r = sChild $s "rPr"
attr (add $r "rFonts") "ascii" "Cambria"; attr $r.LastChild "hAnsi" "Cambria"
add $r "b" | Out-Null; attr (add $r "color") "val" $NAVY
attr (add $r "sz") "val" "28"; attr (add $r "szCs") "val" "28"

# --- Block Text / Quote ---
$s = style "BlockText"; $p = sChild $s "pPr"
attr (add $p "ind") "left" "720"; attr $p.LastChild "right" "720"
attr (add $p "spacing") "before" "120"; attr $p.LastChild "after" "120"
$bdr = add $p "pBdr"; attr (add $bdr "left") "val" "single"; attr $bdr.LastChild "sz" "24"; attr $bdr.LastChild "space" "8"; attr $bdr.LastChild "color" $QB
$r = sChild $s "rPr"; add $r "i" | Out-Null; attr (add $r "color") "val" "424242"

# --- Verbatim Char ---
$s = style "VerbatimChar"; $r = sChild $s "rPr"
attr (add $r "rFonts") "ascii" "Consolas"; attr $r.LastChild "hAnsi" "Consolas"
attr (add $r "sz") "val" "20"; attr (add $r "szCs") "val" "20"
attr (add $r "color") "val" "37474F"

# --- Code paragraph ---
$s = style "Code"; $p = sChild $s "pPr"
attr (add $p "spacing") "before" "120"; attr $p.LastChild "after" "120"
attr (add $p "shd") "val" "clear"; attr $p.LastChild "color" "auto"; attr $p.LastChild "fill" $CODE
$bdr = add $p "pBdr"
foreach ($side in @("top","left","bottom","right")) { attr (add $bdr $side) "val" "single"; attr $bdr.LastChild "sz" "4"; attr $bdr.LastChild "space" "2"; attr $bdr.LastChild "color" "BDBDBD" }

# --- Table ---
$s = style "TableNormal"; $t = sChild $s "tblPr"
$bdr = add $t "tblBorders"
foreach ($side in @("top","left","bottom","right","insideH","insideV")) { attr (add $bdr $side) "val" "single"; attr $bdr.LastChild "sz" "4"; attr $bdr.LastChild "space" "0"; attr $bdr.LastChild "color" "BDBDBD" }

# --- Table Header ---
$s = style "TableHeader"; $r = sChild $s "rPr"
add $r "b" | Out-Null; attr (add $r "color") "val" $NAVY

# Save styles.xml
$styles.Save((Join-Path $tempDir "word\styles.xml"))

# Re-zip
Remove-Item $refDoc -ErrorAction SilentlyContinue
$zip = [IO.Compression.ZipFile]::Open($refDoc, [IO.Compression.ZipArchiveMode]::Create)
function zipAdd($zip, $src, $ent) {
  if (Test-Path $src -PathType Container) {
    Get-ChildItem $src | ForEach-Object { zipAdd $zip $_.FullName (if ($ent) { "$ent/$($_.Name)" } else { $_.Name }) }
  } else {
    $bytes = [IO.File]::ReadAllBytes($src)
    $e = $zip.CreateEntry($ent)
    $s = $e.Open(); $s.Write($bytes, 0, $bytes.Length); $s.Close()
  }
}
zipAdd $zip $tempDir ""
$zip.Dispose()
Remove-Item $tempDir -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "Created: $refDoc"
