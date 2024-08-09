import { Box, useTheme } from '@mui/material';
import { tokens } from '../../../global/theme/theme';
import PlattformPage, { pages } from '../plattformPage';
import UpdateTaskDialog from './components/ManageTasks/Components/update-task/UpdateTaskDialog';
import ManageTasks from './components/ManageTasks/ManageTasks';
import TaskDetailView from './components/TaskDetailView';
import DeleteConfirmDialog from './components/ToDoItem/components/DeleteConfirmDialog';
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

  return (
    <PlattformPage page={pages.todo} imgPath="public/assets/to-do-app.png">
      {/* <PushNotification/> // first need of it - todo */}
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
        {selectedTask ? <TaskDetailView task={selectedTask} /> : null}
        <ManageTasks />
        <DeleteConfirmDialog />
        <UpdateTaskDialog />
      </Box>
    </PlattformPage>
  );
};

export default TodoApp;
