<script lang="ts">
  export let data;
  let weather = data.weather;
  let forecast = data.forecast;
  console.log(weather);
  console.log(forecast);
  let tempDivInfo;
  let weatherInfoDiv;
  let hourlyForecastDiv;
  let weatherIcon: HTMLElement | null;
  let hourlyItem;
  import { onMount } from "svelte";

  onMount(() => {
    tempDivInfo = document.getElementById("temp-div");
    weatherInfoDiv = document.getElementById("weather-info");
    weatherIcon = document.getElementById("weather-icon");
    hourlyForecastDiv = document.getElementById("hourly-forecast");
    hourlyItem = document.getElementById("hourly-item");
    displayWeather(weather);
    displayHourlyForecast(forecast);

  });

  function showImage() {
    weatherIcon.style.display = "block";
  }

  /**
   * @param {any} data
   */
  function displayWeather(data: { cod: string; message: any }) {
    weatherInfoDiv.innerHTML = "";
    hourlyForecastDiv.innerHTML = "";
    tempDivInfo.innerHTML = "";

    if (data.cod == "404") {
      weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
      const cityName = weather.name;
      const temperature = Math.round(weather.main.temp);
      const description = weather.weather[0].description;
      const iconCode = weather.weather[0].icon;
      console.log(iconCode);
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
      const temperatureHTML = `
        <p>${temperature} Kelvin</p>
        `;

      const weatherHTML = `
        <p>${cityName}</p>
        <p>${description}</p>
        `;

      tempDivInfo.innerHTML = temperatureHTML;
      weatherInfoDiv.innerHTML = weatherHTML;
      weatherIcon.src = iconUrl;
      weatherIcon.alt = description;

      showImage();
    }
  }
  function displayHourlyForecast(forecast) {
    const hourlyForecastDiv = document.getElementById("hourly-forecast");
    const next24Hours = forecast.list.slice(0, 8);
    next24Hours.forEach((item) => {
      const dateTime = new Date(item.dt * 1000);
      const hour = dateTime.getHours();
      const temperature = Math.round(item.main.temp);
      const iconCode = item.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

      const hourlyItemHTML = `
            <div bind:this{hourlyItem} class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°F</span>
            </div>
        `;
      hourlyForecastDiv.innerHTML += hourlyItemHTML;
    });
  }


</script>

<body>
  <div id="weather-container">
    <img bind:this={weatherIcon} id="weather-icon" alt="Weather Icon" />
    <div bind:this={tempDivInfo} id="temp-div"></div>
    <div bind:this={weatherInfoDiv} id="weather-info"></div>
    <div bind:this={hourlyForecastDiv} id="hourly-forecast"></div>
  </div>
</body>

<style>
  #weather-container {
    max-width: 400px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur;
    border: 1px;
    text-align: center;
    position: relative;
    top: 20%;
    margin: -10px auto;
  }

  #temp-div{
    font-size: 60px;
    margin-top: -30px;
  }

  #weather-info {
    font-size: 30px;
  }

  #hourly-forecast {
    margin-top: 50px;
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
  }

  :global(.hourly-item) {
    flex: 0 0 auto;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    color: white;
  }

  :global(.hourly-item img) {
    width: 50px;
    height: 50px;
    margin-bottom: 5px !important;
  }

  /* .hourly-heading {
    color: #fff;
    margin-top: 10px;
  } */

  #weather-icon {
    max-height: 50%;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
</style>
