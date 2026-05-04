import { Dialog } from '@mui/material';
import useDialogStore from '../../../../hooks/useDialogStore';
import CreateTaskForm from './CreateTaskForm';

const CreateTaskDialog = () => {
  const activeDialog = useDialogStore((s) => s.activeDialog);
  const close = useDialogStore((s) => s.close);
  return (
    <Dialog
      open={activeDialog === 'createTask'}
      onClose={close}
      PaperProps={{
        elevation: 24,
        sx: {
          width: 800,
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
      <CreateTaskForm />
    </Dialog>
  );
};

export default CreateTaskDialog;
