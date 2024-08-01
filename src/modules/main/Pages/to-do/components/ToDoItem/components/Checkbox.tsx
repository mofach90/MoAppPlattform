import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Box } from '@mui/material';
import { Task } from '../../../types';
import useToDo from '../hooks/useToDo';
const Checkbox = ({ task }: { task: Task }) => {
  const { handleIsChecked } = useToDo();

  return (
    <Box onClick={() => handleIsChecked(task)} marginRight={2}>
      {task.isChecked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </Box>
  );
};

export default Checkbox;
