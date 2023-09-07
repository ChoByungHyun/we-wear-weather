import React from 'react';
import axios from 'axios';
import { cityNameConfig } from './openWeatherAPI_Config';

const cityNameAPI = async (latlon: { lat: number; lon: number }) => {
  const API_KEY = cityNameConfig.API_ID;
  const requestURL = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${latlon.lon}&y=${latlon.lat}`;

  const response = await axios
    .get(requestURL, {
      headers: { Authorization: `KakaoAK ${API_KEY}` },
    })
    .then((res) => res.data.documents[0])
    .catch((error) => console.log(error));
  return response;
};

export default cityNameAPI;
