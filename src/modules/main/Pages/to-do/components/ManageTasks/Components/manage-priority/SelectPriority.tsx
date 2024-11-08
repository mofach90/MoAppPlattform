import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormikErrors } from 'formik';
import { CreateTaskFormValues } from '../../../../types';

const SelectPriority = ({
  setFieldValue,
  taskHasDueTime,
  ...rest
}: {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean,
  ) => Promise<void | FormikErrors<CreateTaskFormValues>>;
  taskHasDueTime: boolean;
  [key: string]: any; // Allow any additional props

}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue(
      'taskPriority',
      event.target.value ? event.target.value : undefined,
    );
  };

  return (
    <FormControl
      sx={{ width: `${taskHasDueTime ? '39%' : '100%'}` }}
      size="medium"
    >
      <InputLabel
        id="priority-select-label"
        sx={{
          '&.Mui-focused': {
            transform: 'translate(0, -17px) scale(0.75)',
          },
          '&.MuiInputLabel-shrink': {
            transform: 'translate(0, -17px) scale(0.75)',
          },
        }}
      >
        Priority
      </InputLabel>
      <Select
        labelId="priority-select-label"
        id="priority-select"
        onChange={handleChange}
        {...rest}
        // onReset={()=>setFieldValue("taskPriority", "",false)}
        // value= {values.taskPriority?values.taskPriority: undefined}
        // defaultValue={defaultValue?defaultValue:undefined}
      >
        <MenuItem value={'high'}>
          <Typography ml={2}>High</Typography>
        </MenuItem>
        <MenuItem value={'medium'}>
          <Typography ml={2}>Medium</Typography>
        </MenuItem>
        <MenuItem value={'low'}>
          <Typography ml={2}>Low</Typography>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectPriority;
