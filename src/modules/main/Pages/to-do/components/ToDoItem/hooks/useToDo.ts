import useTaskStore from '../../../hooks/useTaskStore';
import { Task, isSelectedTask } from '../../../types';

const useToDo = () => {
  const selectTask = useTaskStore((state) => state.selectTask);
  const updateTask = useTaskStore((state) => state.updateTask);


  const handleTaskSelected: (task: Task) => void = (task: Task) => {
    selectTask(task);
  };
  const handleIsChecked: (task: Task) => Promise<void> = async (task: Task) => {
    task.isChecked= !task.isChecked
   await updateTask(task);
  };
  const checkTaskActive = (selectedTask: Task | null, task: Task) => {
    return isSelectedTask(selectedTask) && selectedTask.id === task.id;
  };
  return { handleTaskSelected, handleIsChecked, checkTaskActive };
};

export default useToDo;
