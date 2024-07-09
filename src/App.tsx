import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DemoProtectRoute from './modules/demo/components/DemoProtectRoute';
import DemoDashboard from './modules/demo/pages/dashboard/DemoDashboard';
import HomeDashboard from './modules/main/Pages/DashboardPage/sceanes/dashboard';
import DashboardApp from './modules/main/Pages/DashboardPage/sceanes/dashboardPage';
import Sidebar from './modules/main/Pages/DashboardPage/sceanes/global/Sidebar';
import Topbar from './modules/main/Pages/DashboardPage/sceanes/global/Topbar';
import ReceipeApp from './modules/main/Pages/DashboardPage/sceanes/receipe';
import TodoApp from './modules/main/Pages/DashboardPage/sceanes/to-do';
import WeatherApp from './modules/main/Pages/DashboardPage/sceanes/weather';
import { Theme } from './modules/main/Pages/DashboardPage/theme';

import { AuthProvider } from './contexts/authProvider';
import { VersionProvider } from './contexts/versionprovider';
import data from './config/KlaroConfig.json';
import AboutPage from './modules/global/Pages/AboutPage/AboutPage';
import LandingPage from './modules/global/Pages/LandingPage/LandingPage';
import LicencePage from './modules/global/Pages/LicencePage/LicencePage';
import FirebaseLoginPage from './modules/global/Pages/LoginPages/firebase-login/firebaseLogin';
import FormBasedLoginPage from './modules/global/Pages/LoginPages/form-based-login/FormBasedLogin';
import LoginPageJwtCookieStorage from './modules/global/Pages/LoginPages/jwt-cookie-storage-login/JwtCookieStorage';
import LoginPageJwtLocalStorage from './modules/global/Pages/LoginPages/jwt-local-storage-login/JwtlocalStorage';
import LoginSocialNetworksPage from './modules/global/Pages/LoginPages/social-network-based-login/LoginSocialNetworks';
import UseragreementPage from './modules/global/Pages/UserAgreement/UseragreementPage';
import Klaro from './modules/global/components/Klaro';
import ProtectRoute from './modules/main/components/ProtectRoute';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `    
      html {
        height: 100%;
      }
      
      body {
        margin: 0;
        padding: 0;
        height: 100%;
        background: linear-gradient(to right, rgb(0, 0, 0), #010d45);
        color: rgb(55, 255, 255);
      }
      
      #root {
        height: 100%;
      }
      
      `,
    },
  },
});

function App() {
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
                  element={<LoginPageJwtLocalStorage />}
                />
                <Route
                  path="/login-jwt-stored-in-cookie"
                  element={<LoginPageJwtCookieStorage />}
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

export default App;
