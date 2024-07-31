import { useTheme } from '@emotion/react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../../../global/theme/theme';
import { Theme } from '../../../types/mainTypes';
const DarkLightToggleButton = () => {
  const theme: Theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <IconButton type="button" onClick={colorMode.toggleColorMode}>
      {theme.palette?.mode === 'dark' ? (
        <DarkModeOutlinedIcon />
      ) : (
        <LightModeOutlinedIcon />
      )}
    </IconButton>
  );
};

export default DarkLightToggleButton;
