import { Dialog } from '@mui/material';
import useTaskStore from '../../../hooks/useTaskStore';

const DeleteConfirmDialog = () => {
  const deleteTaskDialog = useTaskStore((state) => state.deleteTaskDialog);
  const setDeleteTaskDialog = useTaskStore(
    (state) => state.setDeleteTaskDialog,
  );
  const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
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
          width: 800,
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          opacity: 0.8,
        },
      }}
    >
      Hello
    </Dialog>
  );
};

export default DeleteConfirmDialog;
