import * as React from 'react';

interface IGetWeather {
  getWeather(e: React.FormEvent<HTMLFormElement>): Promise<any>;
}

export const WeatherForm: React.FunctionComponent<IGetWeather> = ({ getWeather }) => {
  return (
    <form onSubmit={getWeather}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button>Get Weather</button>
    </form>
  );
};
