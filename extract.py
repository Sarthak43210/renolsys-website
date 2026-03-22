import re
import os

html_file = r'c:\Users\PC\Desktop\AI Website\index.html'

with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract styles
style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
styles = style_match.group(1) if style_match else ''

# Extract JS
script_match = re.search(r'<script>(.*?)</script>', content, re.DOTALL)
scripts = script_match.group(1) if script_match else ''

# Cleaned HTML without styles/scripts contents
new_html = re.sub(r'<style>.*?</style>', 
    '<link rel="stylesheet" href="css/main.css">\n'
    '    <link rel="stylesheet" href="css/hero.css">\n'
    '    <link rel="stylesheet" href="css/services.css">\n'
    '    <link rel="stylesheet" href="css/process.css">\n'
    '    <link rel="stylesheet" href="css/industries.css">\n'
    '    <link rel="stylesheet" href="css/results.css">\n'
    '    <link rel="stylesheet" href="css/why.css">', 
    content, flags=re.DOTALL)

new_html = re.sub(r'<script>(.*?)</script>',
    '<script src="js/particles.js"></script>\n'
    '    <script src="js/animations.js"></script>\n'
    '    <script src="js/counters.js"></script>',
    new_html, flags=re.DOTALL)

# CSS categories
# We'll use simple text splitting/regex to chunk out the CSS.
css_main = []
css_hero = []
css_services = []
css_process = []
css_industries = []
css_results = []
css_why = []

# JS categories
js_particles = []
js_animations = []
js_counters = []

with open(r'c:\Users\PC\Desktop\AI Website\styles_dump.css', 'w', encoding='utf-8') as f:
    f.write(styles)

with open(r'c:\Users\PC\Desktop\AI Website\scripts_dump.js', 'w', encoding='utf-8') as f:
    f.write(scripts)

with open(r'c:\Users\PC\Desktop\AI Website\new_index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("Dumped extracted content. Ready for review.")
