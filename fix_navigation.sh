#!/bin/bash

# Script pour corriger les caractères 'n' indésirables dans tous les fichiers HTML

# Correction du footer dans tous les fichiers HTML
find /Users/mathisescriva/CascadeProjects/lexia_website_2 -name "*.html" -type f -exec sed -i '' 's/<h4>Solutions<\/h4>n          /<h4>Solutions<\/h4>\n          /g' {} \;
find /Users/mathisescriva/CascadeProjects/lexia_website_2 -name "*.html" -type f -exec sed -i '' 's/<a href="feature1.html">Elixir - IA Documentaire<\/a>n          /<a href="feature1.html">Elixir - IA Documentaire<\/a>\n          /g' {} \;
find /Users/mathisescriva/CascadeProjects/lexia_website_2 -name "*.html" -type f -exec sed -i '' 's/<a href="feature2.html">Gilbert - IA Conversationnelle<\/a>n          /<a href="feature2.html">Gilbert - IA Conversationnelle<\/a>\n          /g' {} \;
find /Users/mathisescriva/CascadeProjects/lexia_website_2 -name "*.html" -type f -exec sed -i '' 's/<a href="transition-ia.html">Accompagnement à la Transition IA<\/a>n        <\/div>/<a href="transition-ia.html">Accompagnement à la Transition IA<\/a>\n        <\/div>/g' {} \;

# Correction du menu déroulant dans tous les fichiers HTML
find /Users/mathisescriva/CascadeProjects/lexia_website_2 -name "*.html" -type f -exec sed -i '' 's/<a href="transition-ia.html">Accompagnement à la Transition IA<\/a>        <\/div>/<a href="transition-ia.html">Accompagnement à la Transition IA<\/a>\n        <\/div>/g' {} \;

# Correction du menu mobile dans tous les fichiers HTML
find /Users/mathisescriva/CascadeProjects/lexia_website_2 -name "*.html" -type f -exec sed -i '' 's/<a href="transition-ia.html" class="mobile-nav-sublink">Accompagnement à la Transition IA<\/a>        <a/<a href="transition-ia.html" class="mobile-nav-sublink">Accompagnement à la Transition IA<\/a>\n        <a/g' {} \;

echo "Correction terminée. Les caractères 'n' indésirables ont été supprimés de tous les fichiers HTML."
