import React, { FC } from 'react';
import { styled } from 'styled-components';
import week from 'Mock/weather';
import CardWeather from './CardWeather';

const CardWaveList: FC = () => {
  return (
    <CardWaveLayout>
      {week?.map((el, index) => {
        return (
          <CardWeather
            key={index}
            temp={el.main.temp}
            max={el.main.max}
            min={el.main.min}
            icon={el.main.icon}
            name={el.main.name}
          />
        );
      })}
    </CardWaveLayout>
  );
};

const CardWaveLayout = styled.article``;

export default CardWaveList;
