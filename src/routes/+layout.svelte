<script lang>
  import { setupIonicBase } from 'ionic-svelte';

  /* Theme variables */
  import '../theme/variables.css';

  /* load and register all components - you can also import separately to code split */
  import 'ionic-svelte/components/all';

  /* run base configuration code from ionic/core */
  setupIonicBase();

  // Export preloaded data from server
  //export let data;

</script>

<style>
   :global(body){
    background-image: url(cloudy-sky-from-above.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0 auto;
  }
</style>

<ion-app>
  <slot />
</ion-app>