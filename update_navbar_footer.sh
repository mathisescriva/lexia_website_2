#!/bin/bash

# Script pour mettre à jour la navbar et le footer sur toutes les pages HTML

for file in /Users/mathisescriva/CascadeProjects/lexia_website_2/*.html; do
  # Mise à jour des liens dans la navbar (dropdown-content)
  sed -i '' 's|<a href="feature1.html">Elixir - IA Documentaire</a>|<a href="feature1.html">Elixir - IA Documentaire</a>|g' "$file"
  sed -i '' 's|<a href="feature2.html">Exploration Contextuelle des Données</a>|<a href="feature2.html">Gilbert - IA Conversationnelle</a>|g' "$file"
  
  # Ajouter le lien vers la page d'accompagnement à la transition IA s'il n'existe pas déjà
  if ! grep -q "<a href=\"transition-ia.html\">Accompagnement à la Transition IA</a>" "$file"; then
    sed -i '' '/<a href="feature2.html">Gilbert - IA Conversationnelle<\/a>/a\
          <a href="transition-ia.html">Accompagnement à la Transition IA</a>' "$file"
  fi
  
  # Mise à jour des liens dans la navbar mobile
  sed -i '' 's|<a href="feature1.html" class="mobile-nav-sublink">Elixir - IA Documentaire</a>|<a href="feature1.html" class="mobile-nav-sublink">Elixir - IA Documentaire</a>|g' "$file"
  sed -i '' 's|<a href="feature2.html" class="mobile-nav-sublink">Exploration Contextuelle des Données</a>|<a href="feature2.html" class="mobile-nav-sublink">Gilbert - IA Conversationnelle</a>|g' "$file"
  
  # Ajouter le lien vers la page d'accompagnement à la transition IA dans la navbar mobile s'il n'existe pas déjà
  if ! grep -q "<a href=\"transition-ia.html\" class=\"mobile-nav-sublink\">Accompagnement à la Transition IA</a>" "$file"; then
    sed -i '' '/<a href="feature2.html" class="mobile-nav-sublink">Gilbert - IA Conversationnelle<\/a>/a\
        <a href="transition-ia.html" class="mobile-nav-sublink">Accompagnement à la Transition IA</a>' "$file"
  fi
  
  # Mise à jour du footer (si nécessaire)
  if grep -q "<h4>Solutions</h4>" "$file"; then
    # Trouver la section Solutions dans le footer et la remplacer
    sed -i '' '/<h4>Solutions<\/h4>/,/<\/div>/c\
          <h4>Solutions</h4>\n          <a href="feature1.html">Elixir - IA Documentaire</a>\n          <a href="feature2.html">Gilbert - IA Conversationnelle</a>\n          <a href="transition-ia.html">Accompagnement à la Transition IA</a>\n        </div>' "$file"
  fi
done

echo "Mise à jour terminée."
