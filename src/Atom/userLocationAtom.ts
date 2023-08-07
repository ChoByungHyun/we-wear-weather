import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const userLocationAtom = atom({
  key: 'userLocation',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
export const userCityAtom = atom({
  key: 'userCityAtom',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
