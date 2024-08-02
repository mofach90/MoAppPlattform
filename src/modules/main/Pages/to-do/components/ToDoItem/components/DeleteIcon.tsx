import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, Theme, useTheme } from '@mui/material';
import { tokens } from '../../../../../../global/theme/theme';
import useTaskStore from '../../../hooks/useTaskStore';

const DeleteIcon = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const setDeleteTaskDialog = useTaskStore(
    (state) => state.setDeleteTaskDialog,
  );

  return (
    <Box onClick={() => setDeleteTaskDialog()}>
      <DeleteForeverIcon
        fontSize="medium"
        sx={{
          color: colors.redAccent[700],

          '&:hover': {
            transform: 'scale(1.35)',
            boxShadow: theme.shadows[6],
          },
        }}
      />
    </Box>
  );
};

export default DeleteIcon;
