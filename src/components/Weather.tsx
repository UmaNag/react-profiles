import React from "react";

import Form from './Form';
import Titles from './Titles';
import getData from '../api/ApiService';

interface WeatherDetail {
  temperature: string,
  city: string,
  country: string,
  humidity: string,
  description: string,
  error: string
}

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

class Weather extends React.Component<{}, WeatherDetail> {
  constructor(props: WeatherDetail) {
    super(props);
    this.state = {
      temperature: '',
      city: '',
      country: '',
      humidity: '',
      description: '',
      error: ''
    };
    this.getWeather = this.getWeather.bind(this);
  }

  private async getWeather(e: any): Promise<any> {
    const city = e.target.elements.city.value;  
    const country = e.target.elements.country.value;
    e.preventDefault();   
    const response = await getData(city, country, Api_Key);
    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: "Please input search values..."
      })
    }
  }

  render() {
  return(
    <div className="wrapper">
      <div className="form-container">
      <Titles />
      <Form loadWeather={this.getWeather} />
      <div>
        {this.state.country && this.state.city && <p>Location: {this.state.city}, {this.state.country}</p>}
        {this.state.temperature && <p>Temperature: {this.state.temperature}</p>}
        {this.state.humidity && <p>Humidity: {this.state.humidity}</p>}
        {this.state.description && <p>Conditions: {this.state.description}</p>}
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    </div>
    </div>
    )
  }
}

export default Weather;