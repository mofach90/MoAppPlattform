// TaskCard.tsx
import { Paper, Theme, useTheme } from '@mui/material';
import { tokens } from '../../../../global/theme/theme';

const TaskCard = ({ children }: { children: React.ReactNode }) => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper
      sx={{
        background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
        width: '90%',
        height: 500,
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius * 2,
        boxShadow: theme.shadows[4],
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: theme.shadows[6],
        },
      }}
    >
      {children}
    </Paper>
  );
};

export default TaskCard;
