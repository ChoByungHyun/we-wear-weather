import { useEffect, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { RecoilRoot, useRecoilValue } from 'recoil';
import GlobalStyle from 'GlobalStyle';
import SLayout from 'Components/style/SLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { StyleSheetManager } from 'styled-components';
import useSetScreen from 'Hooks/useSetScreen';
import { preloadImages } from 'Utils/preloadImages';

const queryClient = new QueryClient();

function App() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.active);
    });
  }
  useEffect(() => {
    const setHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setHeight();
  }, []);

  const isPC = useSetScreen();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'active'}>
        <SLayout $isPC={isPC}>
          <GlobalStyle />
          <Outlet />
        </SLayout>
      </StyleSheetManager>
    </QueryClientProvider>
  );
}

export default App;
