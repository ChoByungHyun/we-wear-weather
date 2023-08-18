export const config = {
  API_ID: process.env.REACT_APP_WEATHER_API_KEY,
  BaseURL: 'http://api.openweathermap.org/data/2.5/weather',
  ForeCastURL: 'http://api.openweathermap.org/data/2.5/forecast',
  AirPollutionURL: 'http://api.openweathermap.org/data/2.5/air_pollution',
};

export const cityNameConfig = {
  API_ID: process.env.REACT_APP_CITYNAME_API_KEY,
  BaseURL: 'https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?',
};
