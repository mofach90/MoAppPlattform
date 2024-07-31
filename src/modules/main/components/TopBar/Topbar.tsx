import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, InputBase, Stack, useTheme } from '@mui/material';
import { tokens } from '../../../global/theme/theme';
import { Theme } from '../../types/mainTypes';
import LogoutButton from './components/LogoutButton';
import DarkLightToggleButton from './components/DarkLightToggleButton';

const Topbar = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette?.mode ?? 'dark');
  return (
    <Stack
      display={'flex'}
      justifyContent="space-between"
      p={2}
      flexDirection={'row'}
    >
      <Box
        display="flex"
        sx={{ backgroundColor: colors.primary[400] }}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display={'flex'}>
        <DarkLightToggleButton/>
        <LogoutButton />
      </Box>
    </Stack>
  );
};

export default Topbar;
