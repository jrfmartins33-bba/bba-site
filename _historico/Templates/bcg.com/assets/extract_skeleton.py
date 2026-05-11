import re
import os

base_dir = r"c:\Users\jrfma\Documents\Documentos\BBA\BBA Site\BBA Sites - Referencias\bcg.com"
filepath = os.path.join(base_dir, 'index.html')
outpath = os.path.join(base_dir, 'design-system.html')

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

main_start = re.search(r'<main[^>]*>', content)
main_end = re.search(r'</main>', content)

if not main_start or not main_end:
    print("Could not find <main> or </main> tags")
    header_end = re.search(r'</header>', content)
    footer_start = re.search(r'<footer', content)
    if header_end and footer_start:
        head_part = content[:header_end.end()]
        foot_part = content[footer_start.start():]
    else:
        print("Failed to find boundaries.")
        exit(1)
else:
    head_part = content[:main_start.end()]
    foot_part = content[main_end.start():]

design_content = (
    head_part +
    '\n\n<!-- DESIGN SYSTEM SHOWCASE STARTS HERE -->\n' +
    '<div class="design-system-showcase ds-container" style="padding: 100px 5%; background: var(--gray-200); color: var(--black);">\n' +
    '  <h1 class="h1">Design System & Pattern Library</h1>\n' +
    '  <p class="h4" style="margin-bottom: 50px;">A living showcase of typography, colors, components, and layout patterns extracted from the reference site.</p>\n' +
    '  \n  <!-- SECTION 0: HERO -->\n' +
    '  <section id="ds-hero" style="margin-bottom: 80px;">\n' +
    '    <h2 class="h2" style="border-bottom: 2px solid var(--green-500); padding-bottom: 20px; margin-bottom: 40px;">0. Hero Banner Structure</h2>\n' +
    '    <!-- Hero component will go here -->\n' +
    '  </section>\n\n' +
    '  <!-- SECTION 1: TYPOGRAPHY -->\n' +
    '  <section id="ds-typography" style="margin-bottom: 80px;">\n' +
    '    <h2 class="h2" style="border-bottom: 2px solid var(--green-500); padding-bottom: 20px; margin-bottom: 40px;">1. Typography</h2>\n' +
    '    <div class="ds-typo-grid">\n' +
    '       <!-- Typography elements will go here -->\n' +
    '    </div>\n' +
    '  </section>\n\n' +
    '  <!-- SECTION 2: COLORS -->\n' +
    '  <section id="ds-colors" style="margin-bottom: 80px;">\n' +
    '    <h2 class="h2" style="border-bottom: 2px solid var(--green-500); padding-bottom: 20px; margin-bottom: 40px;">2. Colors & Surfaces</h2>\n' +
    '    <!-- Color swatches will go here -->\n' +
    '  </section>\n\n' +
    '  <!-- SECTION 3: UI COMPONENTS -->\n' +
    '  <section id="ds-components" style="margin-bottom: 80px;">\n' +
    '    <h2 class="h2" style="border-bottom: 2px solid var(--green-500); padding-bottom: 20px; margin-bottom: 40px;">3. UI Components</h2>\n' +
    '    <!-- Buttons, links, inputs -->\n' +
    '  </section>\n\n' +
    '</div>\n' +
    '<!-- DESIGN SYSTEM SHOWCASE ENDS HERE -->\n\n' +
    foot_part
)

with open(outpath, 'w', encoding='utf-8') as f:
    f.write(design_content)

print(f"Successfully generated {outpath}!")
