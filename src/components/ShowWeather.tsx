import React from "react";

interface IWeatherProps {
  city: string;
  country: string;
  temperature: string;
  humidity: string;
  description: string;
}

export const ShowWeather: React.FunctionComponent<IWeatherProps> = ({
  city, 
  country, 
  temperature, 
  humidity, 
  description}) => {
    return (
      <div id="weather-results">
        {city && country && <p>Location: {city}, {country}</p>}
        {temperature && <p>Temperature: {Math.round(Number(temperature))}C</p>}
        {humidity && <p>Humidity: {humidity}</p>}
        {description && <p>Conditions: {description}</p>}
      </div>
    )
}