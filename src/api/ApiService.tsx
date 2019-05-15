
const getData = (city: string, country: string, Api_Key: string): Promise<any> => {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`)
    .then(
      response => {
        if (!response.ok) {
          return '';
        }
        return response.json();
      })
      .then(
        result => {
          return result;
        })
};

export default getData;