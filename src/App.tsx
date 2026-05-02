import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Theme } from './modules/global/theme/theme';

import data from './config/KlaroConfig.json';
import { AuthProvider } from './contexts/authProvider';
import CircularProgressWithLabel from './modules/global/components/LoadingUtility';
import Klaro from './modules/global/components/Klaro';
import ProtectRoute from './modules/global/components/ProtectRoute';
import routes from './routes/routes';

function App() {
  return (
    <Router>
      <Klaro config={data}>
        <Theme>
          <AuthProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Suspense fallback={<CircularProgressWithLabel />}>
                <Routes>
                  {routes.map(({ path, element, protectedRoute }) => (
                    <Route
                      key={path}
                      path={path}
                      element={
                        protectedRoute ? (
                          <ProtectRoute>{element}</ProtectRoute>
                        ) : (
                          element
                        )
                      }
                    />
                  ))}
                </Routes>
              </Suspense>
            </LocalizationProvider>
          </AuthProvider>
        </Theme>
      </Klaro>
    </Router>
  );
}

export default App;
