import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormikErrors } from 'formik';
import { CreateTaskFormValues } from '../../../types';

const SelectPriority = ({
  setFieldValue,
}: {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean,
  ) => Promise<void | FormikErrors<CreateTaskFormValues>>;
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue('taskPriority', event.target.value);
  };

  return (
    <FormControl sx={{ width: '100%' }} size="medium">
      <InputLabel id="priority-select-label">Priority</InputLabel>
      <Select
        labelId="priority-select-label"
        id="priority-select"
        onChange={handleChange}
        defaultValue=""
      >
        <MenuItem value={'high'}>High</MenuItem>
        <MenuItem value={'medium'}>Medium</MenuItem>
        <MenuItem value={'low'}>Low</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectPriority;
