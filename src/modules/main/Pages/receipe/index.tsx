import { useTheme } from '@mui/material';
import { tokens } from '../../../global/theme/theme';
import PlattformPage, { pages } from '../plattformPage';

const ReceipeApp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <PlattformPage page={pages.receipe}>{''}</PlattformPage>;
};

export default ReceipeApp;
