import React from 'react';
import { mount } from 'enzyme';
import { ShowWeather } from './ShowWeather';

test('Should render weather info', () => {
  const weatherInfo = {
    city: 'London',
    country: 'UK',
    temperature: '20',
    humidity: '60',
    description: 'Mostly cloudy',
    icon: '04d'
  };
  const component = mount(<ShowWeather {...weatherInfo} />);
  const location = component.find('.location');
  const temp = component.find('.temp');
  const humidity = component.find('.humidity');
  const desc = component.find('.desc');
  
  expect(location.text()).toBe('Location: London, UK');
  expect(temp.text()).toBe('Temperature: 20C');
  expect(humidity.text()).toBe('Humidity: 60');
  expect(desc.text()).toBe('Conditions: Mostly cloudy');
});