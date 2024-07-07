import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { theme } from './App';
import { AuthProvider } from './contexts/authProvider';
import { VersionProvider } from './contexts/versionprovider';
import data from './data/KlaroConfig.json';
import AboutPage from './modules/global/Pages/AboutPage/AboutPage';
import LandingPage from './modules/global/Pages/LandingPage/LandingPage';
import LicencePage from './modules/global/Pages/LicencePage/LicencePage';
import FirebaseLoginPage from './modules/global/Pages/LoginPages/firebase-login/firebaseLogin';
import FormBasedLoginPage from './modules/global/Pages/LoginPages/form-based-login/FormBasedLogin';
import LoginSocialNetworksPage from './modules/global/Pages/LoginPages/social-network-based-login/LoginSocialNetworks';
import UseragreementPage from './modules/global/Pages/UserAgreement/UseragreementPage';
import Klaro from './modules/global/components/Klaro';
import HomeDashboard from './others/Pages/DashboardPage/sceanes/dashboard';
import DashboardApp from './others/Pages/DashboardPage/sceanes/dashboardPage';
import Sidebar from './others/Pages/DashboardPage/sceanes/global/Sidebar';
import Topbar from './others/Pages/DashboardPage/sceanes/global/Topbar';
import ReceipeApp from './others/Pages/DashboardPage/sceanes/receipe';
import TodoApp from './others/Pages/DashboardPage/sceanes/to-do';
import WeatherApp from './others/Pages/DashboardPage/sceanes/weather';
import { Theme } from './others/Pages/DashboardPage/theme';
import DemoProtectRoute from './others/Pages/Demo/DemoProtectRoute';
import DemoDashboard from './others/Pages/Demo/demoDashboardPage';
import ProtectRoute from './others/utilities/ProtectRoute';

export function App() {
  return (
    <Router>
      <Klaro config={data}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
            <VersionProvider>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/licence" element={<LicencePage />} />
                <Route path="/useragreement" element={<UseragreementPage />} />
                <Route path="/login" element={<FormBasedLoginPage />} />
                <Route
                  path="/login-with-firebase"
                  element={<FirebaseLoginPage />}
                />
                <Route
                  path="/login-with-social-networks"
                  element={<LoginSocialNetworksPage />}
                />
                <Route
                  path="/login-jwt-stored-in-localSession"
                  element={<LoginJwtlocalStorage />}
                />
                <Route
                  path="/login-jwt-stored-in-cookie"
                  element={<LoginJwtCookieStorage />}
                />
                <Route
                  path="/demo-dashboard"
                  element={
                    <DemoProtectRoute>
                      <DemoDashboard />
                    </DemoProtectRoute>
                  }
                />
                <Route
                  path="/main-dashboard"
                  element={
                    <ProtectRoute>
                      <DashboardApp />
                    </ProtectRoute>
                  }
                />

                <Route
                  path="/home-dashboard"
                  element={
                    <Theme>
                      <div className="app">
                        <Sidebar />
                        <main className="content">
                          <Topbar />
                          <HomeDashboard />
                        </main>
                      </div>
                    </Theme>
                  }
                />
                <Route
                  path="/to-do"
                  element={
                    <Theme>
                      <div className="app">
                        <Sidebar />
                        <main className="content">
                          <Topbar />
                          <TodoApp />
                        </main>
                      </div>
                    </Theme>
                  }
                />
                <Route
                  path="/weather"
                  element={
                    <Theme>
                      <div className="app">
                        <Sidebar />
                        <main className="content">
                          <Topbar />
                          <WeatherApp />
                        </main>
                      </div>
                    </Theme>
                  }
                />
                <Route
                  path="/receipe"
                  element={
                    <Theme>
                      <div className="app">
                        <Sidebar />
                        <main className="content">
                          <Topbar />
                          <ReceipeApp />
                        </main>
                      </div>
                    </Theme>
                  }
                />
              </Routes>
            </VersionProvider>
          </AuthProvider>
        </ThemeProvider>
      </Klaro>
    </Router>
  );
}
