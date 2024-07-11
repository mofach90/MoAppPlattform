import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Theme } from './modules/global/theme/theme';

import data from './config/KlaroConfig.json';
import { AuthProvider } from './contexts/authProvider';
import { VersionProvider } from './contexts/versionprovider';
import Klaro from './modules/global/components/Klaro';
import ProtectRoute from './modules/global/components/ProtectRoute';
import routes from './routes/routes';

function App() {
  return (
    <Router>
      <Klaro config={data}>
        <Theme>
          <AuthProvider>
            <VersionProvider>
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
            </VersionProvider>
          </AuthProvider>
        </Theme>
      </Klaro>
    </Router>
  );
}

export default App;
