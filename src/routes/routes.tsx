import { lazy } from 'react';
import AboutPage from '../modules/global/Pages/AboutPage/AboutPage';
import LandingPage from '../modules/global/Pages/LandingPage/LandingPage';
import LicencePage from '../modules/global/Pages/LicencePage/LicencePage';
import LoginSocialNetworksPage from '../modules/global/Pages/LoginPages/social-network-based-login/LoginSocialNetworks';
import UseragreementPage from '../modules/global/Pages/UserAgreement/UseragreementPage';
import ProtectRoute from '../modules/global/components/ProtectRoute';

const HomeDashboard = lazy(() => import('../modules/main/Pages/DashboardPage'));
const TodoApp = lazy(() => import('../modules/main/Pages/to-do'));
const WeatherApp = lazy(() => import('../modules/main/Pages/weather'));
const ReceipeApp = lazy(() => import('../modules/main/Pages/receipe'));

const routes = [
  { path: '/', element: <LandingPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/licence', element: <LicencePage /> },
  { path: '/useragreement', element: <UseragreementPage /> },
  { path: '/login-with-social-networks', element: <LoginSocialNetworksPage /> },
  {
    path: '/main-dashboard',
    element: (
      <ProtectRoute>
        <HomeDashboard />
      </ProtectRoute>
    ),
  },
  {
    path: '/to-do',
    element: (
      <ProtectRoute>
        <TodoApp />
      </ProtectRoute>
    ),
  },
  {
    path: '/weather',
    element: (
      <ProtectRoute>
        <WeatherApp />
      </ProtectRoute>
    ),
  },
  {
    path: '/receipe',
    element: (
      <ProtectRoute>
        <ReceipeApp />
      </ProtectRoute>
    ),
  },
];

export default routes;
