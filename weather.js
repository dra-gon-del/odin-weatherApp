import axios from "axios"

//https://api.open-meteo.com/v1/forecast?latitude=52.4814&longitude=-1.8998&hourly=temperature_2m,apparent_temperature,precipitation_probability,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&temperature_unit=fahrenheit&wind_speed_unit=ms&precipitation_unit=inch&timeformat=unixtime

export function getWeather(lat, lon, timezone) {
    return axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.4814&longitude=-1.8998&hourly=temperature_2m,apparent_temperature,precipitation_probability,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&temperature_unit=fahrenheit&wind_speed_unit=ms&precipitation_unit=inch&timeformat=unixtime", 
    { 
        params: {
            latitude: lat,
            longitude: lon,
            timezone,
        }
    });
};