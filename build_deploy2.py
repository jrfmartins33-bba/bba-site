import os
import re

base_dir = r"c:\Users\jrfma\Documents\Documentos\BBA\BBA Site - Projeto\BBA-Projeto-Site"
input_html_path = os.path.join(base_dir, "Templates", "design_system138.html")
output_html_path = os.path.join(base_dir, "index.html")
assets_css_dir = os.path.join(base_dir, "assets", "css")
assets_js_dir = os.path.join(base_dir, "assets", "js")

os.makedirs(assets_css_dir, exist_ok=True)
os.makedirs(assets_js_dir, exist_ok=True)

with open(input_html_path, "r", encoding="windows-1252", errors="replace") as f:
    content = f.read()

# 1. Update Media Paths
content = content.replace("../Materia Prima/", "./media/")

# 2. Extract CSS
style_matches = list(re.finditer(r'<style>([\s\S]*?)</style>', content, re.IGNORECASE))
main_css = ""
for match in style_matches:
    main_css += match.group(1) + "\n"

# Update CSS image paths (from ./media/ to ../../media/)
main_css = main_css.replace('./media/', '../../media/')

# Remove all <style> blocks
content = re.sub(r'<style>[\s\S]*?</style>', '', content, flags=re.IGNORECASE)

# Insert the <link> tag
content = re.sub(r'</head>', r'    <link rel="stylesheet" href="./assets/css/style.css">' + '\n</head>', content, flags=re.IGNORECASE)

# 3. Extract JS
script_matches = list(re.finditer(r'<script.*?>([\s\S]*?)</script>', content, re.IGNORECASE))
main_js = ""
for match in script_matches:
    inner = match.group(1).strip()
    if inner:
        main_js += inner + "\n\n"

def replacer(m):
    if "src=" in m.group(0):
        return m.group(0)
    else:
        return ""

content = re.sub(r'<script.*?>[\s\S]*?</script>', replacer, content, flags=re.IGNORECASE)

# Insert <script src>
content = re.sub(r'</body>', r'    <script src="./assets/js/main.js" defer></script>' + '\n</body>', content, flags=re.IGNORECASE)

with open(os.path.join(assets_css_dir, "style.css"), "w", encoding="utf-8") as f:
    f.write(main_css.strip())

with open(os.path.join(assets_js_dir, "main.js"), "w", encoding="utf-8") as f:
    f.write(main_js.strip())

with open(output_html_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Success")
