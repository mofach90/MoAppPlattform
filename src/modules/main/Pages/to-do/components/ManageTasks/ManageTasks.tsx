import CreateTaskDialog from './Components/CreateTaskDialog';
import ManageTaskButton from './Components/ManageTaskButton';
import OperationStatusNotification from './Components/OperationStatusNotification';
import RemoveTaskDialog from './Components/RemoveTaskDialog';

const ManageTasks = () => {
  return (
    <>
      <ManageTaskButton />
      <CreateTaskDialog />
      <RemoveTaskDialog />
      <OperationStatusNotification/>
    </>
  );
};

export default ManageTasks;
