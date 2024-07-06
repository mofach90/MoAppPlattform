import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeDashboard from './Pages/DashboardPage/sceanes/dashboard';
import DashboardApp from './Pages/DashboardPage/sceanes/dashboardPage';
import Sidebar from './Pages/DashboardPage/sceanes/global/Sidebar';
import Topbar from './Pages/DashboardPage/sceanes/global/Topbar';
import ReceipeApp from './Pages/DashboardPage/sceanes/receipe';
import TodoApp from './Pages/DashboardPage/sceanes/to-do';
import WeatherApp from './Pages/DashboardPage/sceanes/weather';
import { Theme } from './Pages/DashboardPage/theme';
import DemoProtectRoute from './Pages/Demo/DemoProtectRoute';
import LandingPageDemo from './Pages/Demo/LandingPageDemo';
import DemoDashboard from './Pages/Demo/demoDashboardPage';
import AboutPage from './Pages/LandingPage/AboutPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import LicencePage from './Pages/LandingPage/LicencePage';
import UseragreementPage from './Pages/LandingPage/UseragreementPage';
import LoginPage from './Pages/LoginPage/Login';
import FirebaseLoginPage from './Pages/LoginPage/LoginFirebase';
import LoginJwtCookieStorage from './Pages/LoginPage/LoginJwt-CookiesStorage';
import LoginJwtlocalStorage from './Pages/LoginPage/LoginJwt-localStorage';
import LoginSocialNetworksPage from './Pages/LoginPage/LoginSocialNetworks';
import Klaro from './components/Klaro';
import { AuthProvider } from './contexts/authProvider';
import data from './data/KlaroConfig.json';
import ProtectRoute from './utilities/ProtectRoute';

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
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/demo" element={<LandingPageDemo />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/licence" element={<LicencePage />} />
              <Route path="/useragreement" element={<UseragreementPage />} />
              <Route path="/login" element={<LoginPage />} />
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
                path="/demodashboard"
                element={
                  <DemoProtectRoute>
                    <DemoDashboard />
                  </DemoProtectRoute>
                }
              />
              <Route
                path="/realdashboard"
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
          </AuthProvider>
        </ThemeProvider>
      </Klaro>
    </Router>
  );
}

export default App;
