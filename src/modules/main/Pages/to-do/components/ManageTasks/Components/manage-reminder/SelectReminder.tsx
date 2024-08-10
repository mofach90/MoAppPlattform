import HelpIcon from '@mui/icons-material/Help';
import {
  Box,
  FormHelperText,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import FormControl, { FormControlProps } from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormikErrors, useField } from 'formik';
import { useState } from 'react';
import { CreateTaskFormValues, Reminder } from '../../../../types';

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
    setFieldValue('taskReminder', event.target.value);
  };
  const [open, setOpen] = useState(false);
  const [textHelper, setTextHelper] = useState<string>();

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const [field, meta] = useField('taskReminder');
  const configOptions: FormControlProps = {
    ...field,
  };
  if (meta && meta.touched && meta.error) {
    configOptions.error = true;
    setTextHelper(meta.error);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '55%',
        alignItems: 'center',
      }}
    >
      <FormControl size="medium" fullWidth {...configOptions}>
        <InputLabel id="reminder-select-label">Reminder</InputLabel>
        {!!textHelper ? <FormHelperText>{textHelper}</FormHelperText> : null}
        <Select
          labelId="priority-reminder-label"
          id="reminder-id"
          onChange={handleChange}
          {...props}
        >
          <MenuItem value={Reminder.default}>none</MenuItem>
          <MenuItem value={Reminder.before_time_1}>
            {Reminder.before_time_1}
          </MenuItem>
          <MenuItem value={Reminder.before_time_2}>
            {Reminder.before_time_2}
          </MenuItem>
          <MenuItem value={Reminder.before_time_3}>
            {Reminder.before_time_3}
          </MenuItem>
        </Select>
      </FormControl>

      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        title={
          <Typography
            variant="body2"
            style={{ whiteSpace: 'pre-line' }}
            fontSize={15}
          >
            {Reminder.tooltip_helper_text}
          </Typography>
        }
      >
        <IconButton onClick={handleTooltipOpen}>
          <HelpIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SelectReminder;
