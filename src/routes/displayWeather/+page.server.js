/*import { API_KEY } from '$env/static/private';
import OpenWeatherMap from 'openweathermap-ts';

export const load = async () => {
    const fetchWeather = async() => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.714161&lon=-73.559502&appid=${API_KEY}`);
        const data = await res.json()
        console.log(data.weather);
        return data.weather;
    }
    return {
        weather: fetchWeather()
    }
}*/