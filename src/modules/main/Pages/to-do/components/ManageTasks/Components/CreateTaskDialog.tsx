import { Dialog } from '@mui/material';
import useManageTasksStore from '../hooks/useManageTasks';
import CreateTaskForm from './CreateTaskForm';

const CreateTaskDialog = () => {
  const { openCreateTask, handleClose } = useManageTasksStore();
  return (
    <Dialog
      open={openCreateTask}
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
        },
      }}
    >
      <CreateTaskForm />
    </Dialog>
  );
};

export default CreateTaskDialog;
