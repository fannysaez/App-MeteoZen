const apiKey = "e38a052237d57cc18413d72671e266e7"; // ⚠️ Ne pas exposer publiquement
const appName = "App-MeteoZen"; // Nom de l'application

const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

// 🎯 Recherche météo au clic sur le bouton
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    } else {
        alert("Veuillez entrer une ville !");
    }
});

// 🎯 Recherche météo en appuyant sur "Entrée"
cityInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

// 🚀 Fonction pour récupérer les données météo
async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Ville non trouvée !");
        }

        const data = await response.json();

        // Mise à jour de l'affichage
        document.getElementById("city-name").innerText = `🌍 ${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").innerText = `🌡️ Température : ${data.main.temp}°C`;
        document.getElementById("description").innerText = `☁️ ${data.weather[0].description}`;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("weather-icon").alt = data.weather[0].description;
        document.getElementById("humidity").innerText = `💧 Humidité : ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `🌬️ Vent : ${data.wind.speed} km/h`;

        console.log(`✅ Requête réussie depuis ${appName} pour ${data.name}`);
    } catch (error) {
        alert(error.message);
        console.error("❌ Erreur :", error);
    }
}
