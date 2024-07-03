import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LogoutHandler } from '../../../utilities/logoutHandler';
import { HomeButton } from '../../LoginPage/LPComponents/goHomeButton';
import { Theme } from '../theme';
import  "../theme.css";
import Topbar from './global/Topbar';
import Sidebar from './global/Sidebar';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <Theme>
      <div className='app'>
        <main className='content'>
          <Topbar/>
          {/* <Sidebar/> */}

        </main>
      </div>

    </Theme>
  );
}

export default Dashboard;
