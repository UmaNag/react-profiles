import React from 'react';

interface ISetValues {
  setValues(e: React.FormEvent<HTMLFormElement>): void;
}

export const WeatherForm: React.FunctionComponent<ISetValues> = ({setValues}) => {
  return (
    <form onSubmit={setValues}>
      <input type="text" name="city" id="city" placeholder="City..." />
      <input type="text" name="country" id="country" placeholder="Country..." />
      <button>Get Weather</button>
    </form> 
  );
};
