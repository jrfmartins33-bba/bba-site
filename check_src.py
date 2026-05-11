import re

with open(r'c:\Users\jrfma\Documents\Documentos\BBA\BBA Site - Projeto\BBA-Projeto-Site\Templates\design_system138.html', 'r', encoding='windows-1252', errors='ignore') as f:
    text = f.read()

for match in re.finditer(r'src=[\'"](.*?)[\'"]', text):
    path = match.group(1)
    if 'media' in path or 'Materia' in path or path.endswith('.mp4') or path.endswith('.jpg'):
        print(path)
