import { lazy } from 'react';
import { routeTemplates } from 'utils/routes';

const Home = lazy(() => import(/* webpackChunkName: "my-learning" */ './pages/Home'));

export default [
  {
    path: routeTemplates.home,
    exact: true,
    component: Home,
    metadata: {
      title: 'Home',
    },
  },
];
