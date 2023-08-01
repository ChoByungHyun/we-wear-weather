import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Home from 'Pages/Home';
import Permission from 'Pages/Permission';
import Login from 'Pages/Login';
import Search from 'Pages/Search';
import Weekly from 'Pages/Weekly';
import Setting from 'Pages/Setting';
import SearchDetail from 'Pages/SearchDetail';

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
        path: 'permission',
        element: <Permission />,
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
      {
        path: 'searchDetail',
        element: <SearchDetail />,
      },
    ],
  },
]);

export default router;
