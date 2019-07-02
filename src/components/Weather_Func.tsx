import React from "react";
import getData from "../api/ApiService";
import ShowWeather from "./ShowWeather";

const apiKey = "8d2de98e089f1c28e1a22fc19a24ef04";

const WeatherFunc = () => {
  const [result, setResult] = React.useState({
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""        
  });
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");

  const getWeather = async (e: any) => {
    e.preventDefault();
    const result = await getData(city, country, apiKey);
    setResult({
      temperature: result.main.temp,
      city: result.name,
      country: result.sys.country,
      humidity: result.main.humidity,
      description: result.weather[0].description,
      error: ""
    });
  };

  const dataChangeCity = async (e: any) => {
    setCity(e.target.value);
  }

  const dataChangeCountry = async (e: any) => {
    setCountry(e.target.value);
  }

  return (
    <div>
      <h1>React Weather App</h1>
      <div>
        <form onSubmit={getWeather}>
          <input type="text" name="city" placeholder="City..." onChange={dataChangeCity} />
          <input type="text" name="country" placeholder="Country..." onChange={dataChangeCountry} />
          <button>Get Weather</button>
        </form>
      </div>
      <ShowWeather {...result} />
    </div>
  );
}

export default WeatherFunc;