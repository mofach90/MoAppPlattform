import { Dialog } from '@mui/material';
import useTaskStore from '../../../../hooks/useTaskStore';
import UpdateTaskForm from './UpdateTaskForm';

const UpdateTaskDialog = () => {
  const UpdateTaskDialog = useTaskStore((state) => state.UpdateTaskDialog);
  const setUpdateTaskDialog = useTaskStore(
    (state) => state.setUpdateTaskDialog,
  );
  return (
    <Dialog
      open={UpdateTaskDialog}
      onClose={setUpdateTaskDialog}
      PaperProps={{
        elevation: 24,
        sx: {
          width: 600,
          height: 550,
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
