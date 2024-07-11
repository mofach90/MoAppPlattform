import { useTheme } from '@mui/material';
import { tokens } from '../../../global/theme/theme';
import PlattformPage, { pages } from '../plattformPage';

const HomeDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <PlattformPage page={pages.dashboard}>{''}</PlattformPage>;
};

export default HomeDashboard;
