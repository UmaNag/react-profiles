import React from 'react';
import { shallow } from 'enzyme';
import { WeatherForm } from './Form';

test('Should render the form', () => {
  const fnSubmit = jest.fn;
  const component = shallow(<WeatherForm setValues={fnSubmit} />);

  expect(component.exists()).toBe(true);
});

test('Should be city and country input fields and a button', () => {
  const fnSubmit = jest.fn;
  const component = shallow(<WeatherForm setValues={fnSubmit} />);
  const cityInput = component.find('#city');
  const countryInput = component.find('#country');
  const btn = component.find('button');

  expect(cityInput.exists());
  expect(countryInput.exists());
  expect(btn.exists());
});