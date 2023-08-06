import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import CardWave from './CardWave';
import CardRain from './CardRain';
import { useWeatherIcon, useWeatherKr } from 'Components/common/useWeatherIcon';

interface CardWeatherProps {
  min: string | number | undefined;
  max: string | number | undefined;
  temp: string | number | undefined;
  weather: string | undefined;
  name: string | undefined;
}

const CardWeather: FC<CardWeatherProps> = ({ temp, max, min, weather, name }) => {
  const [isNight, setIsNight] = useState<boolean>(false);
  const [isRain, setIsRain] = useState<boolean>(false);
  const currentDate = new Date();
  const currentTime: number = Number(currentDate.toTimeString().slice(0, 2));

  useEffect(() => {
    if (15 < currentTime) {
      setIsNight(true);
    } else if (0 <= currentTime && currentTime < 5) {
      setIsNight(true);
    } else {
      setIsNight(false);
    }

    switch (weather) {
      case 'Thunderstorm':
        setIsRain(true);
        break;
      case 'Rain':
        setIsRain(true);
        break;
      default:
        setIsRain(false);
    }
  }, [currentDate, weather]);

  return (
    <SCardWeatherWrap isNight={isNight}>
      <STemp>{String(temp).slice(0, 2) + '°'}</STemp>
      <SCardContents>
        <SMinMaxWrap>
          <span>최고: {String(max).slice(0, 2) + '°'}</span>
          <div />
          <span>최저: {String(min).slice(0, 2) + '°'}</span>
        </SMinMaxWrap>
        <STempWrap>
          <img src={useWeatherIcon(weather)} alt='날씨 아이콘' />
          <span>{useWeatherKr(weather)}</span>
        </STempWrap>
        <h3>{name}</h3>
      </SCardContents>
      <CardWave isNight={isNight} />
      {isRain && <CardRain isNight={isNight} />}
    </SCardWeatherWrap>
  );
};

interface SCardWeatherWrapProps {
  isNight: boolean;
}

const SCardWeatherWrap = styled.section<SCardWeatherWrapProps>`
  margin-top: 32px;
  background-color: ${(props) => (props.isNight ? '#30406B' : '#fdaa56;')};
  padding: 16px 24px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  overflow: hidden;
  position: relative;
`;

const STemp = styled.p`
  font-size: 64px;
  font-family: 'Pretendard-Lighter';
`;

const SCardContents = styled.div`
  text-align: right;
  h3 {
    font-size: 20px;
  }
`;

const SMinMaxWrap = styled.div`
  display: flex;
  justify-content: right;
  gap: 8px;
  font-size: 12px;
  margin-bottom: 16px;

  div {
    background-color: rgba(255, 255, 255, 0.4);
    width: 1px;
  }
`;

const STempWrap = styled.div`
  span {
    font-weight: bolder;
    font-size: 13px;
  }

  img {
    vertical-align: middle;
    margin-right: 4px;
  }
`;

export default CardWeather;
