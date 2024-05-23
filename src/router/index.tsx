import { useRoutes } from 'react-router-dom';

import protectedRoutes from './routes/protected.routes';
import publicRoutes from './routes/public.routes';

import { Suspense } from 'react';
import LandingPage from '@/pages/LandingPage';
import Spinner from '@/components/Spinner';
import LandingLayout from '@/components/Layout/LandingLayout';

export const AppRoutes = () => {
  const commonRoutes = [
    {
      path: '/',
      element: (
        <LandingLayout>
          <LandingPage />
        </LandingLayout>
      ),
    },
  ];

  const auth = { user: false };

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return (
    <>
      <Suspense fallback={<Spinner />}>{element}</Suspense>
    </>
  );
};
