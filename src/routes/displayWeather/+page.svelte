<script>
  // export const ssr = false;
  export let data;
  console.log(data);
  const weather = data.weather;
  const temp = data.temp;
  let entries = Object.entries(weather[0])
  console.log(weather[0]);
  console.log(temp);
</script>

