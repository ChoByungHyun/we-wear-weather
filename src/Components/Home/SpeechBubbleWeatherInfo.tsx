import React, { FC } from 'react';
import styled from 'styled-components';
import locationIcn from 'Assets/icon-location.svg';

interface SpeechBubbleWeatherInfoProps {
  cityName: string;
  min: string | number | undefined;
  max: string | number | undefined;
  temp: string | number | undefined;
  humidity: string | number | undefined;
  label: string | undefined;
}

const SpeechBubbleWeatherInfo: FC<SpeechBubbleWeatherInfoProps> = ({ min, max, temp, humidity, label, cityName }) => {
  return (
    <SSpeechBubbleWeatherInfoLayout>
      <SAreaWeatherWrap>
        <img src={locationIcn} alt='icon-location' />
        <span>
          {cityName} <strong>{label}</strong>
        </span>
      </SAreaWeatherWrap>
      <STemperatureWrap>
        <li>
          <p>{temp}</p>
        </li>
        <li>
          <p>최저 온도</p>
          <p>{min}</p>
        </li>
        <li>
          <p>최고 온도</p>
          <p>{max}</p>
        </li>
        <li>
          <p>습도</p>
          <p>{humidity}</p>
        </li>
      </STemperatureWrap>
    </SSpeechBubbleWeatherInfoLayout>
  );
};

export default SpeechBubbleWeatherInfo;

const SSpeechBubbleWeatherInfoLayout = styled.section`
  padding-top: 25px;
`;
const SAreaWeatherWrap = styled.div`
  text-align: left;
  display: flex;
  align-items: center;

  img {
    width: 20px;
  }

  span {
    color: var(--gray-800);
    font-size: 14px;

    strong {
      color: var(--orange);
    }
  }
`;

const STemperatureWrap = styled.ul`
  display: flex;
  height: 80px;
  width: 100%;
  padding-bottom: 16px;
  align-items: center;
  justify-content: space-around;

  li:first-child {
    font-size: 70px;
    font-weight: 300;
  }

  li:not(:first-child) {
    font-size: 12px;
    color: var(--gray-800);

    p:nth-of-type(2) {
      padding-top: 12px;
      font-size: 20px;
      color: black;
    }
  }
`;
