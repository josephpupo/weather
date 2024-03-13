<script>
  export let data;
  const weather = data.weather;
  let entries = Object.entries(weather[0])
  console.log(weather[0]);
</script>

{#each entries as [key, value]}
  <div>
    {key} - {value}
  </div>
{/each}