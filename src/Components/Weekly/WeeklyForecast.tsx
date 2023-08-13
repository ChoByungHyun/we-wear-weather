import React, { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import WeeklyItem from 'Components/Weekly/WeeklyItem';
import useOpenWeatherAPI from 'API/useOpenWeatherAPI';
import { userLocationAtom } from 'Atom/userLocationAtom';
import formatDateTime from 'Utils/formatDateTime';
import filterMinMax from 'Utils/filterMinMax';
import { useWeatherIcon } from 'Components/common/useWeatherIcon';

import { ItemType } from 'types/weeklyType';

const WeeklyForecast: FC = () => {
  const latLonData = useRecoilValue(userLocationAtom);
  const { getCityWeather, getForecast } = useOpenWeatherAPI();
  const [days, setDays] = useState<ItemType[]>([]);

  const cityRes = useQuery('cityWeather', () => getCityWeather(latLonData));
  const weeklyRes = useQuery('weeklyForecast', () => getForecast(latLonData));

  const today = cityRes?.data;
  const todayIcon = useWeatherIcon(today?.weather.main);

  // 주간예보 필터링 effect
  useEffect(() => {
    if (weeklyRes.data) {
      const objectData = weeklyRes.data?.list;
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
  }, [weeklyRes.data]);

  if (weeklyRes.isLoading) {
    return <p>로딩중...</p>;
  }

  if (weeklyRes.isError) {
    return <p>주간예보 날씨가 존재하지 않습니다.</p>;
  }

  return (
    <>
      <STitle>{weeklyRes.data?.city.name} 주간 일기예보</STitle>
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
            temp={Math.ceil(day.main.temp) + '°'}
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
`;

const SLayout = styled.main`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
