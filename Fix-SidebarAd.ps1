# Fix-SidebarAd.ps1
# Repairs files that got the opening wrapper div but missed the sidebar
# (due to the -replace operator not supporting a "replace first only" count),
# then patches any remaining unpatched files.
#
# Slot ID : 4041103773
# Publisher: ca-pub-5193834725888549
#
# Run from repo root:  .\Fix-SidebarAd.ps1
# Safe to re-run — already-correct files are skipped.

$viewsPath = ".\views"
$pubId     = "ca-pub-5193834725888549"
$slotId    = "4041103773"

$sidebarAside = @"

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

$ejsFiles  = Get-ChildItem -Path $viewsPath -Filter "*.ejs"
$fixed     = 0
$patched   = 0
$skipped   = 0

foreach ($file in $ejsFiles) {
    $raw = Get-Content -Path $file.FullName -Raw -Encoding UTF8

    $hasWrapper = $raw -match 'page-with-sidebar'
    $hasSidebar = $raw -match 'sidebar-ad-col'

    # Case 1: fully correct — wrapper AND sidebar both present
    if ($hasWrapper -and $hasSidebar) {
        Write-Host "SKIP (already complete): $($file.Name)"
        $skipped++
        continue
    }

    # Case 2: half-patched — wrapper present but sidebar missing
    # The broken first run added the opening div but the </main> replace failed.
    # Fix: insert the sidebar block immediately after the first </main>.
    if ($hasWrapper -and -not $hasSidebar) {
        # Use [string]::Replace which replaces only the first occurrence
        $fixed_content = [string]::new($raw).Replace("</main>", "</main>$sidebarAside", 1)
        Set-Content -Path $file.FullName -Value $fixed_content -Encoding UTF8 -NoNewline
        Write-Host "FIXED (added missing sidebar): $($file.Name)"
        $fixed++
        continue
    }

    # Case 3: completely unpatched — neither wrapper nor sidebar
    # Find the opening <main> tag (with or without class attribute)
    $mainMatch = [regex]::Match($raw, '<main(\s[^>]*)?>',
        [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)

    if (-not $mainMatch.Success) {
        Write-Host "SKIP (no <main> tag found): $($file.Name)"
        $skipped++
        continue
    }

    $mainTag     = $mainMatch.Value
    $openWrapper = "<div class=`"page-with-sidebar`">`n  $mainTag"

    # Step 1: wrap opening <main> — [string]::Replace for first-only
    $step1 = [string]::new($raw).Replace($mainTag, $openWrapper, 1)

    # Step 2: add sidebar after first </main> — [string]::Replace for first-only
    $step2 = [string]::new($step1).Replace("</main>", "</main>$sidebarAside", 1)

    Set-Content -Path $file.FullName -Value $step2 -Encoding UTF8 -NoNewline
    Write-Host "PATCHED (fresh): $($file.Name)"
    $patched++
}

Write-Host ""
Write-Host "Done.  Fixed: $fixed  |  Freshly patched: $patched  |  Skipped: $skipped"
