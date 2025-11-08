import React from "react";


function WeatherCard({data}){
   if(!data) return null
    const {temperature, humidity, pressure,wind,description, city, timestamp} = data


    return (
        <div>
            <h2>{city}</h2>
            <p>{new Date(timestamp).toLocaleString()}</p>
            <p>{description}</p>
            <div>
                🌡 Temp: {temperature}°C | 💧 {humidity}% | 🌬 {wind} m/s | ⬇ {pressure} hPa
            </div>
        </div>
    )
}

export default WeatherCard