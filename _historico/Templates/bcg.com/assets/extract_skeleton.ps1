$baseDir = "c:\Users\jrfma\Documents\Documentos\BBA\BBA Site\BBA Sites - Referencias\bcg.com"
$filepath = Join-Path $baseDir "index.html"
$outpath = Join-Path $baseDir "design-system.html"

$content = [System.IO.File]::ReadAllText($filepath)

$headerEnd = $content.IndexOf("</header>")
$footerStart = $content.IndexOf("<footer")

if ($headerEnd -lt 0 -or $footerStart -lt 0) {
    Write-Host "Could not find </header> or <footer"
    exit 1
}

# The header string includes the </header>
$headPart = $content.Substring(0, $headerEnd + "</header>".Length)
$footPart = $content.Substring($footerStart)

$designContent = $headPart + `
    "`n`n<!-- DESIGN SYSTEM SHOWCASE STARTS HERE -->`n" + `
    "<div class=""design-system-showcase ds-container"" style=""padding: 100px 5%; background: var(--gray-200); color: var(--black);"">`n" + `
    "  <h1 class=""h1"">Design System & Pattern Library</h1>`n" + `
    "  <p class=""h4"" style=""margin-bottom: 50px;"">A living showcase of typography, colors, components, and layout patterns extracted from the reference site.</p>`n" + `
    "  `n  <!-- SECTION 0: HERO -->`n" + `
    "  <section id=""ds-hero"" style=""margin-bottom: 80px;"">`n" + `
    "    <h2 class=""h2"" style=""border-bottom: 2px solid var(--green-500); padding-bottom: 20px; margin-bottom: 40px;"">0. Hero Banner Structure</h2>`n" + `
    "    <!-- Hero component will go here -->`n" + `
    "  </section>`n`n" + `
    "  <!-- SECTION 1: TYPOGRAPHY -->`n" + `
    "  <section id=""ds-typography"" style=""margin-bottom: 80px;"">`n" + `
    "    <h2 class=""h2"" style=""border-bottom: 2px solid var(--green-500); padding-bottom: 20px; margin-bottom: 40px;"">1. Typography</h2>`n" + `
    "    <div class=""ds-typo-grid"">`n" + `
    "       <!-- Typography elements will go here -->`n" + `
    "    </div>`n" + `
    "  </section>`n`n" + `
    "  <!-- SECTION 2: COLORS -->`n" + `
    "  <section id=""ds-colors"" style=""margin-bottom: 80px;"">`n" + `
    "    <h2 class=""h2"" style=""border-bottom: 2px solid var(--green-500); padding-bottom: 20px; margin-bottom: 40px;"">2. Colors & Surfaces</h2>`n" + `
    "    <!-- Color swatches will go here -->`n" + `
    "  </section>`n`n" + `
    "  <!-- SECTION 3: UI COMPONENTS -->`n" + `
    "  <section id=""ds-components"" style=""margin-bottom: 80px;"">`n" + `
    "    <h2 class=""h2"" style=""border-bottom: 2px solid var(--green-500); padding-bottom: 20px; margin-bottom: 40px;"">3. UI Components</h2>`n" + `
    "    <!-- Buttons, links, inputs -->`n" + `
    "  </section>`n`n" + `
    "</div>`n" + `
    "<!-- DESIGN SYSTEM SHOWCASE ENDS HERE -->`n`n" + `
    $footPart

[System.IO.File]::WriteAllText($outpath, $designContent)

Write-Host "Successfully generated $outpath!"
