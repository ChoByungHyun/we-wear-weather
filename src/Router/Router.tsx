import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Home from 'Pages/Home';
import Search from 'Pages/Search';
import Weekly from 'Pages/Weekly';
import Setting from 'Pages/Setting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'login',
        element: '',
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'weekly',
        element: <Weekly />,
      },
      {
        path: 'setting',
        element: <Setting />,
      },
    ],
  },
]);

export default router;
