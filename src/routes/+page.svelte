<svelte:head>
  <title>
    Weather App
  </title>
</svelte:head>

<script lang="ts">
  import { goto } from "$app/navigation";
  
  let location = '';
  const weather_icon = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dbwrfyf-3ad67c12-bf02-4231-bed9-fbb6f2b00ba5.png/v1/fill/w_900,h_900/sun_on_a_transparent_background__by_prussiaart_dbwrfyf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kYndyZnlmLTNhZDY3YzEyLWJmMDItNDIzMS1iZWQ5LWZiYjZmMmIwMGJhNS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.iosIdwUZ5hFlqY7tTU35rkr2gKrVC5QbvtYgvjySbog";
  const weather_bg = "https://i.pinimg.com/564x/cb/7a/e8/cb7ae8cb0601ec3167227dbd28f871ae.jpg";

  function displayWeather(location: string){
    console.log(location);
    goto("/displayWeather/" + location);
  }
  
</script>

<body>
  <div id='main-weather'>
    <h2>Weather App!</h2>
    <img src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dbwrfyf-3ad67c12-bf02-4231-bed9-fbb6f2b00ba5.png/v1/fill/w_900,h_900/sun_on_a_transparent_background__by_prussiaart_dbwrfyf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kYndyZnlmLTNhZDY3YzEyLWJmMDItNDIzMS1iZWQ5LWZiYjZmMmIwMGJhNS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.iosIdwUZ5hFlqY7tTU35rkr2gKrVC5QbvtYgvjySbog" id="weather-icon" alt="Weather Icon">
    <img id = "display-weather" alt = "display weather">
    <input type="text" id="city" placeholder="Enter City" bind:value={location}>
    <button type = "submit" on:click={() => displayWeather(location)}>Search</button>
    <div id="temp-div"></div>
    <div id="weather-info"></div>
    <div id="hourly-forecast"></div>

  </div>
</body>

<style>

  #main-weather{
    max-width: 400px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    backdrop-filter: blur;
    border: 1px;
    text-align: center;
    position: relative;
    top: 20%;
    margin: -10px auto;
  }
  h2, label, p{
    display:block;
    color: #fff;
    margin: 8px 0;
  }

  input {
    width: calc(100%-16px);
    padding: 8px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px  black;
    margin-top: 20px;
  }

  button{
    background: white;
    color: black;
    padding: 11px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    width: 100px;
    font-size: 15px;
    display: block;
    margin: 20px auto;
  }

  button:hover{
    background: gray;
  }

  #weather-icon{
    display:block;
    max-height: 50%;
    max-width: 100%;
    align-items: center;
  }

  #temp-div p{
    font-size: 60px;
    margin-top: -30px;
  }

  #weather-info {
    font-size: 20px;
  }

  #display-weather {
    width: 200px;
    height: 200px;
    margin: 0 auto 10px;
    display: none;
  }
</style>