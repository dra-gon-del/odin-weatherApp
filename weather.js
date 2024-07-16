import axios from "axios"

export function getWeather(lat, lon, timezone) {
    return axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=Europe%2FLondon", 
        { 
            params: {
                latitude: lat,
                longitude: lon,
                timezone,
            },
        }
    )
    .then(({data}) => {
        return {
            current: parseCurrentWeather(data),
            // daily: parseDailyWeather(data),
            // hourly: parseHourlyWeather(data),
        }
    });
};

function parseCurrentWeather({ current_weather, daily }) {
    const { 
        temperature: currentTemp, 
        windspeed: windSpeed, 
        weathercode: iconCode 
    } = current_weather

    const { 
        temperature_2m_max: [maxTemp],
        temperature_2m_min: [minTemp],
        apparent_temperature_2m_max: [maxFeelsLike],
        apparent_temperature_2m_min: [minFeelsLike],
        precipitation_sun: [precip],
    } = daily
 


    return {
        currentTemp: Math.round(currentTemp),
        highTemp: Math.round(maxTemp),
        lowTemp: Math.round(minTemp),
        highFeelsLike: Math.round(maxFeelsLike),
        lowFeelsLike: Math.round(minFeelsLike),
        windSpeed: Math.round(windSpeed),
        precip: Math.round(precip * 100) / 100,
        iconCode,
    }
};