<script>
    import { modalController } from 'ionic-svelte';

  export let data
  console.log(data.geo);
  let geo = data.geo;
  // const weather = data.weather;
  // const temp = data.temp;
  // let entries = Object.entries(weather[0])
  // console.log(weather[0]);
  // console.log(temp);
  var modal = document.querySelector('ion-modal');
  
  function cancel() {
    modalController.dismiss(null, 'cancel');
  }

  function confirm() {
    const input = document.querySelector('ion-select-option');
    console.log(input?.value);
    modalController.dismiss(input?.value, 'confirm');
  }


</script>

<ion-header>
  <ion-toolbar>
    <ion-title>Please Choose A City to View the Weather!</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open</ion-button>
  <!-- <p id="message">This modal example uses triggers to automatically open a modal when the button is clicked.</p> -->
  <ion-modal trigger="open-modal">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button on:click={() => cancel()}>Cancel</ion-button>
        </ion-buttons>
        <ion-title>Welcome</ion-title>
        <ion-buttons slot="end">
          <ion-button on:click={() => confirm()}>Confirm</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-select aria-label="Choose a city!">
         {#each geo as {lat, lon, name, country, state}} 
         <ion-select-option value = ({lat},{lon})> {name}, {state} {country} </ion-select-option>
         {/each}
        </ion-select>  
      </ion-item>
    </ion-content>
  </ion-modal>
</ion-content>