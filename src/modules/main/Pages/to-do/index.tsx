import { Box, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { tokens } from '../../../global/theme/theme';
import PlattformPage, { pages } from '../plattformPage';
import ManageTasks from './components/ManageTasks/ManageTasks';
import TaskDetailView from './components/TaskDetailView';
import TodoSidebar from './components/TodoSidebar';
import useTaskStore from './hooks/useTaskStore';
import { TaskStore } from './types';

const TodoApp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const selectedTask: TaskStore['selectedTask'] = useTaskStore(
    (state) => state.selectedTask,
  );
  const tasks = useTaskStore((state) => state.tasks);
  const onprogressTasks = tasks.filter((task) => !task.isChecked);
  const completedTasks = tasks.filter((task) => task.isChecked);

  useEffect(() => {
    console.log({ selectedTask });
  }, [selectedTask]);

  return (
    <PlattformPage page={pages.todo} imgPath="public/assets/to-do-app.png">
      <Box margin={'15px'} borderRadius={3} display={'flex'} width={'100%'}>
        <TodoSidebar
          variant="on-progress-tasks"
          title="TO DO"
          innerColor={colors.blueAccent[900]}
          tasks={onprogressTasks}
        />
        <TodoSidebar
          variant="finished-tasks"
          title="DONE"
          innerColor={colors.greenAccent[900]}
          tasks={completedTasks}
        />
        <TaskDetailView task={selectedTask} />
        <ManageTasks />
      </Box>
    </PlattformPage>
  );
};

export default TodoApp;
