<style>
  location-view{
    display: grid;
    justify-content: center;
    padding: 0px;
    margin: 0px;
    grid-template-areas:
      "location"
      "img"
      "temp"
  }
  img{
    grid-area: img;
    max-width: 100%
  }
</style>

<script lang="ts">
  const url = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dbwrfyf-3ad67c12-bf02-4231-bed9-fbb6f2b00ba5.png/v1/fill/w_900,h_900/sun_on_a_transparent_background__by_prussiaart_dbwrfyf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kYndyZnlmLTNhZDY3YzEyLWJmMDItNDIzMS1iZWQ5LWZiYjZmMmIwMGJhNS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.iosIdwUZ5hFlqY7tTU35rkr2gKrVC5QbvtYgvjySbog"

  class Location {
    location: string
    temp: string
    constructor(location: string, temp: string){
      this.location = location
      this.temp = temp
    }
  }

  let location1 = new Location("Hofstra", "75")

  let locations = [location1]

</script>

<location-view>
  {#each locations as location}
  <location-name>{location.location}</location-name>
  <img height = "75%" width = "75%" src ="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dbwrfyf-3ad67c12-bf02-4231-bed9-fbb6f2b00ba5.png/v1/fill/w_900,h_900/sun_on_a_transparent_background__by_prussiaart_dbwrfyf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kYndyZnlmLTNhZDY3YzEyLWJmMDItNDIzMS1iZWQ5LWZiYjZmMmIwMGJhNS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.iosIdwUZ5hFlqY7tTU35rkr2gKrVC5QbvtYgvjySbog">
  <location-temp>{location.temp}</location-temp>
  {/each}
</location-view>



