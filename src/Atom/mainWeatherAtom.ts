import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const dailyWeather = atom({
  key: 'dailyWeather',
  default: {
    temp: '',
    weather: '',
    feelsLike: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export const dailyWeatherMinMax = atom({
  key: 'dailyWeatherMinMax',
  default: {
    min: 0,
    max: 0,
  },
});
