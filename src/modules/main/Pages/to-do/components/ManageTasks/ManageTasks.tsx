import DeleteConfirmDialog from '../TopicItem/components/DeleteConfirmDialog';
import CreateTask from './Components/create-task/CreateTask';
import OperationStatusNotification from './Components/manage-notification/OperationStatusNotification';
import ManageTaskButton from './Components/ManageTaskButton';
import RemoveTask from './Components/remove-task/RemoveTask';
import UpdateTask from './Components/update-task/UpdateTask';

const ManageTasks = () => {
  return (
    <>
      <ManageTaskButton />
      <CreateTask />
      <RemoveTask />
      <OperationStatusNotification />
      <UpdateTask />
      <DeleteConfirmDialog />
    </>
  );
};

export default ManageTasks;
