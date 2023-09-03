import { commentBasedTemp } from './dailyComments';
import { commentAboutClothes } from './dailyComments';
import { commentAboutCaution } from './dailyComments';

const useDailyComments = (weather: string, feelsLike: number) => {
  function commentWeather() {
    if (weather?.includes('thunderstorm')) {
      return '비와 천둥번개가 치고';
    } else if (weather?.includes('drizzle')) {
      return '이슬비가 내리고';
    } else if (weather?.includes('rain')) {
      switch (weather) {
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
    } else if (weather?.includes('snow')) {
      switch (weather) {
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
    } else if (weather?.includes('clear')) {
      return '맑은';
    } else if (weather?.includes('clouds')) {
      switch (weather) {
        case 'few clouds: 11-25%':
          return '적은 구름이 있는';
        case 'scattered clouds: 25-50%':
          return '약간의 구름이 있는';
        case 'broken clouds: 51-84%':
          return '많은 양의 구름이 있는';
        case 'overcast clouds: 85-100%':
          return '흐린';
      }
    } else {
      return '안개가 자욱한';
    }
  }

  function commentCaution(): string {
    if (weather.includes('thunderstorm') || weather.includes('rain')) return commentAboutCaution.rain;
    if (feelsLike <= 10) return commentAboutCaution.cold;
    if (feelsLike <= 15) return commentAboutCaution.chilly;
    if (feelsLike >= 30) return commentAboutCaution.hot;
    return commentAboutCaution.normal;
  }

  function commentTemp(): string {
    if (feelsLike >= 27) return commentBasedTemp.summer;
    if (feelsLike >= 23) return commentBasedTemp.hot;
    if (feelsLike >= 20) return commentBasedTemp.warm;
    if (feelsLike >= 17) return commentBasedTemp.cool;
    if (feelsLike >= 12) return commentBasedTemp.chilly;
    if (feelsLike >= 10) return commentBasedTemp.cold;
    if (feelsLike >= 6) return commentBasedTemp.superCold;
    return commentBasedTemp.winterCold;
  }

  function commentClothes(): string {
    if (feelsLike >= 27) return commentAboutClothes.summer;
    if (feelsLike >= 23) return commentAboutClothes.hot;
    if (feelsLike >= 20) return commentAboutClothes.warm;
    if (feelsLike >= 17) return commentAboutClothes.cool;
    if (feelsLike >= 12) return commentAboutClothes.chilly;
    if (feelsLike >= 10) return commentAboutClothes.cold;
    if (feelsLike >= 6) return commentAboutClothes.superCold;
    return commentAboutClothes.winterCold;
  }

  return { commentTemp, commentClothes, commentWeather, commentCaution };
};

export default useDailyComments;
