import smallWeatherIcons from 'Components/common/smallWeatherIcons';
import mainWeatherImg from 'Components/common/bigWeatherIcons';
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

interface Info {
  icon: string;
  label: string;
}

export function useMainWeatherImg(weather: string): string {
  if (thunderstorm.includes(weather)) return mainWeatherImg.rainyThunder;
  else if (rain.includes(weather)) return mainWeatherImg.rainy;
  else if (drizzle.includes(weather)) return mainWeatherImg.showerRainy;
  else if (snow.includes(weather)) return mainWeatherImg.snow;
  else if (atmosphere.includes(weather)) return mainWeatherImg.mist;
  else if (weather === 'few clouds') return mainWeatherImg.fewClouds;
  else if (weather === 'scattered clouds') return mainWeatherImg.scatteredClouds;
  else if (brokenClouds.includes(weather)) return mainWeatherImg.brokenClouds;
  else return mainWeatherImg.clear;
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
