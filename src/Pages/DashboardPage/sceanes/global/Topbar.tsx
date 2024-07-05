import { useTheme } from '@emotion/react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, InputBase, Stack } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, Mode, tokens } from '../../theme';

interface Theme {
  palette?: {
    mode: Mode;
  };
}

const Topbar = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette?.mode ?? 'dark');
  const colorMode = useContext(ColorModeContext);
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
        <IconButton type="button" onClick={colorMode.toggleColorMode}>
          {theme.palette?.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Stack>
  );
};

export default Topbar;
