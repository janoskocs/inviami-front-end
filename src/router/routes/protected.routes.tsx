import { routerType } from '@/router/types/router.types';

import { Dashboard } from '../lazyImports/lazyImports.protected';

const protectedRoutes: routerType[] = [
  {
    path: '/',
    element: <Dashboard />,
    title: 'dashboard',
  },
];

export default protectedRoutes;
