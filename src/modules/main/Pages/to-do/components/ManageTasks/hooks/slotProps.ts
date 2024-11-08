import { useTheme } from '@mui/material';
import { PickersActionBarAction } from '@mui/x-date-pickers';
import { tokens } from '../../../../../../global/theme/theme';

const useSlotProps = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const slotProps = {
    actionBar: {
      actions: [
        'clear',
        'today',
        'accept',
        'cancel',
      ] as PickersActionBarAction[],
      sx: {
        '& .MuiButton-text': {
          color: 'white',
          backgroundColor: `${colors.greenAccent[600]}`,
          ':hover': {
            backgroundColor: `${colors.greenAccent[500]}`,
          },
        },
      },
    },
    calendarHeader: { sx: { border: '1px yellow solid' } },
  };
  return { slotProps };
};

export default useSlotProps;
