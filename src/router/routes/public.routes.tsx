import { routerType } from '@/router/types/router.types';

import { About } from '@/router/lazyImports/lazyImports.public';
import { Privacy } from '@/router/lazyImports/lazyImports.public';

const publicRoutes: routerType[] = [
  {
    path: 'about',
    element: <About />,
    title: 'about',
  },
  {
    path: 'privacy',
    element: <Privacy />,
    title: 'privacy',
  },
];

export default publicRoutes;
