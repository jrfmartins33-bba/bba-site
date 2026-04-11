import re
import os

paths = [
    r'c:\Users\jrfma\Documents\Documentos\BBA\BBA Site - Projeto\BBA-Projeto-Site\index.html',
    r'c:\Users\jrfma\Documents\Documentos\BBA\BBA Site - Projeto\BBA-Projeto-Site\Templates\design_system138.html'
]

for p in paths:
    if not os.path.exists(p): continue
    with open(p, 'r', encoding='windows-1252', errors='replace') as f:
        text = f.read()

    # Find the image tag and forcibly replace any media reference containing '02' and '7'
    # using a very loose regex: src="[^"]*02[^"]*7\.jpg"
    new_text = re.sub(r'src=\"[\.\/]*media\/[^"]*02[^"]*7\.jpg\"', r'src="../media/secao_02_7.jpg"', text)
    if 'index.html' in p:
        new_text = re.sub(r'src=\"[\.\/]*media\/[^"]*02[^"]*7\.jpg\"', r'src="media/secao_02_7.jpg"', text)

    with open(p, 'w', encoding='windows-1252', errors='replace') as f:
        f.write(new_text)
    print("Updated", p)
