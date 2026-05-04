import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Theme,
  useTheme,
} from '@mui/material';
import useDialogStore from '../../../hooks/useDialogStore';
import { tokens } from '../../../../../../global/theme/theme';

const ManageTaskButton = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const open = useDialogStore((s) => s.open);

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      icon={
        <SpeedDialIcon
          sx={{
            transform: 'scale(2)',
            color: colors.primary[400],
            height: 20,
          }}
        />
      }
      sx={{ position: 'absolute', bottom: 46, right: 46 }}
      FabProps={{
        sx: {
          backgroundColor: colors.greenAccent[400],
        },
      }}
    >
      <SpeedDialAction
        icon={<AddCircleOutlineIcon sx={{ fontSize: 30 }} />}
        tooltipTitle="Create"
        sx={{ transform: 'scale(1.2)' }}
        FabProps={{
          sx: {
            backgroundColor: colors.greenAccent[500],
          },
        }}
        onClick={() => open('createTask')}
      />

      <SpeedDialAction
        icon={<RemoveCircleOutlineIcon sx={{ fontSize: 30 }} />}
        tooltipTitle="Remove"
        sx={{ transform: 'scale(1.2)' }}
        FabProps={{
          sx: {
            backgroundColor: colors.redAccent[500],
          },
        }}
        onClick={() => open('removeTask')}
      />
    </SpeedDial>
  );
};

export default ManageTaskButton;
