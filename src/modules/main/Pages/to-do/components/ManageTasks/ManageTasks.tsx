import DeleteConfirmDialog from '../ToDoItem/components/DeleteConfirmDialog';
import CreateTaskDialog from './Components/create-task/CreateTaskDialog';
import OperationStatusNotification from './Components/manage-notification/OperationStatusNotification';
import ManageTaskButton from './Components/ManageTaskButton';
import RemoveTaskDialog from './Components/remove-task/RemoveTaskDialog';
import UpdateTaskDialog from './Components/update-task/UpdateTaskDialog';

const ManageTasks = () => {
  return (
    <>
      <ManageTaskButton />
      <CreateTaskDialog />
      <RemoveTaskDialog />
      <OperationStatusNotification />
      <UpdateTaskDialog />
      <DeleteConfirmDialog />
    </>
  );
};

export default ManageTasks;
