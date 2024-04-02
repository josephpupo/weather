import { PUBLIC_API_KEY } from '$env/static/public';
// import OpenWeatherMap from 'openweathermap-ts';
export const ssr = false;

export const load = async ({ fetch }) => {
    const limit = 5;
    // Geocoding
    const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=East+Meadow&limit=${5}&appid=${PUBLIC_API_KEY}`);
    const geoData = await geoRes.json();
    const geo = geoData;
    console.log(geo);
    
    // Weather and Temperature Data
    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.714161&lon=-73.559502&appid=${PUBLIC_API_KEY}`)
    const weatherData = await weatherRes.json();
    const weather = weatherData.weather;
    const temp = weatherData.main.temp;
    return {
        weather: weather,
        temp: temp,
        geo: geo
    }
}