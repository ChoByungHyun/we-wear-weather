import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'GlobalStyle';
import SLayout from 'Components/style/SLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

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
        <SLayout>
          <GlobalStyle />
          <Outlet />
        </SLayout>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
