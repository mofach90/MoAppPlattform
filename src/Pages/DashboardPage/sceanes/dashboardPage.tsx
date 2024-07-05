import { useNavigate } from 'react-router-dom';
import { Theme } from '../theme';
import '../theme.css';
import Sidebar from './global/Sidebar';
import Topbar from './global/Topbar';

function Dashboard() {
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

export default Dashboard;
