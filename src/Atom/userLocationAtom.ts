import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

const userLocationAtom = atom({
  key: 'userLocation',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export default userLocationAtom;
