import { lazy } from 'react';
import { routeTemplates } from 'utils/routes';

const Course = lazy(() => import(/* webpackChunkName: "my-learning" */ './pages/Course'));

export default [
  {
    path: routeTemplates.course,
    exact: true,
    component: Course,
    metadata: {
      title: 'Curso',
    },
  },
];
