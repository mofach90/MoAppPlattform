import { Box, Button, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  VersionType,
  versionContext,
} from '../../../../contexts/versionprovider';
import { DashboardButton } from '../../../LoginPage/LPComponents/goDashboardButton';
import setTextAlign from './../../../../utilities/settextAlignement';
import './Header.css';
import LoginButton from './headerComponents/LoginButton';

const Header = ({ version }: { version: VersionType['version'] }) => {
  const { toggleVersion } = useContext(versionContext);

  const { t } = useTranslation();

  const textAlign = setTextAlign();

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

          <Button
            variant="outlined"
            sx={{ whiteSpace: 'nowrap' }}
            color="inherit"
            onClick={toggleVersion}
          >
            <Typography>
              {' '}
              To&nbsp;&nbsp;
              <span style={{ color: 'red' }}>
                {version === 'main' ? 'DEMO' : 'MAIN'}
              </span>
              &nbsp;&nbsp;VERSION
            </Typography>
          </Button>
        </Stack>
      </Stack>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        height={300}
        flexWrap={'wrap'}
        textAlign={textAlign}
      >
        <Typography variant="h3">
          {t('welcome')} this is the{' '}
          <span style={{ color: 'red' }}>
            {version === 'main' ? 'Main' : 'Demo'}
          </span>{' '}
          Version
        </Typography>
        <Typography mt={2} variant="body1" width={'70%'}>
          {t('description')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
