import React, { FC } from 'react';
import WeeklyItem from 'Components/Weekly/WeeklyItem';
import smallWeatherIcons from 'Components/common/smallWeatherIcons';
import { styled } from 'styled-components';

const WeeklyForecast: FC = () => {
  // mock data
  const week = [
    {
      dt: '오늘',
      main: {
        temp: '28°',
        min: '21°',
        max: '32°',
        icon: smallWeatherIcons.clearSky,
      },
    },
    {
      dt: '수',
      main: {
        temp: '29°',
        min: '22°',
        max: '33°',
        icon: smallWeatherIcons.brokenClouds,
      },
    },
    {
      dt: '목',
      main: {
        temp: '32°',
        min: '24°',
        max: '32°',
        icon: smallWeatherIcons.fewClouds,
      },
    },
    {
      dt: '금',
      main: {
        temp: '27°',
        min: '22°',
        max: '30°',
        icon: smallWeatherIcons.rainy,
      },
    },
    {
      dt: '토',
      main: {
        temp: '28°',
        min: '25°',
        max: '31°',
        icon: smallWeatherIcons.showerRainy,
      },
    },
    {
      dt: '일',
      main: {
        temp: '28°',
        min: '21°',
        max: '32°',
        icon: smallWeatherIcons.rainyThunder,
      },
    },
  ];

  return (
    <>
      <STitle>주간 일기예보</STitle>
      <SLayout>
        {week.map((day, idx) => (
          <WeeklyItem
            key={idx}
            day={day.dt}
            min={day.main.min}
            max={day.main.max}
            temp={day.main.temp}
            icon={day.main.icon}
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
