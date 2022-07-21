const currentTemp = document.querySelector("#temperature");
const weatherIconToday = document.querySelector("#weather-today");
const weatherIcon1Day = document.querySelector("#weather-one-day");
const weatherIcon2Day = document.querySelector("#weather-two-today");
const weatherIcon3Day = document.querySelector("#weather-three-today");
const weatherDesc = document.querySelector("#condition");
const humidity = document.querySelector("#humidity");

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=40.55&lon=-91.3849&exclude=minutely,hourly&appid=fc6f9211ad045deb2b01c57bb94315bc`;

apiFetch(url);

function displayResults (weatherData) {
    currentTemp.innerHTML = Math.round((weatherData.current.temp.toFixed(0) - 32) * (5/9));
    const weatherimagesrc = `https://antonio-saucedo.github.io/wdd230/final/images/weatherIcons/${weatherData.current.weather[0].icon}.png`;

    // Capitalize first letter of each word.
    const descweather = weatherData.weather[0].description;
    const descweatherdisplay = descweather.split(" ");
    for (var i = 0; i < descweatherdisplay.length; i++) {
        descweatherdisplay[i] = descweatherdisplay[i].charAt(0).toUpperCase() + descweatherdisplay[i].slice(1);
    }
    const descweather2 = descweatherdisplay.join(" ");

    const descwind = Math.round(weatherData.wind.speed.toFixed(0) * 1.609);
    weatherIconToday.setAttribute("src", weatherimagesrc);
    weatherIconToday.setAttribute("alt", descweather);
    weatherDesc.innerHTML = descweather2;
    humidity.innerHTML = descwind;
}

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}