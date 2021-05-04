import { lazy } from 'react';
import { routeTemplates } from 'utils/routes';

const MyCourses = lazy(() => import(/* webpackChunkName: "my-learning" */ './pages/MyCourses'));

export default [
  {
    path: routeTemplates.myCourses,
    exact: true,
    component: MyCourses,
    metadata: {
      title: 'Meus Cursos',
    },
  },
];
