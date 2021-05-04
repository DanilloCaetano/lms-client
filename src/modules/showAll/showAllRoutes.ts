import { lazy } from 'react';
import { routeTemplates } from 'utils/routes';

const ShowAll = lazy(() => import(/* webpackChunkName: "my-learning" */ './pages/ShowAll'));

export default [
  {
    path: routeTemplates.showAll,
    exact: true,
    component: ShowAll,
    metadata: {
      title: 'Ver todos',
    },
  },
];
