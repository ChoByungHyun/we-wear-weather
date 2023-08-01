import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import CardWave from './CardWave';
import CardRain from './CardRain';

interface CardWeatherProps {
  min: string | number | undefined;
  max: string | number | undefined;
  temp: string | number | undefined;
  icon: string | undefined;
  name: string | undefined;
}

const CardWeather: FC<CardWeatherProps> = ({ temp, max, min, icon, name }) => {
  const [isNight, setIsNight] = useState<boolean>(false);
  const [isRain, setIsRain] = useState<boolean>(false);
  const currentDate = new Date();
  const currentTime: number = Number(currentDate.toTimeString().slice(0, 2));

  useEffect(() => {
    if (15 < currentTime) {
      setIsNight(true);
    } else if (0 < currentTime && currentTime < 5) {
      setIsNight(true);
    } else {
      setIsNight(false);
    }
  }, [currentTime]);

  useEffect(() => {
    switch (name) {
      case '비옴':
        setIsRain(true);
        break;
      case '소나기':
        setIsRain(true);
        break;
      case '천둥번개':
        setIsRain(true);
        break;
    }
  });

  return (
    <SCardWeatherWrap isNight={isNight}>
      <STemp>{temp}</STemp>
      <SCardContents>
        <SMinMaxWrap>
          <span>최고: {max}</span>
          <div />
          <span>최저: {min}</span>
        </SMinMaxWrap>
        <STempWrap>
          <img src={icon} alt='날씨 아이콘' />
          <span>{name}</span>
        </STempWrap>
        <h3>서울시 구로구</h3>
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
  justify-content: space-around;
  gap: 6px;
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
