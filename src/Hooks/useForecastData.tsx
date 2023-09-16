import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { currentUserIndexAtom, userCityAtom } from 'Atom/userLocationAtom';
import useOpenWeatherAPI from 'API/useOpenWeatherAPI';
import { ItemType } from 'types/weeklyType';
import { useQuery } from 'react-query';
import { useWeatherSmallIcon } from 'Components/common/useWeatherImg';
import { changeDate } from 'Utils/changeDate';
import filterMinMax from 'Utils/filterMinMax';
import { changeHour } from 'Utils/changeHour';

const useForecastData = () => {
  const currentCityIndex = useRecoilValue(currentUserIndexAtom);
  const latLonData = useRecoilValue(userCityAtom);
  const { getCityWeather, getForecast } = useOpenWeatherAPI();
  const [days, setDays] = useState<ItemType[]>([]);
  const [forecast, setForecast] = useState<ItemType[]>([]);
  const [hourlyWeather, setHourlyWeather] = useState<ItemType[]>([]);

  const {
    data: today,
    isLoading: todayLoading,
    isError: todayError,
  } = useQuery('cityWeather', () => getCityWeather(latLonData[currentCityIndex].latLonData));

  const todayIcon = useWeatherSmallIcon(today?.weather[0].description);

  const {
    data: forecastData,
    isLoading: forecastLoading,
    isError: forecastError,
  } = useQuery('weeklyForecast', () => getForecast(latLonData[currentCityIndex].latLonData));

  useEffect(() => {
    if (today && forecastData) {
      const changedDtArr = changeDate(forecastData);
      const changedHourArr = changeHour(changedDtArr);
      const filteredData = filterMinMax(changedDtArr);
      setForecast(changedDtArr);
      setDays(filteredData);
      setHourlyWeather(changedHourArr);
    }
  }, [today, forecastData]);

  return {
    days,
    forecast,
    hourlyWeather,
    today,
    todayLoading,
    todayError,
    todayIcon,
    forecastLoading,
    forecastError,
    latLonData,
    currentCityIndex,
  };
};

export default useForecastData;
