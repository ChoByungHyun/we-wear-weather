import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'GlobalStyle';
import SLayout from 'Components/style/SLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { StyleSheetManager } from 'styled-components';

const queryClient = new QueryClient();

function App() {
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RecoilRoot>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'active'}>
          <SLayout>
            <GlobalStyle />
            <Outlet />
          </SLayout>
        </StyleSheetManager>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
