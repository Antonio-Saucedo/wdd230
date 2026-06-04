// Cache DOM queries
const elements = {
  currentTemp: document.querySelector("#current-temp"),
  minTemp: document.querySelector("#min"),
  maxTemp: document.querySelector("#max"),
  weatherIcon: document.querySelector("#weather-icon"),
  weatherDesc: document.querySelector("figcaption"),
  windDesc: document.querySelector("#wind-desc"),
};

const API_KEY = "fc6f9211ad045deb2b01c57bb94315bc";
const CITY = "Rigby";
const ICON_BASE_URL = `https://antonio-saucedo.github.io/wdd230/chamber/images/weatherIcons`;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=Imperial&appid=${API_KEY}`;

function toTitleCase(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

function displayResults({ main, weather, wind }) {
  const { temp, temp_min, temp_max } = main;
  const { icon, description } = weather[0];

  elements.currentTemp.textContent = temp.toFixed(1);
  elements.minTemp.textContent = temp_min.toFixed(1);
  elements.maxTemp.textContent = temp_max.toFixed(1);
  elements.weatherIcon.src = `${ICON_BASE_URL}/${icon}.png`;
  elements.weatherIcon.alt = description;
  elements.weatherDesc.textContent = toTitleCase(description);
  elements.windDesc.textContent = wind.speed.toFixed(1);
}

async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw Error(await response.text());
    displayResults(await response.json());
  } catch (error) {
    console.error("Weather API fetch failed:", error);
  }
}

apiFetch(API_URL);
