import particulateGood from 'Assets/particulate-matter-good.svg';
import particulateSoso from 'Assets/particulate-matter-soso.svg';
import particulateBad from 'Assets/particulate-matter-bad.svg';
import particulateSuperBad from 'Assets/particulate-matter-superbad.svg';

const particulateStatus = {
  good: {
    icon: particulateGood,
    label: '좋음',
  },
  soso: {
    icon: particulateSoso,
    label: '보통',
  },
  bad: {
    icon: particulateBad,
    label: '나쁨',
  },
  superbad: {
    icon: particulateSuperBad,
    label: '매우 나쁨',
  },
};

export default particulateStatus;
