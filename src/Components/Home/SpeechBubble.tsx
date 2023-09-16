import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userCityAtom, currentUserIndexAtom } from 'Atom/userLocationAtom';
import useOpenWeatherAPI from 'API/useOpenWeatherAPI';
import SpeechBubbleWeatherInfo from 'Components/Home/SpeechBubbleWeatherInfo';
import speechBubbleTail from 'Assets/speech-bubble-tail.svg';
import { useMainWeatherImg } from 'Components/common/useWeatherImg';
import { updateDate, userNight } from 'Atom/updateDate';
import { dailyWeather, dailyWeatherMinMax } from 'Atom/mainWeatherAtom';
import SpeechBubbleComment from './SpeechBubbleComment';
import { useWeatherKr } from 'Components/common/useWeatherImg';
import { SpeechBubbleSkeleton } from 'Components/Skeleton/HomeSkeleton';

const SpeechBubble: FC = () => {
  const latLonData = useRecoilValue(userCityAtom);
  const locationIndex = useRecoilValue(currentUserIndexAtom);
  const setIsUpdateDate = useSetRecoilState(updateDate);
  const setUpdateNight = useSetRecoilState(userNight);
  const setTodayWeather = useSetRecoilState(dailyWeather);
  const setMinMax = useSetRecoilState(dailyWeatherMinMax);
  const { getCityWeather } = useOpenWeatherAPI();
  const cityRes = useQuery('currentWeather', () => getCityWeather(latLonData[locationIndex].latLonData));

  const todayInfo = cityRes?.data;
  const mainWeatherImg = useMainWeatherImg(todayInfo?.weather[0].description);
  const weatherNotice = useWeatherKr(todayInfo?.weather[0].description);

  useEffect(() => {
    setTodayWeather({
      temp: Math.ceil(todayInfo?.main.temp) + '°',
      weather: todayInfo?.weather[0].description,
      feelsLike: Math.round(todayInfo?.main.feels_like),
    });
    setMinMax({
      min: Math.ceil(todayInfo?.main.temp_min),
      max: Math.ceil(todayInfo?.main.temp_max),
    });
  }, [todayInfo, setTodayWeather, setMinMax]);

  if (cityRes.isLoading) {
    return <SpeechBubbleSkeleton />;
  }
  if (cityRes.error) {
    return <p>로딩중 문제가 발생했습니다.</p>;
  }

  if (cityRes.dataUpdatedAt) {
    const date = new Date(cityRes.dataUpdatedAt);
    date.setHours(date.getHours() + 9);
    const formattedDate = date.toISOString().slice(0, 16).replace('T', ' ');
    setIsUpdateDate(formattedDate);

    const isNight: number | string = parseInt(formattedDate.slice(10, 13));
    if (formattedDate && isNight > 18) {
      setUpdateNight(true);
    } else if (0 <= isNight && isNight < 5) {
      setUpdateNight(true);
    } else {
      setUpdateNight(false);
    }
  }

  return (
    <SSpeechBubble>
      {/* NOTE 화면 가로 크기가 변경되면 말풍선 가로 공백이 유동적이어서, 말풍선 꼬리를 따로 아래에 붙이는 방식으로 해결 */}
      <img src={speechBubbleTail} alt=' ' />
      {/* TODO 날씨 이미지마다 말풍선을 덮는 정도가 달라 이미지 파일 수정 필요 */}
      <img src={mainWeatherImg} alt='today-weather' />
      <SpeechBubbleWeatherInfo
        cityName={latLonData[locationIndex].cityName}
        min={Math.ceil(todayInfo?.main.temp_min) + '°'}
        max={Math.ceil(todayInfo?.main.temp_max) + '°'}
        temp={Math.ceil(todayInfo?.main.temp) + '°'}
        humidity={Math.ceil(todayInfo?.main.humidity) + '%'}
        label={weatherNotice}
        feels_like={Math.ceil(todayInfo?.main.feels_like) + '°'}
      />
      <SpeechBubbleComment />
    </SSpeechBubble>
  );
};

export default SpeechBubble;

const SSpeechBubble = styled.article`
  width: calc(100% - 32px);
  height: 260px;
  margin-bottom: -20px;
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
