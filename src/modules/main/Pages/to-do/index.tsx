import { Box, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { tokens } from '../../../global/theme/theme';
import PlattformPage, { pages } from '../plattformPage';
import ManageTasks from './components/ManageTasks/ManageTasks';
import TaskDetailView from './components/TaskDetailView';
import TodoSidebar from './components/TodoSidebar';
import TopicsSidebar from './components/TopicsSidebar';
import useTaskStore from './hooks/useTaskStore';
import { TaskStore, TopicType } from './types';

const TodoApp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const addTasksFromFirestore = useTaskStore(
    (state) => state.addTasksFromFirestore,
  );
  const selectedTask: TaskStore['selectedTask'] = useTaskStore(
    (state) => state.selectedTask,
  );
  const selectedTopic: TopicType = useTaskStore((state) => state.selectedTopic);
  const tasks = useTaskStore((state) => state.tasks);

  useEffect(() => {
    addTasksFromFirestore();
  }, [addTasksFromFirestore]);

  const topics: TopicType[] = [];
  tasks.forEach((task) => {
    if (task.topic && !topics.includes(task.topic)) {
      topics.push(task.topic);
    }
  });

  const topicTasks = tasks.filter((task) => task.topic === selectedTopic);

  return (
    <PlattformPage page={pages.todo} imgPath="public/assets/to-do-app.png">
      <Box margin={'15px'} borderRadius={3} display={'flex'} width={'100%'}>
        <TopicsSidebar title="Topics" topics={topics} />
        <TodoSidebar
          title="Tasks"
          innerColor={colors.greenAccent[900]}
          tasks={topicTasks}
        />
        {selectedTask ? <TaskDetailView task={selectedTask} /> : null}
        <ManageTasks />
      </Box>
    </PlattformPage>
  );
};

export default TodoApp;
