import React from 'react';
import { createRoot } from 'react-dom/client';
import router from 'Router/Router';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root') as Element | DocumentFragment;
const root = createRoot(container);

root.render(
  <RecoilRoot>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </RecoilRoot>,
);
