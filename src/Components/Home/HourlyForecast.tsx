import { FC } from 'react';
import styled from 'styled-components';
import useForecastData from 'Hooks/useForecastData';
import { useWeatherSmallIcon } from 'Components/common/useWeatherIcon';
import { ItemType } from 'types/weeklyType';

const HourlyForecast = () => {
  const { hourlyWeather } = useForecastData();
  return (
    <SHourlyForecastLayout>
      {hourlyWeather.map((weather, index) => {
        //eslint-disable-next-line
        const icon = useWeatherSmallIcon(weather.weather[0].description);
        return (
          <SforecastWrap key={index}>
            <img src={icon} alt='시간대별 날씨 아이콘' />
            <p>{Math.ceil(weather.main.temp)}&#186;</p>
            <p>{weather.hour}</p>
          </SforecastWrap>
        );
      })}
    </SHourlyForecastLayout>
  );
};

export default HourlyForecast;

const SHourlyForecastLayout = styled.article`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 11.5px 20px;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid var(--gray-200);
  border-radius: 10px;
  -ms-overflow-style: none;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SforecastWrap = styled.div`
  text-align: center;
  flex-shrink: 0;

  p:nth-of-type(1) {
    margin-bottom: 3px;
  }

  p:nth-of-type(2) {
    color: var(--gray-800);
    font-size: 10px;
  }
`;
