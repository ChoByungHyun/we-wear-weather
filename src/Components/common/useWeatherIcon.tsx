import smallWeatherIcons from 'Components/common/smallWeatherIcons';
import mainWeatherInfo from 'Components/common/bigWeatherIcons';
import particulateStatus from './particulate';

import { thunderstorm, drizzle, rain, snow, atmosphere, brokenClouds } from 'Utils/iconDesc';

export function useWeatherIcon(weather: string | undefined): string | undefined {
  switch (weather) {
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
  switch (weather) {
    case 'Thunderstorm':
      return '천둥 번개';
    case 'Drizzle':
      return '비 조금';
    case 'Rain':
      return '비 옴';
    case 'Snow':
      return '눈 옴';
    case 'Clouds':
      return '구름 조금';
    case 'Clear':
      return '맑은 날씨';
    default:
      return '흐린 날씨';
  }
}

interface Info {
  icon: string;
  label: string;
}

export function useMainWeatherInfo(weather: string | undefined): Info {
  switch (weather) {
    case 'Thunderstorm':
      return mainWeatherInfo.rainyThunder;
    case 'Drizzle':
      return mainWeatherInfo.showerRainy;
    case 'Rain':
      return mainWeatherInfo.rainy;
    case 'Snow':
      return mainWeatherInfo.snow;
    case 'Clouds':
      return mainWeatherInfo.fewClouds;
    case 'Clear':
      return mainWeatherInfo.clear;
    default:
      return mainWeatherInfo.mist;
  }
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
