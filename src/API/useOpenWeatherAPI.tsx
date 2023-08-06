import React from 'react';
import axios from 'axios';
import { config } from 'API/openWeatherAPI_Config';
const useOpenWeatherAPI = () => {
  const API_ID = config.API_ID;
  const openWeatherAxios = axios.create({
    method: 'get',
    baseURL: config.BaseURL,
  });

  async function getCityWeather(city: string) {
    const requestURL = `?q=${city}&appid=${API_ID}`;
    try {
      const response = await openWeatherAxios.get(requestURL).then((response) => response.data);
      return response;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  return { getCityWeather };
};

export default useOpenWeatherAPI;
