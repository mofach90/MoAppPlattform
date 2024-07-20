import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Task } from '../types';
import TaskCard from './TaskCard';

const TaskDetailView = ({ task }: { task: Task | null }) => {
  useEffect(() => {
    console.log('Tasks from TaskDetailView comp', task);
  }, [task]);

  return (
    <Box width={'100%'} display={'flex'} justifyContent={'center'}>
      {task ? (
        <TaskCard>
          <Typography variant="h4">{task.title}</Typography>
          <Typography variant="body1">{task.description}</Typography>
        </TaskCard>
      ) : (
        <Typography variant="h3">Select a task to see the details</Typography>
      )}
    </Box>
  );
};

export default TaskDetailView;
