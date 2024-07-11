import DemoDashboard from '../modules/demo/pages/dashboard/DemoDashboard';
import AboutPage from '../modules/global/Pages/AboutPage/AboutPage';
import LandingPage from '../modules/global/Pages/LandingPage/LandingPage';
import LicencePage from '../modules/global/Pages/LicencePage/LicencePage';
import FirebaseLoginPage from '../modules/global/Pages/LoginPages/firebase-login/firebaseLogin';
import FormBasedLoginPage from '../modules/global/Pages/LoginPages/form-based-login/FormBasedLogin';
import LoginPageJwtCookieStorage from '../modules/global/Pages/LoginPages/jwt-cookie-storage-login/JwtCookieStorage';
import LoginPageJwtLocalStorage from '../modules/global/Pages/LoginPages/jwt-local-storage-login/JwtlocalStorage';
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
  { path: '/login', element: <FormBasedLoginPage /> },
  { path: '/login-with-firebase', element: <FirebaseLoginPage /> },
  { path: '/login-with-social-networks', element: <LoginSocialNetworksPage /> },
  {
    path: '/login-jwt-stored-in-localSession',
    element: <LoginPageJwtLocalStorage />,
  },
  {
    path: '/login-jwt-stored-in-cookie',
    element: <LoginPageJwtCookieStorage />,
  },
  { path: '/demo-dashboard', element: <DemoDashboard />, protectedRoute: true },
  {
    path: '/main-dashboard',
    element: <HomeDashboard />,
    protectedRoute: true,
  },
  {
    path: '/to-do',
    element: <TodoApp />,
    protectedRoute: true,
  },
  {
    path: '/weather',
    element: <WeatherApp />,
    protectedRoute: true,
  },
  {
    path: '/receipe',
    element: <ReceipeApp />,
    protectedRoute: true,
  },
];

export default routes;
