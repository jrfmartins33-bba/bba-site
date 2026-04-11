$filepath = "c:\Users\jrfma\Documents\Documentos\BBA\BBA Site\BBA Sites - Referencias\bcg.com\design-system.html"

$content = [System.IO.File]::ReadAllText($filepath)

$navHtml = @"
    <!-- anchor navigation -->
    <nav style="position: sticky; top: 0; background: var(--white); padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); display: flex; gap: 20px; z-index: 9999; margin-bottom: 50px; flex-wrap: wrap;">
      <a href="#ds-hero" class="Link" style="font-weight: bold; color: var(--green-600);">0. Hero</a>
      <a href="#ds-typography" class="Link" style="font-weight: bold; color: var(--green-600);">1. Typography</a>
      <a href="#ds-colors" class="Link" style="font-weight: bold; color: var(--green-600);">2. Colors</a>
      <a href="#ds-components" class="Link" style="font-weight: bold; color: var(--green-600);">3. Components</a>
      <a href="#ds-layout" class="Link" style="font-weight: bold; color: var(--green-600);">4. Layout</a>
      <a href="#ds-motion" class="Link" style="font-weight: bold; color: var(--green-600);">5. Motion</a>
    </nav>
"@

$sectionsHtml = @"
  <!-- SECTION 4: LAYOUT & SPACING -->
  <section id="ds-layout" style="margin-bottom: 80px;">
    <h2 class="h2" style="border-bottom: 2px solid var(--green-500); padding-bottom: 20px; margin-bottom: 40px;">4. Layout & Spacing</h2>
    <div style="background: var(--gray-200); padding: 40px;">
      <p style="margin-bottom: 20px;">The design system heavily utilizes CSS grids within container boundaries. Spacing is handled primarily by component-level padding (e.g., <strong>padding: clamp(2rem, 5vw, 4rem)</strong>) rather than utility spacing classes. The global maximum width is fluid but bounded by percentages and structural wraps.</p>
      
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 20px;">
        <div style="background: var(--white); border: 1px dashed var(--gray-500); padding: 40px; text-align: center; color: var(--gray-600);">1fr</div>
        <div style="background: var(--white); border: 1px dashed var(--gray-500); padding: 40px; text-align: center; color: var(--gray-600);">1fr</div>
        <div style="background: var(--white); border: 1px dashed var(--gray-500); padding: 40px; text-align: center; color: var(--gray-600);">1fr</div>
      </div>
      
      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px;">
        <div style="background: var(--white); border: 1px dashed var(--gray-500); padding: 40px; text-align: center; color: var(--gray-600);">2fr (Content)</div>
        <div style="background: var(--white); border: 1px dashed var(--gray-500); padding: 40px; text-align: center; color: var(--gray-600);">1fr (Sidebar/Promo)</div>
      </div>
    </div>
  </section>

  <!-- SECTION 5: MOTION & INTERACTION -->
  <section id="ds-motion" style="margin-bottom: 80px;">
    <h2 class="h2" style="border-bottom: 2px solid var(--green-500); padding-bottom: 20px; margin-bottom: 40px;">5. Motion & Interaction</h2>
    <div style="background: var(--white); padding: 40px; border: 1px solid var(--gray-300);">
      <h3 class="h4" style="margin-bottom: 20px;">Button Hovers & Focus States</h3>
      <p style="margin-bottom: 30px;">Hovering over primary buttons smoothly scales the background color and translates the child SVG arrows horizontally. All interactive elements use variables like <strong>--transition-duration</strong> mapped to standard easing functions.</p>
      
      <h3 class="h4" style="margin-bottom: 20px;">Promo Links</h3>
      <div style="max-width: 400px;">
        <div class="Promo-ctaLink">
          <a aria-label="Demo Interactive Link" class="primary-button" href="javascript:void(0);">Hover to Preview Motion <svg style="width: 16px; height: 16px; margin-left:8px;"><use xlink:href="#arrow-right"></use></svg></a>
        </div>
      </div>
    </div>
  </section>
"@

$content = $content.Replace("<!-- SECTION 0: HERO -->", $navHtml + "`n`n  <!-- SECTION 0: HERO -->")
$content = $content.Replace("<!-- DESIGN SYSTEM SHOWCASE ENDS HERE -->", $sectionsHtml + "`n</div>`n<!-- DESIGN SYSTEM SHOWCASE ENDS HERE -->")

[System.IO.File]::WriteAllText($filepath, $content)
Write-Host "Injected final sections."
