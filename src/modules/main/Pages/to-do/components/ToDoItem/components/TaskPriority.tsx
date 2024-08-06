import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Task } from '../../../types';

const TaskPriority = ({ task }: { readonly task: Task }) => {
  return (
    <>
      {task.priority === 'high' ? (
        <KeyboardDoubleArrowUpIcon sx={{ color: 'red' }} fontSize="medium" />
      ) : null}
      {task.priority === 'medium' ? (
        <MenuOpenIcon sx={{ color: 'aqua' }} fontSize="medium" />
      ) : null}
      {task.priority === 'low' ? (
        <KeyboardDoubleArrowDownIcon
          sx={{ color: 'green' }}
          fontSize="medium"
        />
      ) : null}
    </>
  );
};

export default TaskPriority;
