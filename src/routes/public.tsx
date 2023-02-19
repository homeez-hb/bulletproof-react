import { lazyImport } from '@/utils/lazyImport';

const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes');
const { AboutUs } = lazyImport(() => import('@/features/about-us'), 'AboutUs');
const { RenovationLoan } = lazyImport(() => import('@/features/renovationloan'), 'RenovationLoan');

export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
  {
    path: '/',
    element: <AboutUs />,
  },
  {
    path: '/renovation-loan',
    element: <RenovationLoan />,
  },
];
