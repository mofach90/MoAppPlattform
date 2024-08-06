import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Task } from '../../../types';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const TaskPriority = ({ task }: { readonly task: Task }) => {
  return <>
  {  task.priority === 'high' ? <PriorityHighIcon /> : null}
  {  task.priority === 'medium' ? <DensityMediumIcon /> : null}
  {  task.priority === 'low' ? <LowPriorityIcon /> : null}
    </>;
};

export default TaskPriority;
