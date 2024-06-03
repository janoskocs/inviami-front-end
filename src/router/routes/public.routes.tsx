import { routerType } from '@/router/types/router.types';

import { About, EventAdmin } from '@/router/lazyImports/lazyImports.public';
import { Privacy } from '@/router/lazyImports/lazyImports.public';
import { Templates } from '@/router/lazyImports/lazyImports.public';
import EventTemplateLoader from '@/features/events';

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
  {
    path: 'templates',
    element: <Templates />,
    title: 'templates',
  },
  {
    path: 'event-admin',
    element: <EventAdmin />,
    title: 'event admin',
  },
  {
    path: 'event-admin/:eventLink',
    element: <EventAdmin />,
    title: 'event admin',
  },
  {
    path: '/:eventLink',
    element: <EventTemplateLoader />,
    title: 'event invite',
  },
];

export default publicRoutes;
