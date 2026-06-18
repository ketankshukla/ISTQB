# Generate per-course study sites + master course registry.
# - Scans each *-course folder, writes manifest.json
# - Copies the shared site template (index.html + assets) into each course
# - Builds courses.json for the master hub at the repo root

$ErrorActionPreference = 'Stop'
$root = 'e:\ISTQB'
$tpl  = Join-Path $root '_site_template'

$acronyms = @{ 'sdlc'='SDLC'; 'atm'='ATM'; 'api'='API'; 'ai'='AI'; 'ml'='ML'; 'ci'='CI'; 'cd'='CD'; 'bdd'='BDD'; 'tdd'='TDD'; 'ui'='UI'; 'ux'='UX'; 'qa'='QA'; 'devops'='DevOps'; 'ecommerce'='E-commerce' }
function Prettify($name) {
  $words = ($name -replace '[_-]', ' ') -split '\s+' | Where-Object { $_ }
  ($words | ForEach-Object {
    $lw = $_.ToLower()
    if ($acronyms.ContainsKey($lw)) { $acronyms[$lw] }
    else { $_.Substring(0,1).ToUpper() + $_.Substring(1) }
  }) -join ' '
}

$emojiMap = @(
  @('cheat','📄'), @('flashcard','🃏'), @('cram','⏰'), @('glossary','📖'),
  @('progress','📈'), @('coverage','📋'), @('strategy','♟️'), @('study','🗓️'),
  @('course overview','🌟'), @('overview','🌟'), @('lesson','📘'), @('worked','💡'),
  @('trap','🪤'), @('practice','❓'), @('question','❓'), @('answer','✔️'),
  @('mock','📝'), @('case','📂')
)
function Get-Emoji($title) {
  $l = $title.ToLower()
  foreach ($p in $emojiMap) { if ($l -like "*$($p[0])*") { return $p[1] } }
  return '📄'
}

$secEmoji = @(
  @('fundamental','🏗️'), @('sdlc','🔁'), @('lifecycle','🔁'), @('static','🔍'),
  @('analysis','🎯'), @('design','🎯'), @('manag','🗂️'), @('tool','🛠️'),
  @('automation','⚙️'), @('process','🔄'), @('technique','🎯'), @('quality','💎'),
  @('review','🔎'), @('introduction','🌟'), @('ai','🤖'), @('ml','🤖'),
  @('machine','🤖'), @('performance','⚡'), @('security','🔒'), @('mobile','📱'),
  @('agile','🏃'), @('model','📐'), @('risk','⚠️'), @('test','🧪')
)
function Get-SectionEmoji($name) {
  $l = $name.ToLower()
  foreach ($p in $secEmoji) { if ($l -like "*$($p[0])*") { return $p[1] } }
  return '📚'
}

function Get-Title($fileName, $isRoot) {
  $base = [IO.Path]::GetFileNameWithoutExtension($fileName)
  $low  = $base.ToLower()
  if ($low -eq 'readme')            { return $(if ($isRoot) { 'Course Overview' } else { 'Overview' }) }
  if ($low -eq 'study_plan')        { return 'Study Plan' }
  if ($low -eq 'progress_tracker')  { return 'Progress Tracker' }
  if ($low -eq 'exam_strategy')     { return 'Exam Strategy' }
  if ($low -eq 'coverage_report')   { return 'Coverage Report' }
  if ($low -eq 'glossary')          { return 'Glossary' }
  if ($low -like '*cheat*')         { return 'Exam Cheat Sheet' }
  if ($low -like '*flashcard*')     { return 'Flashcards' }
  if ($low -like '*cram*')          { return 'Week-Before Cram' }
  if ($low -match '^case_study_(\d+)_(.*)$') { return "Case $($matches[1]) - " + (Prettify $matches[2]) }
  if ($low -match '^mock_exam_(\d+)') {
    $n = $matches[1]
    if ($low -like '*answer*') { return "Mock Exam $n - Answer Key" } else { return "Mock Exam $n" }
  }
  if ($low -eq 'lessons')             { return 'Lessons' }
  if ($low -eq 'exam_traps')          { return 'Exam Traps' }
  if ($low -eq 'practice_questions')  { return 'Practice Questions' }
  if ($low -eq 'worked_examples')     { return 'Worked Examples' }
  return (Prettify $base)
}

function Make-Item($fileName, $relPath, $isRoot) {
  $t = Get-Title $fileName $isRoot
  $e = Get-Emoji $t
  [PSCustomObject]@{ title = "$e $t"; path = $relPath }
}

function Get-CourseTitle($courseDir, $folderName) {
  $readme = Join-Path $courseDir 'README.md'
  if (Test-Path $readme) {
    $raw = Get-Content -Raw -Encoding UTF8 $readme
    $raw = $raw -replace '(?s)^\uFEFF?\s*<!-- ISTQB-BEAUTIFY-V1 -->.*?</style>\s*', ''
    foreach ($line in ($raw -split "`r?`n")) {
      if ($line -match '^#\s+(.+)$') {
        $t = $matches[1].Trim()
        $t = $t -replace '^[^\x00-\x7F]+\s*', ''   # strip leading emoji
        if ($t) { return $t.Trim() }
      }
    }
  }
  return (Prettify ($folderName -replace '-course$', ''))
}

$chapterOrder = @('readme','lessons','worked_examples','exam_traps','practice_questions')
function Chapter-Rank($fileName) {
  $low = [IO.Path]::GetFileNameWithoutExtension($fileName).ToLower()
  $i = $chapterOrder.IndexOf($low)
  if ($i -lt 0) { 99 } else { $i }
}

$courses = New-Object System.Collections.Generic.List[object]
$courseDirs = Get-ChildItem -Directory $root | Where-Object { $_.Name -like '*-course' } | Sort-Object Name

foreach ($cd in $courseDirs) {
  $courseDir = $cd.FullName
  $folder    = $cd.Name
  $groups    = New-Object System.Collections.Generic.List[object]

  # ----- Root-level files -----
  $rootFiles = Get-ChildItem -File -Filter *.md $courseDir | Sort-Object Name
  $startNames = @('readme','study_plan','progress_tracker','exam_strategy','coverage_report')
  $start = New-Object System.Collections.Generic.List[object]
  $ref   = New-Object System.Collections.Generic.List[object]
  foreach ($n in $startNames) {
    $f = $rootFiles | Where-Object { [IO.Path]::GetFileNameWithoutExtension($_.Name).ToLower() -eq $n } | Select-Object -First 1
    if ($f) { $start.Add((Make-Item $f.Name $f.Name $true)) }
  }
  foreach ($f in $rootFiles) {
    $low = [IO.Path]::GetFileNameWithoutExtension($f.Name).ToLower()
    if ($startNames -contains $low) { continue }
    $ref.Add((Make-Item $f.Name $f.Name $true))
  }
  if ($start.Count) { $groups.Add([PSCustomObject]@{ section = '🏁 Start Here'; items = $start }) }
  if ($ref.Count)   { $groups.Add([PSCustomObject]@{ section = '🎓 Reference'; items = $ref }) }

  # ----- Subfolders (chapters, case studies, mock exams) -----
  $subdirs = Get-ChildItem -Directory $courseDir | Where-Object { $_.Name -ne 'assets' } | Sort-Object Name
  foreach ($sd in $subdirs) {
    $name = $sd.Name
    $files = Get-ChildItem -File -Filter *.md $sd.FullName
    if (-not $files) { continue }
    $items = New-Object System.Collections.Generic.List[object]

    if ($name -eq 'case_studies') {
      foreach ($f in ($files | Sort-Object Name)) { $items.Add((Make-Item $f.Name "$name/$($f.Name)" $false)) }
      $groups.Add([PSCustomObject]@{ section = '📂 Case Studies'; items = $items })
    }
    elseif ($name -eq 'mock_exams') {
      $sortedMock = $files | Sort-Object `
        @{ Expression = { if ($_.Name -match '(\d+)') { [int]$matches[1] } else { 0 } } }, `
        @{ Expression = { if ($_.BaseName.ToLower() -like '*answer*') { 1 } else { 0 } } }, `
        Name
      foreach ($f in $sortedMock) { $items.Add((Make-Item $f.Name "$name/$($f.Name)" $false)) }
      $groups.Add([PSCustomObject]@{ section = '📝 Mock Exams'; items = $items })
    }
    else {
      $sorted = $files | Sort-Object @{ Expression = { Chapter-Rank $_.Name } }, Name
      foreach ($f in $sorted) { $items.Add((Make-Item $f.Name "$name/$($f.Name)" $false)) }
      $sectionTitle = if ($name -match '^(\d+)[_-](.*)$') {
        "$(Get-SectionEmoji $matches[2]) Ch.$([int]$matches[1]) - $(Prettify $matches[2])"
      } else { "$(Get-SectionEmoji $name) $(Prettify $name)" }
      $groups.Add([PSCustomObject]@{ section = $sectionTitle; items = $items })
    }
  }

  $courseTitle = Get-CourseTitle $courseDir $folder
  $manifest = [PSCustomObject]@{ course = $courseTitle; folder = $folder; groups = $groups }
  $manifestJson = $manifest | ConvertTo-Json -Depth 8
  Set-Content -LiteralPath (Join-Path $courseDir 'manifest.json') -Value $manifestJson -Encoding UTF8

  # ----- Copy shared site files -----
  Copy-Item (Join-Path $tpl 'index.html') (Join-Path $courseDir 'index.html') -Force
  New-Item -ItemType Directory -Force (Join-Path $courseDir 'assets') | Out-Null
  Copy-Item (Join-Path $tpl 'assets\*') (Join-Path $courseDir 'assets\') -Force

  # ----- Registry entry -----
  $code = ($folder -replace '-course$', '').ToUpper()
  $level = if ($folder -eq 'ctfl-course') { 'Foundation Level (Core)' }
           elseif ($folder -like 'ctfl-*') { 'Foundation Level — Extensions' }
           elseif ($folder -like 'ctal-*') { 'Advanced Level' }
           else { 'Specialist Modules' }
  $courses.Add([PSCustomObject]@{ code = $code; folder = $folder; title = $courseTitle; level = $level })

  Write-Host ("OK  {0,-20} {1} groups  ::  {2}" -f $folder, $groups.Count, $courseTitle)
}

# ----- Master registry -----
$sorted = $courses | Sort-Object title
$registry = [PSCustomObject]@{ courses = $sorted }
Set-Content -LiteralPath (Join-Path $root 'courses.json') -Value ($registry | ConvertTo-Json -Depth 6) -Encoding UTF8

Write-Host ""
Write-Host ("Done. {0} courses processed. courses.json written." -f $courses.Count)
