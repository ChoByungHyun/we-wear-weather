import React from 'react';
import axios from 'axios';
import { cityNameConfig } from './openWeatherAPI_Config';

const cityNameAPI = async (latlon: { latitude: number; longitude: number }) => {
  const API_KEY = cityNameConfig.API_ID;
  const requestURL = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${latlon.longitude}&y=${latlon.latitude}`;

  const response = await axios
    .get(requestURL, {
      headers: { Authorization: `KakaoAK ${API_KEY}` },
    })
    .then((res) => res.data.documents[0])
    .catch((error) => console.log(error));
  return response;
};

export default cityNameAPI;
