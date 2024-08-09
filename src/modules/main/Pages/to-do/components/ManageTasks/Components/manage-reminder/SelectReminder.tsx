import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormikErrors } from 'formik';
import { CreateTaskFormValues, reminder } from '../../../../types';



const SelectReminder = ({
  setFieldValue,
  props,
}: {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean,
  ) => Promise<void | FormikErrors<CreateTaskFormValues>>;
  props?: any;
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue('taskPriority', event.target.value);
  };

  return (
    <FormControl sx={{ width: '45%'}} size="medium" fullWidth>
      <InputLabel id="reminder-select-label">Reminder</InputLabel>
      <Select
        labelId="priority-reminder-label"
        id="reminder-id"
        onChange={handleChange}
        {...props}
      >
        <MenuItem value={reminder.default}>"none"</MenuItem>
        <MenuItem value={reminder.before_time_1}>{reminder.before_time_1}</MenuItem>
        <MenuItem value={reminder.before_time_2}>{reminder.before_time_2}</MenuItem>
        <MenuItem value={reminder.before_time_3}>{reminder.before_time_3}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectReminder;
