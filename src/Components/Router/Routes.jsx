
import UserDetails from '../../UserDetails/UserDetails';
import LoadUsers from '../Users/LoadUsers';
import { createBrowserRouter } from 'react-router-dom';
import baseUrl from '../../apiConfig';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadUsers />,
  },
  {
    path: "/user/:id",
    element: <UserDetails />,
    loader: ({ params }) =>
      fetch(`${baseUrl}/users/${params.id}`),
  }
]);

export default router
