import { Dialog } from '@mui/material';
import useDialogStore from '../../../../hooks/useDialogStore';
import UpdateTaskForm from './UpdateTaskForm';

const UpdateTaskDialog = () => {
  const activeDialog = useDialogStore((s) => s.activeDialog);
  const close = useDialogStore((s) => s.close);
  return (
    <Dialog
      open={activeDialog === 'updateTask'}
      onClose={close}
      PaperProps={{
        elevation: 24,
        sx: {
          width: 600,
          height: 650,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          opacity: 0.8,
        },
      }}
    >
      <UpdateTaskForm />
    </Dialog>
  );
};

export default UpdateTaskDialog;
