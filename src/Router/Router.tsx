import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Home from 'Pages/Home';
import Login from 'Pages/Login';
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
        element: <Login />,
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
