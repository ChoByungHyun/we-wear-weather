import { atom } from 'recoil';

export const updateDate = atom({
  key: 'updateDate',
  default: '',
});

export const userNight = atom({
  key: 'userNight',
  default: true,
});
