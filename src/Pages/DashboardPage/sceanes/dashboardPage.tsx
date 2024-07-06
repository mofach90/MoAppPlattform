import { Theme } from '../theme';
import '../theme.css';
import Sidebar from './global/Sidebar';
import Topbar from './global/Topbar';

function DashboardApp() {
  // const navigate = useNavigate();
  return (
    <Theme>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
        </main>
      </div>
    </Theme>
  );
}

export default DashboardApp;
