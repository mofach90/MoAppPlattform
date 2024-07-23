import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Box, Theme, Typography, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { MenuItem } from 'react-pro-sidebar';
import { tokens } from '../../../../global/theme/theme';
import useTaskStore from '../hooks/useTaskStore';
import { Task, TodoItemType, isSelectedTask } from '../types';

const TodoItem = ({ task }: TodoItemType) => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const selectTask = useTaskStore((state) => state.selectTask);
  const setIsChecked = useTaskStore((state) => state.setIsChecked);
  const selectedTask = useTaskStore((state) => state.selectedTask);

  const handleTaskSelected: (task: Task) => void = (task: Task) => {
    selectTask(task);
  };
  const handleIsChecked: (task: Task) => void = (task: Task) => {
    setIsChecked(task);
  };
  const checkTaskActive = (selectedTask: Task | null, task: Task) => {
    return isSelectedTask(selectedTask) && selectedTask.title === task.title;
  };

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

      <Box display={'flex'}>
        <Box onClick={() => handleIsChecked(task)} marginRight={2}>
          {task.isChecked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </Box>
        <Typography
          variant="h5"
          sx={{
            textDecoration: task.isChecked ? 'line-through' : 'none',
            }}
        >
          {task.title}
        </Typography>
      </Box>
    </MenuItem>
  );
};
export default TodoItem;
