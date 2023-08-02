import React, { FC } from 'react';
import WeeklyItem from 'Components/Weekly/WeeklyItem';
import week from 'Mock/weather';
import { styled } from 'styled-components';

const WeeklyForecast: FC = () => {
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
