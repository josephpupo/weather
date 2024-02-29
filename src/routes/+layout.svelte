<script>
  import { setupIonicBase } from 'ionic-svelte';

  /* Theme variables */
  import '../theme/variables.css';

  /* load and register all components - you can also import separately to code split */
  import 'ionic-svelte/components/all';

  /* run base configuration code from ionic/core */
  setupIonicBase();
</script>

<ion-app>
  <slot />
</ion-app>