# Fix-SidebarAd2.ps1
# Uses [regex]::Replace with a count of 1 — works on all PowerShell versions.
# Handles three states:
#   1. Already complete (wrapper + sidebar) — skip
#   2. Half-patched (wrapper only, no sidebar) — insert sidebar after first </main>
#   3. Unpatched — full two-step patch
#
# Run from repo root:  .\Fix-SidebarAd2.ps1

$viewsPath = ".\views"
$pubId     = "ca-pub-5193834725888549"
$slotId    = "4041103773"

$sidebarBlock = @"

  <aside class="sidebar-ad-col" aria-label="Advertisement" aria-hidden="true">
    <div class="sidebar-ad-inner">
      <p class="sidebar-ad-label">Ad</p>
      <ins class="adsbygoogle"
           style="display:block;width:160px;min-height:600px"
           data-ad-client="$pubId"
           data-ad-slot="$slotId"
           data-ad-format="auto"
           data-full-width-responsive="false"></ins>
      <script>
        (function(){
          var ins=document.currentScript.previousElementSibling;
          var io=new IntersectionObserver(function(entries,observer){
            if(entries[0].isIntersecting){
              (adsbygoogle=window.adsbygoogle||[]).push({});
              observer.disconnect();
            }
          },{rootMargin:'200px'});
          io.observe(ins);
        })();
      </script>
    </div>
  </aside>
</div>
"@

# Escape $ signs in the replacement string so regex doesn't treat them as
# back-references (e.g. $0, $1).  This is required for [regex]::Replace.
$sidebarEscaped = $sidebarBlock.Replace('$', '$$')

$ejsFiles = Get-ChildItem -Path $viewsPath -Filter "*.ejs"
$fixed    = 0
$patched  = 0
$skipped  = 0

foreach ($file in $ejsFiles) {
    $raw = Get-Content -Path $file.FullName -Raw -Encoding UTF8

    $hasWrapper = $raw -match 'page-with-sidebar'
    $hasSidebar = $raw -match 'sidebar-ad-col'

    # Case 1: fully correct
    if ($hasWrapper -and $hasSidebar) {
        Write-Host "SKIP (complete): $($file.Name)"
        $skipped++
        continue
    }

    # Case 2: half-patched — add sidebar after first </main>
    if ($hasWrapper -and -not $hasSidebar) {
        $result = [regex]::Replace($raw, '</main>', "</main>$sidebarEscaped", 1)
        Set-Content -Path $file.FullName -Value $result -Encoding UTF8 -NoNewline
        Write-Host "FIXED: $($file.Name)"
        $fixed++
        continue
    }

    # Case 3: unpatched — wrap <main> then add sidebar after first </main>
    $mainMatch = [regex]::Match($raw, '<main(\s[^>]*)?>',
        [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)

    if (-not $mainMatch.Success) {
        Write-Host "SKIP (no main tag): $($file.Name)"
        $skipped++
        continue
    }

    $mainTag     = $mainMatch.Value
    $mainEscaped = [regex]::Escape($mainTag)
    $openWrapper = "<div class=`"page-with-sidebar`">`n  $mainTag"

    $step1 = [regex]::Replace($raw,   $mainEscaped,  $openWrapper,      1)
    $step2 = [regex]::Replace($step1, '</main>',      "</main>$sidebarEscaped", 1)

    Set-Content -Path $file.FullName -Value $step2 -Encoding UTF8 -NoNewline
    Write-Host "PATCHED: $($file.Name)"
    $patched++
}

Write-Host ""
Write-Host "Done.  Fixed: $fixed  |  Patched: $patched  |  Skipped: $skipped"
