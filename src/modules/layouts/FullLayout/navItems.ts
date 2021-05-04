import { faBorderAll, faPencilRuler } from '@fortawesome/free-solid-svg-icons';

import { routeTemplates } from 'utils/routes';

export const sideNavItems = [
  {
    icon: faBorderAll,
    label: 'Minha Area',
    path: routeTemplates.home,
  },
  {
    icon: faPencilRuler,
    label: 'Meus Cursos',
    path: routeTemplates.myCourses,
  },
];

export const avatarNavItems = [
  {
    label: 'Minha Conta',
    path: routeTemplates.home,
  },
];
