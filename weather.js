const weatherDiv = document.getElementById('weather');
const apiKey = "337a0f94cc96b6d48660ab71df665d7b";
const city = "Cancun";
const country = "MX";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const temp = Math.round(data.main.temp);
    const condition = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    weatherDiv.innerHTML = `
      <img src="${iconUrl}" alt="${condition}" style="vertical-align: middle;" />
      <span>${temp}°C, ${condition}</span>
    `;
  })
  .catch(error => {
    weatherDiv.textContent = "Weather unavailable";
    console.error("Weather API error:", error);
  });
