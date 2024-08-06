import { useEffect } from 'react';
import { MenuItem } from 'react-pro-sidebar';
import useTaskStore from '../../hooks/useTaskStore';
import { Task } from '../../types';
import CheckBox from './components/Checkbox';
import DeleteIcon from './components/DeleteIcon';
import TaskTitle from './components/TaskTitle';
import useToDo from './hooks/useToDo';
import { Box } from '@mui/material';

const TodoItem = ({ task }: { readonly task: Task }) => {
  const selectedTask = useTaskStore((state) => state.selectedTask);
  const { handleTaskSelected, checkTaskActive } = useToDo();

  useEffect(() => {
    console.log(
      'checkTaskActive(selectedTask, task',
      checkTaskActive(selectedTask, task),
    );
  }, []);

  return (
    <MenuItem
      active={checkTaskActive(selectedTask, task)}
      onClick={() => handleTaskSelected(task)}
    >
      <Box display={'flex'} justifyContent={'space-between'}>
        <CheckBox task={task} />
        <TaskTitle task={task} />
        <DeleteIcon />
      </Box>
    </MenuItem>
  );
};
export default TodoItem;
