import AboutPage from '../modules/global/Pages/AboutPage/AboutPage';
import LandingPage from '../modules/global/Pages/LandingPage/LandingPage';
import LicencePage from '../modules/global/Pages/LicencePage/LicencePage';
import LoginSocialNetworksPage from '../modules/global/Pages/LoginPages/social-network-based-login/LoginSocialNetworks';
import UseragreementPage from '../modules/global/Pages/UserAgreement/UseragreementPage';
import HomeDashboard from '../modules/main/Pages/DashboardPage';
import ReceipeApp from '../modules/main/Pages/receipe';
import TodoApp from '../modules/main/Pages/to-do';
import WeatherApp from '../modules/main/Pages/weather';

const routes = [
  { path: '/', element: <LandingPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/licence', element: <LicencePage /> },
  { path: '/useragreement', element: <UseragreementPage /> },
  { path: '/login-with-social-networks', element: <LoginSocialNetworksPage /> },
  { path: '/main-dashboard', element: <HomeDashboard />, protectedRoute: true },
  { path: '/to-do', element: <TodoApp />, protectedRoute: true },
  { path: '/weather', element: <WeatherApp />, protectedRoute: true },
  { path: '/receipe', element: <ReceipeApp />, protectedRoute: true },
];

export default routes;
