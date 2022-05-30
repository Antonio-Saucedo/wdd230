const temperatureF = Math.round((document.getElementById("temperature").textContent * (9/5)) + 32);
const speedmph = Math.round(document.getElementById("windSpeed").textContent / 1.609);

if (temperatureF <= 50 && speedmph > 3.0) {
    const chill = Math.round(35.74 + 0.6215 * temperatureF - 35.75 * speedmph ** 0.16 + 0.4275 * temperatureF * speedmph ** 0.16);
    document.getElementById("windChill").textContent = `${Math.round(chill * 1.609)} \u00B0C`;
}