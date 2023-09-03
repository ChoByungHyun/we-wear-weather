import userInfoAtom from 'Atom/userInfo';
import { useRecoilValue } from 'recoil';
import { characterImgs } from './characterImgs';

export default function useCharacters(feelsLike: number): string {
  const userInfo = useRecoilValue(userInfoAtom);
  const gender = userInfo.gender === '남성' ? 0 : 1;

  if (feelsLike >= 27) return characterImgs[gender].summer;
  else if (feelsLike >= 23) return characterImgs[gender].springSummer;
  else if (feelsLike >= 20) return characterImgs[gender].spring;
  else if (feelsLike >= 17) return characterImgs[gender].summerFall;
  else if (feelsLike >= 12) return characterImgs[gender].springFall;
  else if (feelsLike >= 10) return characterImgs[gender].fall;
  else if (feelsLike >= 6) return characterImgs[gender].fallWinter;
  else return characterImgs[gender].training;
}
