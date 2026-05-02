import { Dialog, useTheme } from '@mui/material';
import { tokens } from '../../../../../../global/theme/theme';
import { Theme } from '../../../../../types/mainTypes';
import useTaskStore from '../../../hooks/useTaskStore';
import ComfirmDelete from './ComfirmDelete';

const DeleteConfirmDialog = () => {
  const deleteTaskDialog = useTaskStore((state) => state.deleteTaskDialog);
  const setDeleteTaskDialog = useTaskStore(
    (state) => state.setDeleteTaskDialog,
  );
  const deleteTopicDialog = useTaskStore((state) => state.deleteTopicDialog);
  const setDeleteTopicDialog = useTaskStore(
    (state) => state.setDeleteTopicDialog,
  );
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette?.mode ?? 'dark');
  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
      deleteTaskDialog ? setDeleteTaskDialog() : setDeleteTopicDialog();
    }
  };


  return (
    <Dialog
      open={deleteTaskDialog || deleteTopicDialog}
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
