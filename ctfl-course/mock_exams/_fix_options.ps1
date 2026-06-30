# _fix_options.ps1
# Adds blank lines between multiple-choice options (A/B/C/D) 
# so they render vertically instead of inline.

$ErrorActionPreference = "Stop"
$srcDir = "e:\ISTQB\ctfl-course\mock_exams"

$files = Get-ChildItem -Path $srcDir -File -Filter "mock_exam_*.md" | Sort-Object Name

foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    
    # Add blank line after A., B., C. option lines when not already followed by one
    # Pattern: line starts with A./B./C. followed by space+text, then newline, 
    #          and next line is NOT blank
    $fixed = [regex]::Replace($content, '(?m)^([A-C]\. .+)(\r?\n)(?!\r?\n)', '$1$2$2')
    
    # Only write if changed
    if ($fixed -ne $content) {
        [System.IO.File]::WriteAllText($f.FullName, $fixed, (New-Object System.Text.UTF8Encoding($false)))
        Write-Host "Fixed: $($f.Name)"
    } else {
        Write-Host "No changes: $($f.Name)"
    }
}

Write-Host "Done."
