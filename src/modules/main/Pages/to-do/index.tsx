import { useTheme } from '@mui/material';
import { tokens } from '../../../global/theme/theme';
import PlattformPage, { pages } from '../plattformPage';

const TodoApp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <PlattformPage page={pages.todo}>{''}</PlattformPage>;
};

export default TodoApp;
