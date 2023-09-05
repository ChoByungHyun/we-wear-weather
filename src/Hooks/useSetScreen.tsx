import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import pcScreen from 'Atom/pcScreen';

const useSetScreen: () => boolean = () => {
  const [isPCScreen, setIsPCScreen] = useRecoilState(pcScreen);

  useEffect(() => {
    function resizeScreen() {
      if (window.innerWidth > 768) setIsPCScreen(true);
      else setIsPCScreen(false);
    }

    resizeScreen();
    window.addEventListener('resize', resizeScreen);
  }, [setIsPCScreen]);

  return isPCScreen;
};

export default useSetScreen;
