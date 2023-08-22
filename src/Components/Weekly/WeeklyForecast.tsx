import { FC } from 'react';
import { styled } from 'styled-components';
import WeeklyItem from 'Components/Weekly/WeeklyItem';
import { useWeatherSmallIcon } from 'Components/common/useWeatherIcon';
import useForecastData from 'Hooks/useForecastData';

const WeeklyForecast: FC = () => {
  const {
    days,
    today,
    todayLoading,
    todayError,
    todayIcon,
    forecastLoading,
    forecastError,
    latLonData,
    currentCityIndex,
  } = useForecastData();

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
            icon={useWeatherSmallIcon(day.weather[0].description)}
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
