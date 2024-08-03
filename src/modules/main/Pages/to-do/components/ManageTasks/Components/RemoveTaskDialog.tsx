import { Dialog } from '@mui/material';
import useManageTasksStore from '../hooks/useManageTasks';
import RemoveTaskForm from './RemoveTaskForm';

const RemoveTaskDialog = () => {
  const { openRemoveTask, handleClose } = useManageTasksStore();
  return (
    <Dialog
      open={openRemoveTask}
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
      <RemoveTaskForm />
    </Dialog>
  );
};

export default RemoveTaskDialog;
