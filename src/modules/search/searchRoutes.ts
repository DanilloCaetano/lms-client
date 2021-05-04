import { lazy } from 'react';
import { routeTemplates } from 'utils/routes';

const Search = lazy(() => import(/* webpackChunkName: "my-learning" */ './pages/Search'));

export default [
  {
    path: routeTemplates.search,
    exact: true,
    component: Search,
    metadata: {
      title: 'Resultado',
    },
  },
];
