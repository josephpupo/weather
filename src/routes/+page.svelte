<svelte:head>
  <tite>
    Weather App
  </tite>
</svelte:head>

<script lang="ts">
  const weather_icon = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dbwrfyf-3ad67c12-bf02-4231-bed9-fbb6f2b00ba5.png/v1/fill/w_900,h_900/sun_on_a_transparent_background__by_prussiaart_dbwrfyf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kYndyZnlmLTNhZDY3YzEyLWJmMDItNDIzMS1iZWQ5LWZiYjZmMmIwMGJhNS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.iosIdwUZ5hFlqY7tTU35rkr2gKrVC5QbvtYgvjySbog";
  const weather_bg = "https://i.pinimg.com/564x/cb/7a/e8/cb7ae8cb0601ec3167227dbd28f871ae.jpg"
  function getWeather(){
    return "hello"
  }
</script>

<body>
  <div id='main-weather'>
    <h2>Weather App!</h2>
    <input type="text" id="city" placeholder="Enter City">
    <button on:click={getWeather}>Search</button>

    <img id="weather-icon" alt="Weather Icon">
    <div id="temp-div"></div>
    <div id="weather-info"></div>
    <div id="hourly-forecast"></div>

  </div>
</body>

<style>
  body{
    background-image: url(cloudy-sky-from-above.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }
  #main-weather{
    max-width: 400px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    backdrop-filter: blur;
    border: 1px;
    text-align: center;
  }
</style>