import { Paper, Theme, useTheme } from '@mui/material';
import { tokens } from '../../../../global/theme/theme';

const TaskCard = ({ children }: { children: React.ReactNode }) => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper
      sx={{
        backgroundColor: 'pink',
        width: '90%',
        padding: 5,
        height: 300,
        borderRadius: 9,
      }}
    >
      {children}
    </Paper>
  );
};

export default TaskCard;
