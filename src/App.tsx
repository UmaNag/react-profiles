import React, { useState } from "react";
import { ShowWeather } from "./components/ShowWeather";
import "./App.css";
import { Form } from "./components/Form";
import { getData } from './api/ApiService';

const apiKey = "8d2de98e089f1c28e1a22fc19a24ef04";

const App: React.FunctionComponent = () => {
  
  const [res, setResult] = useState({
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: ""
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
      description: res.weather[0].description
    });
  }
  return (
    <div id="main-container">
      <Form getWeather={getWeather} />
      <ShowWeather {...res} />
    </div>
  )
}

export default App;
