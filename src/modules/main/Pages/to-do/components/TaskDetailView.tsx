// TaskDetailView.tsx
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Task } from '../types';
import TaskCard from './TaskCard';

const TaskDetailView = ({ task }: { task: Task | null }) => {
  useEffect(() => {
    console.log('Tasks from TaskDetailView comp', task);
  }, [task]);

  return (
    <Box
      width={'100%'}
      display={'flex'}
      justifyContent={'center'}
      padding={3}
    >
      {task ? (
        <TaskCard>
          <Typography
            variant="h4"
            gutterBottom
            fontWeight="bold"
            color="#333"
            marginBottom={10}
          >
            {task.title}
          </Typography>
          <Typography variant="h4" color="#555">
            {task.description}
          </Typography>
        </TaskCard>
      ) : (
        <Typography variant="h5" textAlign="center" color="#333">
          Select a task to see the details
        </Typography>
      )}
    </Box>
  );
};

export default TaskDetailView;
