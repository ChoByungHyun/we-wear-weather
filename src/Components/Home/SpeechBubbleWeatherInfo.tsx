import { FC } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import locationIcn from 'Assets/icon-location.svg';
import pcScreen from 'Atom/pcScreen';

interface SpeechBubbleWeatherInfoProps {
  cityName: string;
  min: string | number | undefined;
  max: string | number | undefined;
  temp: string | number | undefined;
  humidity: string | number | undefined;
  label: string | undefined;
  feels_like: string | undefined;
}

const SpeechBubbleWeatherInfo: FC<SpeechBubbleWeatherInfoProps> = ({
  min,
  max,
  feels_like,
  temp,
  humidity,
  label,
  cityName,
}) => {
  const isPC = useRecoilValue(pcScreen);
  return (
    <SSpeechBubbleWeatherInfoLayout>
      <SAreaWeatherWrap $isPC={isPC}>
        <img src={locationIcn} alt='icon-location' />
        <span>
          {cityName} <strong>{label}</strong>
        </span>
      </SAreaWeatherWrap>
      <STemperatureWrap $isPC={isPC}>
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
          <p>체감 온도</p>
          <p>{feels_like}</p>
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
const SAreaWeatherWrap = styled.div<{ $isPC: boolean }>`
  text-align: left;
  display: flex;
  align-items: center;

  img {
    width: 20px;
  }

  span {
    color: var(--gray-800);
    font-size: ${(props) => (props.$isPC ? '16px' : '14px')};

    strong {
      color: var(--orange);
    }
  }
`;

const STemperatureWrap = styled.ul<{ $isPC: boolean }>`
  display: flex;
  height: 80px;
  width: 100%;
  padding-bottom: 8px;
  align-items: center;
  justify-content: space-around;

  li:first-child {
    font-size: 54px;
    font-weight: 300;
  }

  li:not(:first-child) {
    font-size: ${(props) => (props.$isPC ? '16px' : '10px')};
    color: var(--gray-800);

    p:nth-of-type(2) {
      padding-top: 12px;
      font-size: ${(props) => (props.$isPC ? '20px' : '16px')};
      color: black;
    }
  }
`;
