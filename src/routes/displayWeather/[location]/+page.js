import { PUBLIC_API_KEY } from '$env/static/public';
// import OpenWeatherMap from 'openweathermap-ts';
export const ssr = false;

let result;
export const load = async ({fetch, params}) => {
    /**
     * @type {string | any[]}
     */
    let coords;
    // const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?`)
    coords = params.location;
    const regex = /-?\d+(\.\d+)?/g;
    let match = coords.match(regex);
    if (match && match.length >= 2){
        coords = [parseFloat(match[0]), parseFloat(match[1])];
    }
    else{
        coords = [];
    }

    const getWeatherData = async (/** @type {any[]} */ coords) => {
        const weatherRes =  await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${PUBLIC_API_KEY}`)
        const weatherData = await weatherRes.json();
        return weatherData;
    }

    const getForecastData = async(/** @type {any[]} */ coords) => {
        const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0]}&lon=${coords[1]}&appid=${PUBLIC_API_KEY}`)
        const forecastData = await forecastRes.json();
        return forecastData;
    }
    
    return {
        match: match,
        weather: await getWeatherData(coords),
        forecast: await getForecastData(coords)
    };
}