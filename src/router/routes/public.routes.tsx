import { routerType } from '@/router/types/router.types';

import { About } from '@/router/lazyImports/lazyImports.public';

const publicRoutes: routerType[] = [
  {
    path: 'about',
    element: <About />,
    title: 'about',
  },
];

export default publicRoutes;
