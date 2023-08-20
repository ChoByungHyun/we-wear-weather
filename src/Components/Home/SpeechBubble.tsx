import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { userCityAtom, currentUserIndexAtom } from 'Atom/userLocationAtom';
import useOpenWeatherAPI from 'API/useOpenWeatherAPI';

import SpeechBubbleWeatherInfo from 'Components/Home/SpeechBubbleWeatherInfo';
import speechBubbleTail from 'Assets/speech-bubble-tail.svg';
import { useMainWeatherInfo } from 'Components/common/useWeatherIcon';

const SpeechBubble: FC = () => {
  const latLonData = useRecoilValue(userCityAtom);
  const locationIndex = useRecoilValue(currentUserIndexAtom);
  const { getCityWeather } = useOpenWeatherAPI();
  const cityRes = useQuery('currentWeather', () => getCityWeather(latLonData[locationIndex].latLonData));

  const todayInfo = cityRes?.data;
  const mainWeatherInfo = useMainWeatherInfo(todayInfo?.weather.main);

  if (cityRes.isLoading) {
    return (
      <SSpeechBubble>
        <img src={speechBubbleTail} alt=' ' />
        <p>로딩중...</p>
      </SSpeechBubble>
    );
  }
  if (cityRes.error) {
    return <p>로딩중 문제가 발생했습니다.</p>;
  }

  return (
    <SSpeechBubble>
      {/* NOTE 화면 가로 크기가 변경되면 말풍선 가로 공백이 유동적이어서, 말풍선 꼬리를 따로 아래에 붙이는 방식으로 해결 */}
      <img src={speechBubbleTail} alt=' ' />
      {/* TODO 날씨 이미지마다 말풍선을 덮는 정도가 달라 이미지 파일 수정 필요 */}
      <img src={mainWeatherInfo.icon} alt='today-weather' />
      <SpeechBubbleWeatherInfo
        cityName={latLonData[locationIndex].cityName}
        min={Math.ceil(todayInfo?.main.temp_min) + '°'}
        max={Math.ceil(todayInfo?.main.temp_max) + '°'}
        temp={Math.ceil(todayInfo?.main.temp) + '°'}
        humidity={Math.ceil(todayInfo?.main.humidity) + '%'}
        label={mainWeatherInfo.label}
      />
      <SSpeechBubbleComment>
        날씨가 흐리고 일교차가 심하네요 <br />
        가벼운 겉옷 하나 챙기는건 어떨까요?
      </SSpeechBubbleComment>
    </SSpeechBubble>
  );
};

export default SpeechBubble;

const SSpeechBubble = styled.article`
  width: calc(100% - 32px);
  height: 250px;
  margin-bottom: 100px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  text-align: center;
  padding: 0 16px;

  & > img:nth-of-type(1) {
    position: absolute;
    bottom: -70px;
    left: calc(50% - 160px);
  }

  & > img:nth-of-type(2) {
    position: absolute;
    top: -80px;
    right: 0;
  }
`;

const SSpeechBubbleComment = styled.p`
  padding: 24px 0 36px 0;
  font-size: 16px;
  color: var(--gray-800);
  font-weight: 500;
  border-top: 1px solid var(--gray-200);
  line-height: 150%;
`;
