import useTaskStore from '../../../hooks/useTaskStore';
import { Task, isSelectedTask } from '../../../types';

const useToDo = () => {
  const selectTask = useTaskStore((state) => state.selectTask);
  const setIsChecked = useTaskStore((state) => state.setIsChecked);

  const handleTaskSelected: (task: Task) => void = (task: Task) => {
    selectTask(task);
  };
  const handleIsChecked: (task: Task) => void = (task: Task) => {
    setIsChecked(task);
  };
  const checkTaskActive = (selectedTask: Task | null, task: Task) => {
    return isSelectedTask(selectedTask) && selectedTask.id === task.id;
  };
  return { handleTaskSelected, handleIsChecked, checkTaskActive };
};

export default useToDo;
