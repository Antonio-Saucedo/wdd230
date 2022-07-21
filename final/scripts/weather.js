const display = document.querySelector("#weather-info");

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=40.0003&lon=-89.2504&exclude=minutely,hourly&appid=fc6f9211ad045deb2b01c57bb94315bc`;

apiFetch(url);

function createDailyCards(weatherData) {
    for (let i = 1; i < 4; i++) {
        let card = document.createElement("div");
        let h2 = document.createElement("h2");
        let pic = document.createElement("picture");
        let img = document.createElement("img");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");

        if (i == 1) {
            h2.innerHTML = `Tomorrow`;
        } else if (i == 2) {
            h2.innerHTML = `two day`;
        } else {
            h2.innerHTML = `three day`;
        }
        img.setAttribute("src", `https://antonio-saucedo.github.io/wdd230/final/images/weatherIcons/${weatherData.daily[i].weather[0].icon}.png`);

        // Capitalize first letter of each word.
        const descweather = weatherData.daily[i].weather[0].description;
        const descweatherdisplay = descweather.split(" ");
        for (let i = 0; i < descweatherdisplay.length; i++) {
            descweatherdisplay[i] = descweatherdisplay[i].charAt(0).toUpperCase() + descweatherdisplay[i].slice(1);
        }

        img.setAttribute("alt", `${descweather}`);
        p1.innerHTML = `${Math.round((weatherData.daily[i].temp.day.toFixed(0) - 32) * (5 / 9))}°F`;
        p2.innerHTML = `${descweather}`;

        card.appendChild(h2);
        card.appendChild(pic);
        pic.appendChild(img);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);

        display.append(card);
    }
}

function currentWeather(weatherData) {
  let card = document.createElement("div");
  let h2 = document.createElement("h2");
  let pic = document.createElement("picture");
  let img = document.createElement("img");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");

  h2.innerHTML = `Current Weather`;
  img.setAttribute("src",`https://antonio-saucedo.github.io/wdd230/final/images/weatherIcons/${weatherData.current.weather[0].icon}.png`);

  // Capitalize first letter of each word.
  const descweather = weatherData.current.weather[0].description;
  const descweatherdisplay = descweather.split(" ");
  for (var i = 0; i < descweatherdisplay.length; i++) {
    descweatherdisplay[i] = descweatherdisplay[i].charAt(0).toUpperCase() + descweatherdisplay[i].slice(1);
  }

  img.setAttribute("alt", `${descweather}`);
  p1.innerHTML = `${Math.round((weatherData.current.temp.toFixed(0) - 32) * (5 / 9))}°F`;
  p2.innerHTML = `${descweather}`;
  p3.innerHTML = `Humidity: ${weatherData.current.humidity}`;

  card.appendChild(h2);
  card.appendChild(pic);
  pic.appendChild(img);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);

  display.append(card);
}

async function apiFetch(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      currentWeather(data);
      createDailyCards(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
