export const getData = async (city: string, country: string, apiKey: string): Promise<any> => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
};
