import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const dailyWeather = atom({
  key: 'dailyWeather',
  default: ['clear', 0],
  effects_UNSTABLE: [persistAtom],
});
