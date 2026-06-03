# Add-SidebarAd.ps1
# Wraps every EJS file's <main> block in a .page-with-sidebar flex container
# and appends a sticky sidebar ad column with lazy IntersectionObserver loading.
#
# Slot ID : 4041103773
# Publisher: ca-pub-5193834725888549
#
# Run from repo root:
#   .\Add-SidebarAd.ps1
#
# The script is idempotent — files already containing "page-with-sidebar"
# are skipped so re-running is safe.

$viewsPath = ".\views"
$slotId    = "4041103773"
$pubId     = "ca-pub-5193834725888549"

# Sidebar column HTML — inserted immediately after the opening <main...> tag.
# IntersectionObserver fires adsbygoogle.push only when the ins enters the
# viewport, which satisfies lazy-load best practice for off-screen ads.
$sidebarHtml = @"
<div class="page-with-sidebar">
MAIN_PLACEHOLDER
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

$ejsFiles = Get-ChildItem -Path $viewsPath -Filter "*.ejs"
$skipped  = 0
$updated  = 0

foreach ($file in $ejsFiles) {
    $raw = Get-Content -Path $file.FullName -Raw -Encoding UTF8

    # Skip if already patched
    if ($raw -match "page-with-sidebar") {
        Write-Host "SKIP (already patched): $($file.Name)"
        $skipped++
        continue
    }

    # Match the opening <main> tag (with optional class attribute)
    if ($raw -notmatch "<main(\s[^>]*)?>") {
        Write-Host "SKIP (no <main> found): $($file.Name)"
        $skipped++
        continue
    }

    # Capture the exact opening tag so we preserve any class attributes
    $mainTag = [regex]::Match($raw, "<main(\s[^>]*)?>").Value

    # Build the replacement: opening wrapper div, original main tag, then close
    # wrapper + sidebar after </main>
    $openWrapper  = "<div class=`"page-with-sidebar`">`n  $mainTag"
    $closeWrapper = "</main>`n`n  <aside class=`"sidebar-ad-col`" aria-label=`"Advertisement`" aria-hidden=`"true`">`n    <div class=`"sidebar-ad-inner`">`n      <p class=`"sidebar-ad-label`">Ad</p>`n      <ins class=`"adsbygoogle`"`n           style=`"display:block;width:160px;min-height:600px`"`n           data-ad-client=`"$pubId`"`n           data-ad-slot=`"$slotId`"`n           data-ad-format=`"auto`"`n           data-full-width-responsive=`"false`"></ins>`n      <script>`n        (function(){`n          var ins=document.currentScript.previousElementSibling;`n          var io=new IntersectionObserver(function(entries,observer){`n            if(entries[0].isIntersecting){`n              (adsbygoogle=window.adsbygoogle||[]).push({});`n              observer.disconnect();`n            }`n          },{rootMargin:'200px'});`n          io.observe(ins);`n        })();`n      </script>`n    </div>`n  </aside>`n</div>"

    # Step 1: wrap the opening <main> tag
    $patched = $raw -replace [regex]::Escape($mainTag), $openWrapper

    # Step 2: replace first </main> with closed main + sidebar + closing wrapper div
    $patched = $patched -replace "</main>", $closeWrapper, 1

    Set-Content -Path $file.FullName -Value $patched -Encoding UTF8 -NoNewline
    Write-Host "UPDATED: $($file.Name)"
    $updated++
}

Write-Host ""
Write-Host "Done. Updated: $updated  |  Skipped: $skipped"
