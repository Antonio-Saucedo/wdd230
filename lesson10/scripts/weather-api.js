const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// Need to finish!!!!
const url = `https://api.openweathermap.org/data/2.5/weather?q=Fairnanks&units=Imperial&appid=`;

apiFetch(url);

function displayResults (weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.toFixed(1);

    const imagesrc = `https://openweathermap.org/img/w/${weatherDatat.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', imagesrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.innerHTML = desc;
}

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //temp//
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}