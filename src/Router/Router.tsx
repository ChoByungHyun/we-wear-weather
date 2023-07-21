import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: '<App />',
    children: [
      {
        path: '',
        element: 'home',
      },
      {
        path: 'login',
        element: '',
      },
      {
        path: 'products/:id',
        element: '',
      },
      {
        path: 'signup',
        element: '',
      },
    ],
  },
]);

export default router;
