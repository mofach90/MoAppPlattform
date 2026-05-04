import { Dialog } from '@mui/material';
import useDialogStore from '../../../../hooks/useDialogStore';
import RemoveTaskForm from './RemoveTaskForm';

const RemoveTaskDialog = () => {
  const activeDialog = useDialogStore((s) => s.activeDialog);
  const close = useDialogStore((s) => s.close);
  return (
    <Dialog
      open={activeDialog === 'removeTask'}
      onClose={close}
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
      <RemoveTaskForm />
    </Dialog>
  );
};

export default RemoveTaskDialog;
