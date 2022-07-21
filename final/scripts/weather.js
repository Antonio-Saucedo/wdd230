const currentTemp = document.querySelector("#temperature");
const weatherIconToday = document.querySelector("#weather-today");
const weatherIcon1Day = document.querySelector("#weather-one-day");
const weatherIcon2Day = document.querySelector("#weather-two-today");
const weatherIcon3Day = document.querySelector("#weather-three-today");
const weatherDesc = document.querySelector("#condition");
const humidity = document.querySelector("#humidity");

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=40.0003&lon=-89.2504&exclude=minutely,hourly&appid=fc6f9211ad045deb2b01c57bb94315bc`;

apiFetch(url);

function displayResults (weatherData) {
    currentTemp.innerHTML = Math.round((weatherData.current.temp.toFixed(0) - 32) * (5/9));
    const weatherimagesrc = `https://antonio-saucedo.github.io/wdd230/final/images/weatherIcons/${weatherData.current.weather[0].icon}.png`;
    const weatherimagesrc2 = `https://antonio-saucedo.github.io/wdd230/final/images/weatherIcons/${weatherData.daily[1].weather[0].icon}.png`;

    // Capitalize first letter of each word.
    const descweather = weatherData.current.weather[0].description;
    const descweatherdisplay = descweather.split(" ");
    for (var i = 0; i < descweatherdisplay.length; i++) {
        descweatherdisplay[i] = descweatherdisplay[i].charAt(0).toUpperCase() + descweatherdisplay[i].slice(1);
    }

    humidity.innerHTML = `${weatherData.current.humidity}%`;
    weatherIconToday.setAttribute("src", weatherimagesrc);
    weatherIconToday.setAttribute("alt", descweather);
    weatherDesc.innerHTML = descweatherdisplay.join(" ");
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