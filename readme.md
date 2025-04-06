# App-MeteoZen

Application météo collaborative développée en HTML, CSS et JavaScript. Elle permet de rechercher la météo d’une ville via l’API OpenWeatherMap.

## Table des matières

- [Objectif du projet](#objectif-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Répartition des rôles](#repartition-des-roles)
- [Clé API OpenWeatherMap](#Clé-API-OpenWeatherMap)
- [Structure du projet](#structure-du-projet)
- [Procédure Git collaborative](guideGit.md)


---

## Objectif du projet

Créer une application météo dynamique et responsive avec une recherche de ville, un affichage des données météo en temps réel, un beau design, et une documentation claire.

---

## Technologies utilisées

- HTML5
- CSS3
- JavaScript
- API OpenWeatherMap
- Git & GitHub

---

## 🔄 Répartition des rôles

| Membre     | Tâches principales                       |
|------------|-------------------------------------------|
| Fanny      | Sructure de la page index.html        |
| Amine + Noémie     | Design CSS + Responsivité                |
| Fanny + Amine + Noémie     | Affichage dynamique avec JavaScript      |

---

## 🔑 Clé API OpenWeatherMap

  * Créer un compte sur openweathermap.org

  * Obtenir une clé API gratuite

  * Exemple de requête API :

``` bash
const API_KEY = 'votre_clé';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Clermont-Ferrand&appid=${API_KEY}&units=metric&lang=fr`;
``` 

--- 


## 📁 Structure du projet

📁 App-MeteoZen  
├── 📂 assets/ --------------> # Dossier contenant les ressources du projet  
│   ├── 📂 css/ -------------> # Feuilles de style  
│   │   └── styles.css ------> # Fichier principal CSS  
│   ├── 📂 img/ -------------> # Images et icônes  
│   │   ├── barre-de-recherche.png  
│   │   ├── brume.png  
│   │   ├── degager.png  
│   │   ├── fond_meteo.png  
│   │   ├── humidite.png  
│   │   ├── loading-icon.gif  
│   │   ├── neige.png  
│   │   ├── nuageux.png  
│   │   ├── pluie.png  
│   │   ├── pluvieux.png  
│   │   └── vent.png  
├── index.html ------------->  # Page principale de l'application  
├── script.js ------------->   # Logique JS  
└── readme.md ------------->   # Documentation du projet

<p align="center">
  <a href="procedures/guideGit.md">Suivant</a>
</p>

