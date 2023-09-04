import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

const pcScreen = atom({
  key: 'pcScreen',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export default pcScreen;
