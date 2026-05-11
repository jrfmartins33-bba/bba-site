import re

files = [
    r'c:\Users\jrfma\Documents\Documentos\BBA\BBA Site - Projeto\BBA-Projeto-Site\index.html',
    r'c:\Users\jrfma\Documents\Documentos\BBA\BBA Site - Projeto\BBA-Projeto-Site\Templates\design_system138.html',
    r'c:\Users\jrfma\Documents\Documentos\BBA\BBA Site - Projeto\BBA-Projeto-Site\assets\design_system138.html'
]

for p in files:
    try:
        with open(p, 'r', encoding='windows-1252', errors='ignore') as f:
            text = f.read()
        new_text = re.sub(r'src=\"\.\.?\/media\/[S\ufffde?\w]*02.*?7\.jpg\"', r'src="../media/secao_02_7.jpg"', text)
        if 'index.html' in p:
             new_text = re.sub(r'src=\"\.\.?\/media\/[S\ufffde?\w]*02.*?7\.jpg\"', r'src="media/secao_02_7.jpg"', text)
             
        with open(p, 'w', encoding='windows-1252', errors='replace') as f:
            f.write(new_text)
        print("Updated", p)
    except Exception as e:
        print("Error on", p, e)
