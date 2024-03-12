import { API_KEY } from '$env/static/private';
import OpenWeatherMap from 'openweathermap-ts';

export const load = async () => {
    const openWeather = new OpenWeatherMap({
        apiKey: API_KEY
      });
    const displayWeather= async () => {
        try {
            const weather = await openWeather.getCurrentWeatherByCityName({
                cityName: "East Meadow",
                state: "New York",
                countryCode: "US"
            });
            console.log(weather);
            return res
        }
        catch(error) {
            console.log(error);
        }
    }

}