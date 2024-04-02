<script>
  export let data
  console.log(data.geo);
  let geo = data.geo;
  // const weather = data.weather;
  // const temp = data.temp;
  // let entries = Object.entries(weather[0])
  // console.log(weather[0]);
  // console.log(temp);
</script>

  <ion-select aria-label="Choose a city!">
    {#each geo as {lat, lon, name, country, state}} 
      <ion-select-option value = (lat,lon)> {name}, {state} {country} </ion-select-option>
    {/each}
  </ion-select>  

