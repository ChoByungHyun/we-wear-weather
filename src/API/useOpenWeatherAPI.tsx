import React from 'react';
import axios from 'axios';
import { config } from 'API/openWeatherAPI_Config';
const useOpenWeatherAPI = () => {
  const API_ID = config.API_ID;
  const openWeatherAxios = axios.create({
    baseURL: config.BaseURL,
  });

  async function getCityWeather(latLonData: { longitude: number; latitude: number }) {
    const lat = latLonData.latitude;
    const lon = latLonData.longitude;
    const requestURL = `?lat=${lat}&lon=${lon}&appid=${API_ID}&units=metric`;
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
