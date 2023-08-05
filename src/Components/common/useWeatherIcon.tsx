import smallWeatherIcons from 'Components/common/smallWeatherIcons';

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
