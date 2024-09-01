import { Box, useTheme } from '@mui/material';
import { tokens } from '../../../global/theme/theme';
import PlattformPage, { pages } from '../plattformPage';
import ManageTasks from './components/ManageTasks/ManageTasks';
import TaskDetailView from './components/TaskDetailView';
import TodoSidebar from './components/TodoSidebar';
import useTaskStore from './hooks/useTaskStore';
import { TaskStore, TopicType } from './types';
import TopicsSidebar from './components/TopicsSidebar';
import { useEffect } from 'react';

const TodoApp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const selectedTask: TaskStore['selectedTask'] = useTaskStore(
    (state) => state.selectedTask,
  );
  const selectedTopic: TopicType = useTaskStore(
    (state) => state.selectedTopic,
  );
  const tasks = useTaskStore((state) => state.tasks);
  const onprogressTasks = tasks.filter((task) => !task.isChecked);
  const completedTasks = tasks.filter((task) => task.isChecked);
  const topics :TopicType[] = []
  tasks.forEach((task)=> {
    console.log("task.topic: ", task.topic)
    console.log("topics.includes(task.topic): ", (task.topic && !topics.includes(task.topic)))
    if (task.topic && !topics.includes(task.topic)) {
      topics.push(task.topic) 
    }
  })
  const topicTasks = tasks.filter((task)=>task.topic === selectedTopic)
  useEffect(() => {
console.log("topics : ", topics)
console.log("topicTasks : ", topicTasks)
  }, [topics, topicTasks])
  
  return (
    <PlattformPage page={pages.todo} imgPath="public/assets/to-do-app.png">
      <Box margin={'15px'} borderRadius={3} display={'flex'} width={'100%'}>
        <TopicsSidebar
          title="Topics"
          topics={topics}

        />
        {/* <TodoSidebar
          variant="on-progress-tasks"
          title="TO DO"
          innerColor={colors.blueAccent[900]}
          tasks={onprogressTasks}
        /> */}
        <TodoSidebar
          // variant="finished-tasks"
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
