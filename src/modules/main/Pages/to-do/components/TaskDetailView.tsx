import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import { Task } from '../types';
import TaskCard from './TaskCard';
import DeleteIcon from './ToDoItem/components/DeleteIcon';
import UpdateButton from './ToDoItem/components/UpdateButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WarningIcon from '@mui/icons-material/Warning';

const TaskDetailView = ({ task }: { task: Task | null }) => {
  useEffect(() => {
    console.log('Tasks from TaskDetailView comp', task);
  }, [task]);

  const renderDueDate = (dueDate: string) => {
    const now = dayjs();
    const taskDueDate = dayjs(dueDate);
    const isOverdue = taskDueDate.isBefore(now);
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent={"center"}
        width={"100%"}
        maxWidth={400}
        padding={2}
        borderRadius={1}
        bgcolor={isOverdue ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 255, 0.25)'}
      >
        <AccessTimeIcon color={isOverdue ? 'error' : 'warning'} />
        <Typography
          variant="h6"
          color={isOverdue ? "error" : "black"}
          marginLeft={1}
          display="flex"
        >
          Due Date: {taskDueDate.format('YYYY-MM-DD HH:mm:ss')}
          {isOverdue && (
            <Box display="flex" alignItems="center" marginLeft={2}>
              <WarningIcon fontSize="medium" color="error" />
              <Typography variant="body2" color="error" marginLeft={1.5}>
                Overdue
              </Typography>
            </Box>
          )}
        </Typography>
      </Box>
    );
  };

  return (
    <Box width={'100%'} display={'flex'} justifyContent={'center'} padding={3}>
      {task ? (
        <TaskCard>
          <Box
            display={'flex'}
            justifyContent={'flex-end'}
            width={'100%'}
            alignItems={'center'}
            marginBottom={2}
          >
            <UpdateButton />
            <DeleteIcon fontSize="large" />
          </Box>
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
          <Box width={'100%'} display={"flex"} justifyContent={"center"}>

          {task.dueDate && renderDueDate(task.dueDate)}
          </Box>
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
