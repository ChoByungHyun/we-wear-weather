import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const updateDate = atom({
  key: 'updateDate',
  default: '',
});

export const userNight = atom({
  key: 'userNight',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
