import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormikErrors } from 'formik';
import { CreateTaskFormValues } from '../../../../types';

const SelectPriority = ({
  setFieldValue,
  props,
  taskHasDueTime,
}: {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean,
  ) => Promise<void | FormikErrors<CreateTaskFormValues>>;
  props?: any;
  taskHasDueTime: boolean;
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue('taskPriority', event.target.value);
  };

  return (
    <FormControl
      sx={{ width: `${taskHasDueTime ? '39%' : '100%'}` }}
      size="medium"
    >
      <InputLabel  id="priority-select-label" 
      
      sx={{

                  transform: 'translate(0, -17px) scale(0.75)',


        
      }}
      >Priority</InputLabel>
      <Select
        labelId="priority-select-label"
        id="priority-select"
        onChange={handleChange}
        {...props}
      >
        <MenuItem value={'high'}>High</MenuItem>
        <MenuItem value={'medium'}>Medium</MenuItem>
        <MenuItem value={'low'}>Low</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectPriority;
