# _make_ctfl_docx.ps1
# Converts all CTFL markdown files into gorgeous, professional Word documents.
# Usage: cd e:\ISTQB\ctfl-course\word-docs && .\_make_ctfl_docx.ps1
#
# Output:
#   CTFL_Complete_Course.docx        — everything combined with TOC
#   CTFL_Chapter_01.docx .. 06.docx  — per-chapter docs
#   CTFL_Case_Studies.docx           — all case studies
#   CTFL_Mock_Exams.docx             — all mock exams
#   CTFL_Reference_*.docx            — individual reference docs
#
# Requires: pandoc 3.x (tested with 3.8.3)
# Optional: run _make_reference.ps1 first for custom styles.

$ErrorActionPreference = "Stop"

$courseDir  = "e:\ISTQB\ctfl-course"
$outDir     = Join-Path $courseDir "word-docs"
$refDoc     = Join-Path $outDir "ctfl-reference.docx"
$filterPath = Join-Path $outDir "filters\ctfl.lua"
$utf8NoBom  = New-Object System.Text.UTF8Encoding($false)

New-Item -ItemType Directory -Force $outDir | Out-Null
New-Item -ItemType Directory -Force (Join-Path $outDir "filters") | Out-Null

# --- Find pandoc ---
$pandoc = $null
$pandocCmd = Get-Command pandoc -ErrorAction SilentlyContinue
if ($pandocCmd) { $pandoc = $pandocCmd.Source }
else {
  $candidates = @(
    Join-Path $env:LOCALAPPDATA "Pandoc\pandoc.exe"
    Join-Path $env:ProgramFiles "Pandoc\pandoc.exe"
    Join-Path ${env:ProgramFiles(x86)} "Pandoc\pandoc.exe"
  ) | Where-Object { Test-Path $_ }
  if ($candidates.Count -gt 0) { $pandoc = $candidates[0] }
  else {
    $winGetRoot = Join-Path $env:LOCALAPPDATA "Microsoft\WinGet\Packages"
    if (Test-Path $winGetRoot) {
      $found = Get-ChildItem -Path $winGetRoot -Recurse -Filter "pandoc.exe" -ErrorAction SilentlyContinue | Select-Object -First 1
      if ($found) { $pandoc = $found.FullName }
    }
  }
}
if (-not $pandoc) { throw "pandoc.exe not found. Install it: winget install JohnMacFarlane.Pandoc" }
Write-Host "Found pandoc: $pandoc"

# --- Check reference doc ---
$refArg = if (Test-Path $refDoc) { "--reference-doc=$refDoc" } else { "" }
if ($refArg) { Write-Host "Using reference doc: $refDoc" }

# --- Helpers ---
function Read-Md($path) {
  [System.IO.File]::ReadAllText($path, $utf8NoBom).Trim()
}

function Strip-LeadingH1([string]$text) {
  # Remove the first H1 line so we can replace it with our own heading
  $text = [regex]::Replace($text, '^\s*#\s+[^\r\n]*(\r?\n){0,2}', '', [System.Text.RegularExpressions.RegexOptions]::Multiline)
  return $text.Trim()
}

function Strip-Emoji([string]$text) {
  # Remove 4-byte UTF-8 sequences (most emojis)
  $bytes = [System.Text.Encoding]::UTF8.GetBytes($text)
  $result = New-Object System.Collections.Generic.List[byte]
  $i = 0
  while ($i -lt $bytes.Count) {
    $b = $bytes[$i]
    if ($b -ge 0xF0) {
      # 4-byte UTF-8 = emoji
      $i += 4
    } elseif ($b -eq 0xE2 -and ($i + 2) -lt $bytes.Count) {
      $b2 = $bytes[$i + 1]
      $b3 = $bytes[$i + 2]
      $isEmoji = $false
      # U+2600–U+27BF and U+1F300+ prefixes
      if ($b2 -eq 0x98 -and $b3 -ge 0x80 -and $b3 -le 0xBF) { $isEmoji = $true }
      elseif ($b2 -eq 0x99 -and $b3 -ge 0x80 -and $b3 -le 0xAD) { $isEmoji = $true }
      elseif ($b2 -eq 0x9C -and $b3 -ge 0x80 -and $b3 -le 0xBF) { $isEmoji = $true }
      elseif ($b2 -eq 0x9D -and $b3 -ge 0x80 -and $b3 -le 0xBF) { $isEmoji = $true }
      elseif ($b2 -eq 0x9E -and $b3 -ge 0x80 -and $b3 -le 0xBF) { $isEmoji = $true }
      elseif ($b2 -eq 0x9F -and $b3 -ge 0x80 -and $b3 -le 0xBF) { $isEmoji = $true }
      elseif ($b2 -eq 0x9A -and $b3 -ge 0x80 -and $b3 -le 0xBD) { $isEmoji = $true }
      elseif ($b2 -eq 0x9B -and $b3 -ge 0x80 -and $b3 -le 0xBF) { $isEmoji = $true }
      if ($isEmoji) { $i += 3 } else { $result.Add($b); $i++ }
    } else {
      $result.Add($b)
      $i++
    }
  }
  return [System.Text.Encoding]::UTF8.GetString($result.ToArray())
}

function Add-Section($sb, $heading, $content, [switch]$first) {
  $safe = $heading -replace '&','&amp;' -replace '<','&lt;' -replace '>','&gt;'
  if ($first) {
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine("# $safe")
  } else {
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine('``````{=openxml}')
    [void]$sb.AppendLine("<w:p><w:pPr><w:pStyle w:val=`"Heading1`"/><w:pageBreakBefore/></w:pPr><w:r><w:t>$safe</w:t></w:r></w:p>")
    [void]$sb.AppendLine('``````')
  }
  [void]$sb.AppendLine("")
  [void]$sb.AppendLine($content)
  [void]$sb.AppendLine("")
}

function Convert-ToDocx($mdFile, $outFile, $extraArgs) {
  $args = @($mdFile, '--from=markdown+raw_attribute', '--to=docx')
  if ($refArg) { $args += $refArg }
  $args += '--lua-filter', $filterPath
  $args += '-o', $outFile
  if ($extraArgs) { $args += $extraArgs }
  & $pandoc @args
  if ($LASTEXITCODE -ne 0) { throw "pandoc failed for $outFile" }
  Write-Host "  Created: $outFile"
}

# ============================================
# 1. COMPLETE COURSE (single combined docx)
# ============================================
Write-Host "`n=== Building CTFL_Complete_Course.docx ==="

$combinedMd = Join-Path $outDir "_temp_combined.md"
$combinedDoc = Join-Path $outDir "CTFL_Complete_Course.docx"
Remove-Item $combinedMd -ErrorAction SilentlyContinue
Remove-Item $combinedDoc -ErrorAction SilentlyContinue

$sb = New-Object System.Text.StringBuilder

# --- Front Matter ---
$first = $true
$frontFiles = @(
  @{ file = "README.md"; heading = "ISTQB CTFL v4.0 — Complete Self-Study Course" },
  @{ file = "STUDY_PLAN.md"; heading = "Study Plan" },
  @{ file = "EXAM_STRATEGY.md"; heading = "Exam Strategy" },
  @{ file = "PROGRESS_TRACKER.md"; heading = "Progress Tracker" },
  @{ file = "COVERAGE_REPORT.md"; heading = "Coverage Report" }
)
foreach ($item in $frontFiles) {
  $path = Join-Path $courseDir $item.file
  if (Test-Path $path) {
    $content = Read-Md $path
    $content = Strip-LeadingH1 $content
    Add-Section $sb $item.heading $content -first:$first
    $first = $false
  }
}

# --- Chapters 1-6 ---
$chapters = @(
  @{ num = 1; folder = "01_fundamentals_of_testing"; title = "Fundamentals of Testing" },
  @{ num = 2; folder = "02_testing_throughout_sdlc"; title = "Testing Throughout the Software Development Lifecycle" },
  @{ num = 3; folder = "03_static_testing"; title = "Static Testing" },
  @{ num = 4; folder = "04_test_analysis_and_design"; title = "Test Analysis and Design" },
  @{ num = 5; folder = "05_managing_test_activities"; title = "Managing Test Activities" },
  @{ num = 6; folder = "06_test_tools"; title = "Test Tools" }
)

foreach ($ch in $chapters) {
  $chDir = Join-Path $courseDir $ch.folder
  if (-not (Test-Path $chDir)) { continue }

  Add-Section $sb "Chapter $($ch.num) — $($ch.title)" "" -first:$first
  $first = $false

  # Sub-sections within chapter
  $subFiles = @(
    @{ path = (Join-Path $chDir "README.md"); heading = "Chapter Overview" },
    @{ path = (Join-Path $chDir "lessons.md"); heading = "Lessons" },
    @{ path = (Join-Path $chDir "exam_traps.md"); heading = "Exam Traps" },
    @{ path = (Join-Path $chDir "practice_questions.md"); heading = "Practice Questions" },
    @{ path = (Join-Path $chDir "worked_examples.md"); heading = "Worked Examples" }
  )
  foreach ($sub in $subFiles) {
    if (Test-Path $sub.path) {
      $content = Read-Md $sub.path
      $content = Strip-LeadingH1 $content
      # Use H2 for sub-sections (##) since chapter title is H1
      [void]$sb.AppendLine("")
      [void]$sb.AppendLine("## $($sub.heading)")
      [void]$sb.AppendLine("")
      [void]$sb.AppendLine($content)
      [void]$sb.AppendLine("")
    }
  }
}

# --- Case Studies ---
$csDir = Join-Path $courseDir "case_studies"
if (Test-Path $csDir) {
  Add-Section $sb "Case Studies" "" -first:$first
  $first = $false
  $csFiles = Get-ChildItem -Path $csDir -File -Filter "*.md" | Sort-Object Name
  foreach ($f in $csFiles) {
    $content = Read-Md $f.FullName
    $content = Strip-LeadingH1 $content
    $name = ($f.BaseName -replace '^case_study_\d+_', '' -replace '_', ' ')
    $name = (Get-Culture).TextInfo.ToTitleCase($name.ToLower())
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine("## Case Study: $name")
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine($content)
    [void]$sb.AppendLine("")
  }
}

# --- Mock Exams ---
$meDir = Join-Path $courseDir "mock_exams"
if (Test-Path $meDir) {
  Add-Section $sb "Mock Exams" "" -first:$first
  $first = $false
  $meFiles = Get-ChildItem -Path $meDir -File -Filter "*.md" | Sort-Object Name
  foreach ($f in $meFiles) {
    $content = Read-Md $f.FullName
    $content = Strip-LeadingH1 $content
    $base = $f.BaseName -replace '_', ' '
    $heading = if ($base -match 'answer') { "Answer Key: $base" } else { $base }
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine("## $heading")
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine($content)
    [void]$sb.AppendLine("")
  }
}

# --- Reference / Back Matter ---
$backFiles = @(
  @{ file = "CTFL_Exam_Cheat_Sheet.md"; heading = "Exam Cheat Sheet" },
  @{ file = "CTFL_Flashcards.md"; heading = "Flashcards" },
  @{ file = "CTFL_Week_Before_Cram.md"; heading = "Week-Before Cram Guide" },
  @{ file = "GLOSSARY.md"; heading = "Glossary" }
)
foreach ($item in $backFiles) {
  $path = Join-Path $courseDir $item.file
  if (Test-Path $path) {
    $content = Read-Md $path
    $content = Strip-LeadingH1 $content
    Add-Section $sb $item.heading $content -first:$first
    $first = $false
  }
}

[System.IO.File]::WriteAllText($combinedMd, $sb.ToString(), $utf8NoBom)
Convert-ToDocx $combinedMd $combinedDoc @('--toc', '--toc-depth=3')
Remove-Item $combinedMd -ErrorAction SilentlyContinue

# ============================================
# 2. PER-CHAPTER DOCXs
# ============================================
Write-Host "`n=== Building per-chapter DOCXs ==="

foreach ($ch in $chapters) {
  $chDir = Join-Path $courseDir $ch.folder
  if (-not (Test-Path $chDir)) { continue }

  $chMd   = Join-Path $outDir "_temp_ch$($ch.num).md"
  $chDocx = Join-Path $outDir "CTFL_Chapter_0$($ch.num).docx"
  Remove-Item $chMd -ErrorAction SilentlyContinue
  Remove-Item $chDocx -ErrorAction SilentlyContinue

  $chSb = New-Object System.Text.StringBuilder

  # Build heading from first file's H1 or use chapter title
  $readmePath = Join-Path $chDir "README.md"
  $chapterTitle = $ch.title
  if (Test-Path $readmePath) {
    $readmeContent = Read-Md $readmePath
    $h1Match = [regex]::Match($readmeContent, '^#\s+(.+)$', [System.Text.RegularExpressions.RegexOptions]::Multiline)
    if ($h1Match.Success) {
      $chapterTitle = $h1Match.Groups[1].Value -replace '^[^\x00-\x7F]+\s*', ''
    }
  }

  [void]$chSb.AppendLine("")
  [void]$chSb.AppendLine("# $chapterTitle")
  [void]$chSb.AppendLine("")

  $subFiles = @(
    @{ path = (Join-Path $chDir "README.md"); heading = "Chapter Overview" },
    @{ path = (Join-Path $chDir "lessons.md"); heading = "Lessons" },
    @{ path = (Join-Path $chDir "exam_traps.md"); heading = "Exam Traps" },
    @{ path = (Join-Path $chDir "practice_questions.md"); heading = "Practice Questions" },
    @{ path = (Join-Path $chDir "worked_examples.md"); heading = "Worked Examples" }
  )
  foreach ($sub in $subFiles) {
    if (Test-Path $sub.path) {
      $content = Read-Md $sub.path
      $content = Strip-LeadingH1 $content
      [void]$chSb.AppendLine("")
      [void]$chSb.AppendLine("## $($sub.heading)")
      [void]$chSb.AppendLine("")
      [void]$chSb.AppendLine($content)
      [void]$chSb.AppendLine("")
    }
  }

  [System.IO.File]::WriteAllText($chMd, $chSb.ToString(), $utf8NoBom)
  Convert-ToDocx $chMd $chDocx @('--toc', '--toc-depth=2')
  Remove-Item $chMd -ErrorAction SilentlyContinue
}

# ============================================
# 3. CASE STUDIES combined
# ============================================
Write-Host "`n=== Building CTFL_Case_Studies.docx ==="
$csMd   = Join-Path $outDir "_temp_cs.md"
$csDocx = Join-Path $outDir "CTFL_Case_Studies.docx"
Remove-Item $csMd -ErrorAction SilentlyContinue
Remove-Item $csDocx -ErrorAction SilentlyContinue

$csSb = New-Object System.Text.StringBuilder
[void]$csSb.AppendLine("")
[void]$csSb.AppendLine("# Case Studies")
[void]$csSb.AppendLine("")

$csFiles = Get-ChildItem -Path $csDir -File -Filter "*.md" | Sort-Object Name
foreach ($f in $csFiles) {
  $content = Read-Md $f.FullName
  $content = Strip-LeadingH1 $content
  $name = ($f.BaseName -replace '^case_study_\d+_', '' -replace '_', ' ')
  $name = (Get-Culture).TextInfo.ToTitleCase($name.ToLower())
  [void]$csSb.AppendLine("")
  [void]$csSb.AppendLine("## Case Study: $name")
  [void]$csSb.AppendLine("")
  [void]$csSb.AppendLine($content)
  [void]$csSb.AppendLine("")
}

[System.IO.File]::WriteAllText($csMd, $csSb.ToString(), $utf8NoBom)
Convert-ToDocx $csMd $csDocx @('--toc', '--toc-depth=2')
Remove-Item $csMd -ErrorAction SilentlyContinue

# ============================================
# 4. MOCK EXAMS combined
# ============================================
Write-Host "`n=== Building CTFL_Mock_Exams.docx ==="
$meMd   = Join-Path $outDir "_temp_me.md"
$meDocx = Join-Path $outDir "CTFL_Mock_Exams.docx"
Remove-Item $meMd -ErrorAction SilentlyContinue
Remove-Item $meDocx -ErrorAction SilentlyContinue

$meSb = New-Object System.Text.StringBuilder
[void]$meSb.AppendLine("")
[void]$meSb.AppendLine("# Mock Exams")
[void]$meSb.AppendLine("")

$meFiles = Get-ChildItem -Path $meDir -File -Filter "*.md" | Sort-Object Name
foreach ($f in $meFiles) {
  $content = Read-Md $f.FullName
  $content = Strip-LeadingH1 $content
  $base = $f.BaseName -replace '_', ' '
  $heading = if ($base -match 'answer') { "Answer Key: $base" } else { $base }
  [void]$meSb.AppendLine("")
  [void]$meSb.AppendLine("## $heading")
  [void]$meSb.AppendLine("")
  [void]$meSb.AppendLine($content)
  [void]$meSb.AppendLine("")
}

[System.IO.File]::WriteAllText($meMd, $meSb.ToString(), $utf8NoBom)
Convert-ToDocx $meMd $meDocx @('--toc', '--toc-depth=2')
Remove-Item $meMd -ErrorAction SilentlyContinue

# ============================================
# 5. INDIVIDUAL REFERENCE DOCXs
# ============================================
Write-Host "`n=== Building individual reference DOCXs ==="
$refFiles = @(
  @{ file = "STUDY_PLAN.md"; title = "Study Plan" },
  @{ file = "EXAM_STRATEGY.md"; title = "Exam Strategy" },
  @{ file = "GLOSSARY.md"; title = "Glossary" },
  @{ file = "PROGRESS_TRACKER.md"; title = "Progress Tracker" },
  @{ file = "COVERAGE_REPORT.md"; title = "Coverage Report" },
  @{ file = "CTFL_Exam_Cheat_Sheet.md"; title = "Exam Cheat Sheet" },
  @{ file = "CTFL_Flashcards.md"; title = "Flashcards" },
  @{ file = "CTFL_Week_Before_Cram.md"; title = "Week-Before Cram" }
)
foreach ($r in $refFiles) {
  $src = Join-Path $courseDir $r.file
  if (-not (Test-Path $src)) { continue }
  $out = Join-Path $outDir ("CTFL_Reference_{0}.docx" -f ($r.title -replace '\s', '_'))
  Remove-Item $out -ErrorAction SilentlyContinue

  $content = Read-Md $src
  $content = Strip-LeadingH1 $content
  $tmp = Join-Path $outDir ("_temp_ref_{0}.md" -f ($r.title -replace '\s', '_'))
  [System.IO.File]::WriteAllText($tmp, "# $($r.title)`n`n$content", $utf8NoBom)
  Convert-ToDocx $tmp $out @()
  Remove-Item $tmp -ErrorAction SilentlyContinue
}

Write-Host "`n=== ALL DONE ==="
Write-Host "Output folder: $outDir"
Get-ChildItem -Path $outDir -File -Filter "*.docx" | Select-Object Name, @{N='SizeMB';E={[math]::Round($_.Length/1MB,2)}} | Format-Table -AutoSize
