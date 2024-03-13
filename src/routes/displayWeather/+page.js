import { PUBLIC_API_KEY } from '$env/static/public';
import OpenWeatherMap from 'openweathermap-ts';

export const load = async ({ fetch }) => {
    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.714161&lon=-73.559502&appid=${PUBLIC_API_KEY}`)
    const weatherData = await weatherRes.json();
    const weather = weatherData.weather;
    return {
        weather: weather
    }
}