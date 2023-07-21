import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'GlobalStyle';
import SLayout from 'Components/style/SLayout';

function App() {
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <RecoilRoot>
      <SLayout>
        <GlobalStyle />
        <Outlet />
      </SLayout>
    </RecoilRoot>
  );
}

export default App;
