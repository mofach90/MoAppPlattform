import { Box, Stack} from '@mui/material';

import { DashboardButton } from './Components/DashboardButton/DashboardButton';
import LoginButton from './Components/LoginButton/LoginButton';
import './utils/Header.css';
import GoToVersionButton from './Components/GoToVersionButton/GoToVersionButton';

const Header = () => {


  return (
    <Box
      sx={{
        backgroundImage: `url(src/assets/nikolaj-habib-J9T8mIL5f4M-unsplash.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Stack
        direction={'row'}
        width={'100%'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <img
          src="assets/logomoPNG.png"
          alt="Logo"
          className="logo-animation"
          style={{ width: 100, height: 100 }}
        />
        <Stack direction={'row'} gap={2} mr={2} alignItems="center">
          <DashboardButton />
          <LoginButton />
          <GoToVersionButton />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
