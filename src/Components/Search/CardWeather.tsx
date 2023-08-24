import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import CardWave from './CardWave';
import CardRain from './CardRain';
import { useWeatherIcon, useWeatherKr } from 'Components/common/useWeatherIcon';
import useSearchedCities from 'Hooks/useSearchedCites';
import { useNavigate } from 'react-router-dom';

interface CardWeatherProps {
  min: number;
  max: number;
  temp: number;
  weather: string;
  name: string;
}

const CardWeather: FC<CardWeatherProps> = ({ temp, max, min, weather, name }) => {
  const [isNight, setIsNight] = useState<boolean>(false);
  const [isRain, setIsRain] = useState<boolean>(false);
  const currentDate = new Date();
  const currentTime: number = Number(currentDate.toTimeString().slice(0, 2));
  const { findCityIndexByName, setUserCityChange } = useSearchedCities();
  const navigate = useNavigate();

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

  function handleWeatherCard() {
    if (name === '현재 위치') {
      setUserCityChange(0);
    } else {
      setUserCityChange(findCityIndexByName(name));
    }
    navigate('/');
  }

  return (
    <SCardWeatherWrap isNight={isNight} onClick={handleWeatherCard}>
      <STemp>{Math.ceil(temp) + '°'}</STemp>
      <SCardContents>
        <SMinMaxWrap>
          <span>최고: {max.toFixed(1) + '°'}</span>
          <div />
          <span>최저: {min.toFixed(1) + '°'}</span>
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
  cursor: pointer;
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
