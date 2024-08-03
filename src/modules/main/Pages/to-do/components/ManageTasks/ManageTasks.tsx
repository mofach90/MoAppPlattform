import CreateTaskDialog from './Components/CreateTaskDialog';
import ManageTaskButton from './Components/ManageTaskButton';
import RemoveTaskDialog from './Components/RemoveTaskDialog';

const ManageTasks = () => {
  return (
    <>
      <ManageTaskButton />
      <CreateTaskDialog />
      <RemoveTaskDialog />
    </>
  );
};

export default ManageTasks;
