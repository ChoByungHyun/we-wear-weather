import smallWeatherIcons from 'Components/common/smallWeatherIcons';

const week = [
  {
    dt: '오늘',
    main: {
      temp: '28°',
      min: '21°',
      max: '32°',
      icon: smallWeatherIcons.rainy,
      name: '비옴',
    },
  },
  {
    dt: '수',
    main: {
      temp: '29°',
      min: '22°',
      max: '33°',
      icon: smallWeatherIcons.brokenClouds,
      name: '구름 조금',
    },
  },
  {
    dt: '목',
    main: {
      temp: '32°',
      min: '24°',
      max: '32°',
      icon: smallWeatherIcons.fewClouds,
      name: '흐린 날씨',
    },
  },
  {
    dt: '금',
    main: {
      temp: '27°',
      min: '22°',
      max: '30°',
      icon: smallWeatherIcons.clearSky,
      name: '맑은날씨',
    },
  },
  {
    dt: '토',
    main: {
      temp: '28°',
      min: '25°',
      max: '31°',
      icon: smallWeatherIcons.showerRainy,
      name: '소나기',
    },
  },
  {
    dt: '일',
    main: {
      temp: '28°',
      min: '21°',
      max: '32°',
      icon: smallWeatherIcons.rainyThunder,
      name: '천둥번개',
    },
  },
];

export default week;
