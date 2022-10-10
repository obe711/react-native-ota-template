import { DefaultLayout } from '../Layouts';
import { Dev } from '../Views/Dev';
//import Connect from '../Views/Connect/Connect';

const protectedRoutes = [
  {
    path: '/protected',
    exact: true,
    layout: DefaultLayout,
    element: Dev,
  },
  // {
  //   path: '/connect',
  //   exact: true,
  //   layout: DefaultLayout,
  //   element: Connect,
  // },
];

export default protectedRoutes;
