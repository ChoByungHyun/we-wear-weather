import { useEffect, useState } from 'react';
import { commentBasedTemp, commentAboutClothesDetail, commentAboutTempGap, commentBasedWeather } from './dailyComments';
import { commentAboutClothes } from './dailyComments';
import { commentAboutCaution } from './dailyComments';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dailyWeather, dailyWeatherMinMax } from 'Atom/mainWeatherAtom';
import { CLOTHESLIST, FILLLIKE_WEATHER, FILLLIKE_CAUTION } from 'Constants/weatherConfig';

const DailyTempRange = 9;

const useDailyComments = () => {
  const [feelsWeather, setFeelsWeather] = useState<string>('');
  const [weather, setWeather] = useState<string>('');
  const [tempGap, setTempGap] = useState('');
  const todayWeather = useRecoilValue(dailyWeather);
  const [DailyRange] = useRecoilState(dailyWeatherMinMax);

  useEffect(() => {
    const feelsLike = todayWeather.feelsLike;
    if (feelsLike >= FILLLIKE_WEATHER.SUPERHOT) setFeelsWeather('superhot');
    else if (feelsLike >= FILLLIKE_WEATHER.HOT) setFeelsWeather('hot');
    else if (feelsLike >= FILLLIKE_WEATHER.WARM) setFeelsWeather('warm');
    else if (feelsLike >= FILLLIKE_WEATHER.COOL) setFeelsWeather('cool');
    else if (feelsLike >= FILLLIKE_WEATHER.CHILLY) setFeelsWeather('chilly');
    else if (feelsLike >= FILLLIKE_WEATHER.COLD) setFeelsWeather('cold');
    else if (feelsLike >= FILLLIKE_WEATHER.SUPERCOLD) setFeelsWeather('superCold');
    else setFeelsWeather('freeze');

    const tempDifference = DailyRange.max - DailyRange.min;
    if (tempDifference > DailyTempRange) {
      if (todayWeather.feelsLike >= FILLLIKE_WEATHER.CHILLY) {
        setTempGap('summer');
      } else {
        setTempGap('winter');
      }
    }
  }, [todayWeather.feelsLike, DailyRange.max, DailyRange.min]);

  useEffect(() => {
    if (!todayWeather.weather) return;
    const weather = todayWeather.weather;
    setWeather(extractWeather(weather));
  }, [todayWeather.weather]);

  function extractWeather(weather: string): string {
    if (weather.includes('thunderstorm')) return 'thunderstorm';
    else if (weather.includes('drizzle')) return 'drizzle';
    else if (weather.includes('clouds')) {
      if (weather.includes('broken')) return 'heavyCloud';
      else if (weather.includes('few') || weather.includes('scattered')) return 'lightCloud';
      else return 'cloud';
    } else if (weather.includes('rain')) {
      if (weather.includes('snow')) return 'snowRain';
      else if (weather.includes('shower') && weather.includes('heavy')) return 'heavyShower';
      else if (weather.includes('shower')) return 'shower';
      else if (weather.includes('heavy') || weather.includes('extreme')) return 'heavyRain';
      else if (weather.includes('light')) return 'lightRain';
      else return 'rain';
    } else if (weather.includes('snow')) {
      if (weather.includes('sleet')) return 'sleet';
      else if (weather.includes('light') || weather.includes('shower')) return 'lightSnow';
      else if (weather.includes('heavy')) return 'heavySnow';
      else return 'snow';
    } else return 'mist';
  }

  function commentWeather(): string {
    return weather && commentBasedWeather[weather][0] + commentBasedWeather[weather][1];
  }

  function commentWeatherSummary(weather: string): string {
    return weather && commentBasedWeather[weather][0];
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
    return feelsWeather && commentBasedTemp[feelsWeather];
  }

  function commentClothes(): string {
    return feelsWeather && commentAboutClothes[feelsWeather];
  }
  function commentFilteredClothes(): string[] {
    return feelsWeather ? CLOTHESLIST.filter((item) => commentAboutClothes[feelsWeather].includes(item)) : [];
  }
  function commentModalDetail(): string {
    return feelsWeather && commentAboutClothesDetail[feelsWeather].description;
  }
  function commentModalTempGap(): string {
    return feelsWeather && commentAboutTempGap[tempGap];
  }

  return {
    commentFilteredClothes,
    commentTemp,
    commentClothes,
    commentWeather,
    commentCaution,
    commentModalDetail,
    commentWeatherSummary,
    extractWeather,
    commentModalTempGap,
  };
};

export default useDailyComments;
