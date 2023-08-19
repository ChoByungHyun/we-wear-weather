import React, { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import WeeklyItem from 'Components/Weekly/WeeklyItem';
import useOpenWeatherAPI from 'API/useOpenWeatherAPI';
import { userCityAtom } from 'Atom/userLocationAtom';
import { currentUserIndexAtom } from 'Atom/userLocationAtom';
import formatDateTime from 'Utils/formatDateTime';
import filterMinMax from 'Utils/filterMinMax';
import { useWeatherIcon } from 'Components/common/useWeatherIcon';

import { ItemType } from 'types/weeklyType';

const WeeklyForecast: FC = () => {
  const currentCityIndex = useRecoilValue(currentUserIndexAtom);
  const latLonData = useRecoilValue(userCityAtom);
  const { getCityWeather, getForecast } = useOpenWeatherAPI();
  const [days, setDays] = useState<ItemType[]>([]);
  console.log('🚀  days:', days);

  const {
    data: today,
    isLoading: todayLoading,
    isError: todayError,
  } = useQuery('cityWeather', () => getCityWeather(latLonData[currentCityIndex].latLonData));

  console.log(today);

  const {
    data: forecastData,
    isLoading: forecastLoading,
    isError: forecastError,
  } = useQuery('weeklyForecast', () => getForecast(latLonData[currentCityIndex].latLonData));

  const todayIcon = useWeatherIcon(today?.weather.main);

  // 주간예보 필터링 effect
  useEffect(() => {
    if (today && forecastData) {
      const objectData = forecastData?.list;
      const dataArray: ItemType[] = Object.values(objectData);
      const changedDtArr = dataArray.map((item) => {
        const formattedDate = formatDateTime(item.dt_txt); // 새로운 날짜 포맷

        return {
          ...item,
          dt: formattedDate,
        };
      });

      const filteredData = filterMinMax(changedDtArr);

      setDays(filteredData);
    }
  }, [today, forecastData]);

  if (todayLoading && forecastLoading) {
    return <p>로딩중...</p>;
  }

  if (todayError && forecastError) {
    return <p>주간예보 날씨가 존재하지 않습니다.</p>;
  }

  return (
    <>
      <STitle>
        <strong>{latLonData[currentCityIndex].cityName}</strong> 주간 예보
      </STitle>
      <SLayout>
        <WeeklyItem
          day='오늘'
          min={Math.ceil(today?.main.temp_min) + '°'}
          max={Math.ceil(today?.main.temp_max) + '°'}
          temp={Math.ceil(today?.main.temp) + '°'}
          icon={todayIcon}
        />
        {days.map((day, idx) => (
          <WeeklyItem
            key={idx}
            day={day.dt}
            min={Math.ceil(day.main.temp_min) + '°'}
            max={Math.ceil(day.main.temp_max) + '°'}
            // eslint-disable-next-line
            icon={useWeatherIcon(day.weather[0].main)}
          />
        ))}
      </SLayout>
    </>
  );
};

export default WeeklyForecast;

const STitle = styled.h1`
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 600;

  strong {
    color: var(--orange);
  }
`;

const SLayout = styled.main`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
