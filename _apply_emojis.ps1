# Add decorative emojis to markdown headings across ALL courses.
# - No <style> block (keeps files clean on GitHub).
# - Idempotent: skips headings that already start with an emoji.
# - Never edits content inside fenced code blocks.

$ErrorActionPreference = 'Stop'
$root = 'e:\ISTQB'

# Ordered keyword -> emoji map (first match wins, case-insensitive).
$map = @(
  @('cheat sheet','📄'), @('week before','⏰'), @('cram','⏰'),
  @('case study','📂'), @('worked example','💡'), @('example','💡'),
  @('flashcard','🃏'), @('glossary','📖'), @('progress','📈'),
  @('coverage report','📋'), @('coverage','📊'), @('study plan','🗓️'),
  @('study','📚'), @('lesson','📘'), @('strategy','♟️'),
  @('mock exam','📝'), @('answer','✔️'), @('practice','❓'), @('question','❓'),
  @('exam trap','🪤'), @('trap','🪤'), @('exam','🎓'),
  @('principle','📜'), @('boundary','📏'), @('equivalence','➗'),
  @('decision table','🗂️'), @('decision','🗂️'), @('state transition','🔄'),
  @('state','🔄'), @('use case','👤'), @('technique','🎯'),
  @('test level','🪜'), @('level','🪜'), @('test type','🧪'), @('type','🧪'),
  @('static','🔍'), @('review','🔎'), @('analysis','🔬'), @('design','🎨'),
  @('risk','⚠️'), @('defect','🐞'), @('bug','🐞'), @('report','📝'),
  @('criteria','✅'), @('estimat','🔢'), @('configuration','⚙️'),
  @('tool','🛠️'), @('formula','🧮'), @('metric','📊'), @('plan','🗓️'),
  @('management','🗂️'), @('manage','🗂️'), @('objective','🎯'),
  @('learning','🎯'), @('overview','🌟'), @('introduction','🌟'),
  @('summary','📌'), @('tactic','🎓'), @('fundamental','🏗️'),
  @('sdlc','🔁'), @('lifecycle','🔁'), @('quality','💎'),
  @('requirement','📑'), @('traceability','🔗'), @('schedule','📅'),
  @('automation','⚙️'), @('automat','⚙️'), @('performance','⚡'),
  @('security','🔒'), @('mobile','📱'), @('agile','🏃'), @('model','📐'),
  @('api','🔌'), @('ai','🤖'), @('machine learning','🤖'), @('data','🗃️'),
  @('usability','🖱️'), @('game','🎮'), @('finance','💰'), @('gambling','🎰'),
  @('devops','🔧'), @('acceptance','🤝'), @('integration','🔗'),
  @('scenario','🎬'), @('checklist','📋'), @('tip','💡'), @('note','🗒️')
)

$processed = 0
$headingsTagged = 0

Get-ChildItem -Path $root -Recurse -File -Filter *.md |
  Where-Object { $_.DirectoryName -notlike '*\_site_template*' } |
  ForEach-Object {
    $f = $_.FullName
    $raw = Get-Content -LiteralPath $f -Raw -Encoding UTF8
    if ($null -eq $raw) { return }

    $lines = $raw -split "`r?`n"
    $out = New-Object System.Collections.Generic.List[string]
    $inFence = $false
    $changed = $false

    foreach ($line in $lines) {
      if ($line -match '^\s*(```|~~~)') {
        $inFence = -not $inFence
        $out.Add($line); continue
      }
      if ((-not $inFence) -and ($line -match '^(#{1,6})\s+(.*)$')) {
        $hashes = $matches[1]
        $text   = $matches[2]
        $trim   = $text.Trim()
        $first  = if ($trim.Length -gt 0) { [int][char]$trim[0] } else { 0 }
        if ($first -ge 32 -and $first -lt 128) {   # starts with normal ASCII (no emoji yet)
          $emoji = $null
          $low = $text.ToLower()
          foreach ($pair in $map) {
            if ($low -like "*$($pair[0])*") { $emoji = $pair[1]; break }
          }
          if (-not $emoji) {
            switch ($hashes.Length) {
              1 { $emoji = '🚀' }
              2 { $emoji = '⭐' }
              3 { $emoji = '🔷' }
              4 { $emoji = '🔸' }
              5 { $emoji = '✳️' }
              default { $emoji = '➕' }
            }
          }
          $line = "$hashes $emoji $text"
          $changed = $true
          $script:headingsTagged++
        }
      }
      $out.Add($line)
    }

    if ($changed) {
      Set-Content -LiteralPath $f -Value ($out -join "`r`n") -Encoding UTF8 -NoNewline
      $script:processed++
    }
  }

Write-Host ""
Write-Host ("Done. Files updated: {0}  Headings tagged: {1}" -f $processed, $headingsTagged)
