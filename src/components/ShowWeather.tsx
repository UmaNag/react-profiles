import React from 'react';

interface IWeatherProps {
  city: string;
  country: string;
  description: string;
  humidity: string;
  temperature: string;
  icon: string;
}

export const ShowWeather: React.FunctionComponent<IWeatherProps> = ({
  city,
  country,
  temperature,
  humidity,
  description,
  icon}) => {
  return (
      <div id="weather-results">
        {city && country && <p className="location">Location: {city}, {country}</p>}
        {temperature && <p className="temp">Temperature: {Math.round(Number(temperature))}C</p>}
        {humidity && <p className="humidity">Humidity: {humidity}</p>}
        {description && <p className="desc">Conditions: {description}</p>}
        {icon && <img src={`http://openweathermap.org/img/w/${icon}.png`} />}
      </div>
  );
};
