import { Box, useTheme } from '@mui/material';
import { tokens } from '../../../global/theme/theme';
import PlattformPage, { pages } from '../plattformPage';
import TodoSidebar from './components/TodoSidebar';

const TodoApp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <PlattformPage page={pages.todo} imgPath="public/assets/to-do-app.png">
      <Box
        // sx={{ backgroundColor: 'pink' }}
        height={'100vh'}
        margin={'15px'}
        borderRadius={3}
      >
        <TodoSidebar />
      </Box>
    </PlattformPage>
  );
};

export default TodoApp;
