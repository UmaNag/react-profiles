import * as React from 'react';
import { ShowWeather } from './components/ShowWeather';
import './App.css';
import { WeatherForm } from './components/Form';
import { getData } from './api/ApiService';

const apiKey = '8d2de98e089f1c28e1a22fc19a24ef04';

export const App: React.FunctionComponent = () => {

  const [res, setResult] = React.useState({
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
  });

  const getWeather = async (e: React.FormEvent<HTMLFormElement>) => {
    const city = e.target[0].value;
    const country = e.target[1].value;
    e.preventDefault();
    const res = await getData(city, country, apiKey);
    setResult({
      temperature: res.main.temp,
      city: res.name,
      country: res.sys.country,
      humidity: res.main.humidity,
      description: res.weather[0].description,
    });
  };
  return (
    <div id="main-container">
      <h1>Simple React Weather App</h1>
      <WeatherForm getWeather={getWeather} />
      <ShowWeather {...res} />
    </div>
  );
};
