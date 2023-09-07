import smallWeatherIcons from 'Components/common/smallWeatherIcons';
import mainWeatherInfo from 'Components/common/bigWeatherIcons';
import particulateStatus from './particulate';

import { thunderstorm, drizzle, rain, snow, atmosphere, brokenClouds } from 'Utils/iconDesc';

export function useWeatherIcon(main: string | undefined): string | undefined {
  switch (main) {
    case 'Thunderstorm':
      return smallWeatherIcons.rainyThunder;
    case 'Drizzle':
      return smallWeatherIcons.showerRainy;
    case 'Rain':
      return smallWeatherIcons.rainy;
    case 'Snow':
      return smallWeatherIcons.snow;
    case 'Clouds':
      return smallWeatherIcons.fewClouds;
    case 'Clear':
      return smallWeatherIcons.clear;
    default:
      return smallWeatherIcons.mist;
  }
}

export function useWeatherSmallIcon(weather: string) {
  if (thunderstorm.includes(weather)) return smallWeatherIcons.rainyThunder;
  else if (rain.includes(weather)) return smallWeatherIcons.rainy;
  else if (drizzle.includes(weather)) return smallWeatherIcons.showerRainy;
  else if (snow.includes(weather)) return smallWeatherIcons.snow;
  else if (atmosphere.includes(weather)) return smallWeatherIcons.mist;
  else if (weather === 'clear sky') return smallWeatherIcons.clear;
  else if (weather === 'few clouds') return smallWeatherIcons.fewClouds;
  else if (weather === 'scattered clouds') return smallWeatherIcons.scatteredClouds;
  else if (brokenClouds.includes(weather)) return smallWeatherIcons.brokenClouds;
}

export function useWeatherKr(weather: string | undefined): string | undefined {
  if (weather?.includes('thunderstorm')) {
    return '비와 천둥번개';
  } else if (weather?.includes('drizzle')) {
    return '이슬비';
  } else if (weather?.includes('rain')) {
    switch (weather) {
      case 'light rain':
        return '약간의 비';
      case 'moderate rain':
        return '비';
      case 'heavy intensity rain':
        return '많은 비';
      case 'very heavy rain':
        return '많은 비';
      case 'extreme rain':
        return '폭우';
      case 'freezing rain':
        return '비가';
      case 'light intensity shower rain':
        return '많은 양의 소나기';
      case 'heavy intensity shower rain':
        return '많은 양의 소나기';
      case 'shower rain':
        return '소나기';
      case 'ragged shower rain':
        return '소나기';
      case 'light rain and snow':
        return '눈 또는 비';
      case 'rain and snow':
        return '눈 또는 비';
    }
  } else if (weather?.includes('snow')) {
    switch (weather) {
      case 'light snow':
        return '약간의 눈';
      case 'snow':
        return '눈';
      case 'heavy snow':
        return '많은 눈';
      case 'sleet':
        return '진눈깨비';
      case 'light shower sleet':
        return '진눈깨비';
      case 'shower sleet':
        return '잠깐의 진눈깨비';
      case 'light shower snow':
        return '약간의 눈';
      case 'shower snown':
        return '약간의 눈';
      case 'heavy shower snow':
        return '약간의 눈';
    }
  } else if (weather?.includes('clear')) {
    return '맑은 날씨';
  } else if (weather?.includes('clouds')) {
    switch (weather) {
      case 'few clouds':
        return '적은 구름';
      case 'scattered clouds':
        return '약간의 구름';
      case 'broken clouds':
        return '많은 양의 구름';
      case 'overcast clouds':
        return '흐린 날씨';
    }
  } else {
    return '안개';
  }
}

interface Info {
  icon: string;
  label: string;
}

export function useMainWeatherInfo(weather: string): Info {
  if (thunderstorm.includes(weather)) return mainWeatherInfo.rainyThunder;
  else if (rain.includes(weather)) return mainWeatherInfo.rainy;
  else if (drizzle.includes(weather)) return mainWeatherInfo.showerRainy;
  else if (snow.includes(weather)) return mainWeatherInfo.snow;
  else if (atmosphere.includes(weather)) return mainWeatherInfo.mist;
  else if (weather === 'few clouds') return mainWeatherInfo.fewClouds;
  else if (weather === 'scattered clouds') return mainWeatherInfo.scatteredClouds;
  else if (brokenClouds.includes(weather)) return mainWeatherInfo.brokenClouds;
  else return mainWeatherInfo.clear;
}

export function useParticulateImg(status: number): Info {
  if (status <= 15) {
    return particulateStatus.good;
  } else if (status <= 35) {
    return particulateStatus.soso;
  } else if (status <= 75) {
    return particulateStatus.bad;
  } else {
    return particulateStatus.superbad;
  }
}
