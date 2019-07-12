import React, { useState, useEffect, useCallback } from 'react';
import { ShowWeather } from './components/ShowWeather';
import './App.css';
import { WeatherForm } from './components/Form';
import { getData } from './api/ApiService';

const apiKey = '8d2de98e089f1c28e1a22fc19a24ef04';

export const App: React.FunctionComponent = () => {

  const [res, setResult] = useState({
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    icon: ''
  });

  const [params, setParams] = useState({
    city: '',
    country: ''
  });

  useEffect(
    () => {
      const fetchData = async () => {
        const res = await getData(params.city, params.country, apiKey);
        if (res !== undefined) {
          setResult({
            temperature: res.main.temp,
            city: res.name,
            country: res.sys.country,
            humidity: res.main.humidity,
            description: res.weather[0].description,
            icon: res.weather[0].icon
          });
        }
      };
      if (params.city !== '' && params.country !== '') {
        fetchData();
      }
    }, 
    [params]
  );

  const setValues = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      setParams({
        city: e.target[0].value,
        country: e.target[1].value
      });
      e.preventDefault();
    }, 
    [params]
  );

  return (
    <div id="main-container">
      <h1>Simple React Weather App</h1>
      <WeatherForm setValues={setValues} />
      <ShowWeather {...res} />
    </div>
  );
};
