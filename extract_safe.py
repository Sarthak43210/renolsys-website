import os
import re

base_dir = r"c:\Users\PC\Desktop\AI Website"
html_path = os.path.join(base_dir, "index.html")

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

styles_match = re.search(r'    <style>\n(.*?)\n    </style>', content, re.DOTALL)
if not styles_match:
    print("Could not find <style> block.")
    exit(1)
styles = styles_match.group(1)

scripts_match = re.search(r'    <script>\n(.*?)\n    </script>', content, re.DOTALL)
if not scripts_match:
    print("Could not find <script> block.")
    exit(1)
scripts = scripts_match.group(1)

css_dir = os.path.join(base_dir, "css")
js_dir = os.path.join(base_dir, "js")
os.makedirs(css_dir, exist_ok=True)
os.makedirs(js_dir, exist_ok=True)

def extract_section(text, start_comment, end_comment=None):
    if end_comment:
        pattern = re.escape(start_comment) + r"(.*?)(?=" + re.escape(end_comment) + r")"
    else:
        pattern = re.escape(start_comment) + r"(.*)"
    match = re.search(pattern, text, re.DOTALL)
    if match:
        return start_comment + match.group(1)
    return ""

def pop_section(text, section_text):
    if not section_text: return text
    return text.replace(section_text, "")

s = styles

# hero.css
hero_str1 = extract_section(s, "        .hero {", "        /* Stats Bar */")
s = pop_section(s, hero_str1)

hero_str2 = extract_section(s, "        /* Stats Bar */", "        /* Cards Shared */")
s = pop_section(s, hero_str2)

hero_css = hero_str1 + hero_str2

# process.css
process_css = extract_section(s, "        /* Process Section */", "        /* Case Studies */")
s = pop_section(s, process_css)

# results.css
results_css = extract_section(s, "        /* Case Studies */", "        /* Why Us Section */")
s = pop_section(s, results_css)

case_hover = extract_section(s, "        .case-card {\n            transition", "        .why-col .icon-box {\n")
s = pop_section(s, case_hover)
results_css += "\n" + case_hover

# why.css
why_css = extract_section(s, "        /* Why Us Section */", "        /* Footer */")
s = pop_section(s, why_css)

why_hover = extract_section(s, "        .why-col .icon-box {\n            transition", "        /* Service Card Specific Styles */")
s = pop_section(s, why_hover)
why_css += "\n" + why_hover

# services.css
services_css = extract_section(s, "        /* Service Card Specific Styles */", "        /* Industry Grid Styles */")
s = pop_section(s, services_css)

# industries.css
match_ind = re.search(r'        /\* Industry Grid Styles \*/(.*)', s, re.DOTALL)
if match_ind:
    industries_css = "        /* Industry Grid Styles */" + match_ind.group(1)
    s = s.replace(industries_css, "")
else:
    industries_css = ""

# The rest is main.css
main_css = s

# JS splitting
js_str = scripts

animations_str = extract_section(js_str, "        // GSAP Animations", "        // 4. Smooth Number Counters (Stats Bar)")
js_str = pop_section(js_str, animations_str)

counters_str = extract_section(js_str, "        // 4. Smooth Number Counters (Stats Bar)", "        // 5. Initialize ParticlesJS")
js_str = pop_section(js_str, counters_str)

particles_str = re.search(r'        // 5\. Initialize ParticlesJS(.*)', js_str, re.DOTALL)
if particles_str:
    particles_js = "        // 5. Initialize ParticlesJS" + particles_str.group(1)
else:
    particles_js = ""

def w(path, contents):
    lines = contents.split('\n')
    cleaned = [line[8:] if line.startswith("        ") else line for line in lines]
    with open(path, "w", encoding="utf-8") as fx:
        fx.write('\n'.join(cleaned).strip() + '\n')

print(f"Lengths -> main:{len(main_css)}, hero:{len(hero_css)}, services:{len(services_css)}, process:{len(process_css)}")
print(f"industries:{len(industries_css)}, results:{len(results_css)}, why:{len(why_css)}")
print(f"animations:{len(animations_str)}, counters:{len(counters_str)}, particles:{len(particles_js)}")

w(os.path.join(css_dir, "main.css"), main_css)
w(os.path.join(css_dir, "hero.css"), hero_css)
w(os.path.join(css_dir, "services.css"), services_css)
w(os.path.join(css_dir, "process.css"), process_css)
w(os.path.join(css_dir, "industries.css"), industries_css)
w(os.path.join(css_dir, "results.css"), results_css)
w(os.path.join(css_dir, "why.css"), why_css)

w(os.path.join(js_dir, "animations.js"), animations_str)
w(os.path.join(js_dir, "counters.js"), counters_str)
w(os.path.join(js_dir, "particles.js"), particles_js)

new_html = content.replace(f"    <style>\n{styles}\n    </style>", 
    '    <link rel="stylesheet" href="css/main.css">\n'
    '    <link rel="stylesheet" href="css/hero.css">\n'
    '    <link rel="stylesheet" href="css/services.css">\n'
    '    <link rel="stylesheet" href="css/process.css">\n'
    '    <link rel="stylesheet" href="css/industries.css">\n'
    '    <link rel="stylesheet" href="css/results.css">\n'
    '    <link rel="stylesheet" href="css/why.css">')

new_html = new_html.replace(f"    <script>\n{scripts}\n    </script>",
    '    <script src="js/particles.js"></script>\n'
    '    <script src="js/animations.js"></script>\n'
    '    <script src="js/counters.js"></script>')

with open(html_path, "w", encoding="utf-8") as f:
    f.write(new_html)

print("Done Refactoring!")
