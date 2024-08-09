import CreateTaskDialog from './Components/create-task/CreateTaskDialog';
import OperationStatusNotification from './Components/manage-notification/OperationStatusNotification';
import ManageTaskButton from './Components/ManageTaskButton';
import RemoveTaskDialog from './Components/remove-task/RemoveTaskDialog';

const ManageTasks = () => {
  return (
    <>
      <ManageTaskButton />
      <CreateTaskDialog />
      <RemoveTaskDialog />
      <OperationStatusNotification />
    </>
  );
};

export default ManageTasks;
