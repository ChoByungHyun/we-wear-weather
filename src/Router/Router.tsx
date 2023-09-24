import { Outlet, createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Home from 'Pages/Home';
import Permission from 'Pages/Permission';
import Login from 'Pages/Login';
import Search from 'Pages/Search';
import Weekly from 'Pages/Weekly';
import Setting from 'Pages/Setting';
import SearchDetail from 'Pages/SearchDetail';
import Landing from 'Pages/Landing';
import ProtectRoute from 'Components/ProtectRoute';
import InstallationManual from 'Components/InstallationManual';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'permission',
        element: <Permission />,
      },
      {
        path: 'profile',
        element: <Login />,
      },
      {
        path: 'manual',
        element: <InstallationManual />,
      },

      {
        element: (
          <ProtectRoute>
            <Outlet />
          </ProtectRoute>
        ),
        children: [
          {
            path: 'home',
            element: <Home />,
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
    ],
  },
]);

export default router;
