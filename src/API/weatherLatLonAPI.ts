import axios from 'axios';

export const getLatLonData = async (lat: number, lon: number) => {
  const response = await axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c7f82955ebcd743198b54b7aa82fbdf4`)
    .then((response) => response.data);
  return response;
};
