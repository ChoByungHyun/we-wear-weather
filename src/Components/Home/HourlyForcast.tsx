import React, { FC } from 'react';
import styled from 'styled-components';

import brokenClouds from '../../Assets/icons-sm-weather/icon-broken-clouds.svg';
import clearSky from '../../Assets/icons-sm-weather/icon-clear-sky.svg';
import fewClouds from '../../Assets/icons-sm-weather/icon-few-clouds.svg';
import mist from '../../Assets/icons-sm-weather/icon-mist.svg';
import rainyThunder from '../../Assets/icons-sm-weather/icon-rainy-thunder.svg';
import rainy from '../../Assets/icons-sm-weather/icon-rainy.svg';
import scatteredClouds from '../../Assets/icons-sm-weather/icon-scattered-clouds.svg';
import showerRainy from '../../Assets/icons-sm-weather/icon-shower-rainy.svg';
import snow from '../../Assets/icons-sm-weather/icon-snow.svg';

interface HourlyForcastProps {}

const HourlyForcast: FC<HourlyForcastProps> = ({}) => {
  return (
    <SHourlyForcastLayout>
      <SforcastWrap>
        <img src={rainy} alt='' />
        <p>22&#186;</p>
        <p>오후 12시</p>
      </SforcastWrap>
      <SforcastWrap>
        <img src={rainyThunder} alt='' />
        <p>26&#186;</p>
        <p>오후 3시</p>
      </SforcastWrap>
      <SforcastWrap>
        <img src={snow} alt='' />
        <p>26&#186;</p>
        <p>오후 3시</p>
      </SforcastWrap>
      <SforcastWrap>
        <img src={brokenClouds} alt='' />
        <p>26&#186;</p>
        <p>오후 3시</p>
      </SforcastWrap>
      <SforcastWrap>
        <img src={clearSky} alt='' />
        <p>26&#186;</p>
        <p>오후 3시</p>
      </SforcastWrap>
      <SforcastWrap>
        <img src={fewClouds} alt='' />
        <p>26&#186;</p>
        <p>오후 3시</p>
      </SforcastWrap>
      <SforcastWrap>
        <img src={mist} alt='' />
        <p>26&#186;</p>
        <p>오후 3시</p>
      </SforcastWrap>
      <SforcastWrap>
        <img src={scatteredClouds} alt='' />
        <p>26&#186;</p>
        <p>오후 3시</p>
      </SforcastWrap>
      <SforcastWrap>
        <img src={showerRainy} alt='' />
        <p>26&#186;</p>
        <p>오후 3시</p>
      </SforcastWrap>
    </SHourlyForcastLayout>
  );
};

export default HourlyForcast;

const SHourlyForcastLayout = styled.article`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 247px;
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

const SforcastWrap = styled.div`
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
