import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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
import Dashboard from './Pages/DashboardPage/dashboardPage';
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
                path="/demo-dashboard"
                element={
                  <DemoProtectRoute>
                    <DemoDashboard />
                  </DemoProtectRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectRoute>
                    <Dashboard />
                  </ProtectRoute>
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
