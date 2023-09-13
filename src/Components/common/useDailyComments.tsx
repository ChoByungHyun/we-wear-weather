import React, { JSXElementConstructor, useEffect, useState } from 'react';
import { commentBasedTemp, commentAboutClothesDetail } from './dailyComments';
import { commentAboutClothes } from './dailyComments';
import { commentAboutCaution } from './dailyComments';
import { useRecoilState } from 'recoil';
import { dailyWeather, dailyWeatherMinMax } from 'Atom/mainWeatherAtom';
import { CLOTHESLIST, FILLLIKE_WEATHER, FILLLIKE_CAUTION } from 'Constants/weatherConfig';

const DailyTempRange = 9;

const useDailyComments = () => {
  const [feelsWeather, setFeelsWeather] = useState<string>('');
  const [caution, setCaution] = useState<string>('');
  const [todayWeather, setTodayWeather] = useRecoilState(dailyWeather);
  console.log('🚀 ~ file: useDailyComments.tsx:13 ~ useDailyComments ~ todayWeather:', todayWeather);
  const [DailyRange] = useRecoilState(dailyWeatherMinMax);
  console.log('🚀 ~ file: useDailyComments.tsx:14 ~ useDailyComments ~ forecastRange:', DailyRange);

  useEffect(() => {
    if (todayWeather.feelsLike >= FILLLIKE_WEATHER.SUPERHOT) setFeelsWeather('superhot');
    else if (todayWeather.feelsLike >= FILLLIKE_WEATHER.HOT) setFeelsWeather('hot');
    else if (todayWeather.feelsLike >= FILLLIKE_WEATHER.WARM) setFeelsWeather('warm');
    else if (todayWeather.feelsLike >= FILLLIKE_WEATHER.COOL) setFeelsWeather('cool');
    else if (todayWeather.feelsLike >= FILLLIKE_WEATHER.CHILLY) setFeelsWeather('chilly');
    else if (todayWeather.feelsLike >= FILLLIKE_WEATHER.COLD) setFeelsWeather('cold');
    else if (todayWeather.feelsLike >= FILLLIKE_WEATHER.SUPERCOLD) setFeelsWeather('superCold');
    else setFeelsWeather('freeze');

    // const tempDifference = DailyRange.max - DailyRange.min;
    // if (tempDifference > DailyTempRange) {
    //   // 일교차가 큰 경우
    //   if (todayWeather.feelsLike >= FILLLIKE_WEATHER.HOT) {
    //     setFeelsWeather('hot');
    //   } else if (todayWeather.feelsLike >= FILLLIKE_WEATHER.WARM) {
    //     setFeelsWeather('warm');
    //   } else if (todayWeather.feelsLike >= FILLLIKE_WEATHER.COOL) {
    //     setFeelsWeather('cool');
    //   } else {
    //     setFeelsWeather('chilly');
    //   }
    // } else {
    //   // 일교차가 크지 않은 경우
    //   if (todayWeather.feelsLike >= FILLLIKE_WEATHER.CHILLY) {
    //     setFeelsWeather('chilly');
    //   } else if (todayWeather.feelsLike >= FILLLIKE_WEATHER.COLD) {
    //     setFeelsWeather('cold');
    //   } else if (todayWeather.feelsLike >= FILLLIKE_WEATHER.SUPERCOLD) {
    //     setFeelsWeather('superCold');
    //   } else {
    //     setFeelsWeather('freeze');
    //   }
    // }
  }, [todayWeather.feelsLike]);

  function commentWeather() {
    if (todayWeather.weather?.includes('thunderstorm')) {
      return '비와 천둥번개가 치고';
    } else if (todayWeather.weather?.includes('drizzle')) {
      return '이슬비가 내리고';
    } else if (todayWeather.weather?.includes('rain')) {
      switch (todayWeather.weather) {
        case 'light rain':
          return '약간의 비가 내리고';
        case 'moderate rain':
          return '비가 내리고';
        case 'heavy intensity rain':
          return '많은 비가 내리고';
        case 'very heavy rain':
          return '많은 비가 내리고';
        case 'extreme rain':
          return '폭우가 내리고';
        case 'freezing rain':
          return '비가 내리고';
        case 'light intensity shower rain':
          return '많은 양의 소나기가 내리고';
        case 'heavy intensity shower rain':
          return '많은 양의 소나기가 내리고';
        case 'shower rain':
          return '소나기가 내리고';
        case 'ragged shower rain':
          return '소나기가 내리고';
        case 'light rain and snow':
          return '눈 또는 비가 내리고';
        case 'rain and snow':
          return '눈 또는 비가 내리고';
      }
    } else if (todayWeather.weather?.includes('snow')) {
      switch (todayWeather.weather) {
        case 'light snow':
          return '약간의 눈이 내리고';
        case 'snow':
          return '눈이 내리고';
        case 'heavy snow':
          return '많은 눈이 내리고';
        case 'sleet':
          return '진눈깨비가 내리고';
        case 'light shower sleet':
          return '진눈깨비가 내리고';
        case 'shower sleet':
          return '잠깐의 진눈깨비가 내리고';
        case 'light shower snow':
          return '약간의 눈이 내리고';
        case 'shower snown':
          return '약간의 눈이 내리고';
        case 'heavy shower snow':
          return '약간의 눈이 내리고';
      }
    } else if (todayWeather.weather?.includes('clear')) {
      return '맑은';
    } else if (todayWeather.weather?.includes('clouds')) {
      switch (todayWeather.weather) {
        case 'few clouds':
          return '적은 구름이 있는';
        case 'scattered clouds':
          return '약간의 구름이 있는';
        case 'broken clouds':
          return '많은 양의 구름이 있는';
        case 'overcast clouds':
          return '흐린';
      }
    } else {
      return '안개가 자욱한';
    }
  }

  function commentCaution(): string {
    if (todayWeather.weather?.includes('thunderstorm') || todayWeather.weather?.includes('rain'))
      return commentAboutCaution.rain;
    if (todayWeather.feelsLike <= FILLLIKE_CAUTION.COLD) return commentAboutCaution.cold;
    if (todayWeather.feelsLike <= FILLLIKE_CAUTION.CHILLY) return commentAboutCaution.chilly;
    if (todayWeather.feelsLike >= FILLLIKE_CAUTION.HOT) return commentAboutCaution.hot;
    return commentAboutCaution.normal;
  }

  function commentTemp(): string {
    return commentBasedTemp[feelsWeather];
  }

  function commentClothes(): string {
    return commentAboutClothes[feelsWeather];
  }
  function commentFilteredClothes(): string[] {
    return feelsWeather ? CLOTHESLIST.filter((item) => commentAboutClothes[feelsWeather].includes(item)) : [];
  }
  function commentModalDetail(): string {
    return feelsWeather && commentAboutClothesDetail[feelsWeather].description;
  }

  return {
    commentFilteredClothes,
    commentTemp,
    commentClothes,
    commentWeather,
    commentCaution,
    commentModalDetail,
  };
};

export default useDailyComments;
