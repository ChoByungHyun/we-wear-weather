import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

const userInfoAtom = atom({
  key: 'userInfo',
  default: {
    gender: '',
    age: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export default userInfoAtom;
