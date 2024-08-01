import { Dialog, useTheme } from '@mui/material';
import useTaskStore from '../../../hooks/useTaskStore';
import ComfirmDelete from './ComfirmDelete';
import { Theme } from '../../../../../types/mainTypes';
import { tokens } from '../../../../../../global/theme/theme';

const DeleteConfirmDialog = () => {
  const deleteTaskDialog = useTaskStore((state) => state.deleteTaskDialog);
  const setDeleteTaskDialog = useTaskStore(
    (state) => state.setDeleteTaskDialog,
  );
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette?.mode ?? 'dark');
  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
      setDeleteTaskDialog();
    }
  };
  return (
    <Dialog
      open={deleteTaskDialog}
      onClose={handleClose}
      PaperProps={{
        elevation: 24,
        sx: {
          width: 350,
          height: 160,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          backgroundColor: colors.primary[100],
          opacity: 0.8,
        },
      }}
    >
      <ComfirmDelete />
    </Dialog>
  );
};

export default DeleteConfirmDialog;
