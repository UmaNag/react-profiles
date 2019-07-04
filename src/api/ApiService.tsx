
const getData = async (city: string, country: string, apiKey: string): Promise<any> => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
  if (!response.ok) {
    return '';
  }
  const result = await response.json();
  return result;
};
  
export default getData;