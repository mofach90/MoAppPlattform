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
import { FormikErrors, useField, useFormikContext } from 'formik';
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
  const { setFieldTouched, validateField } = useFormikContext();
  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue('taskReminder', event.target.value);
    setTimeout(() => {
      validateField('taskReminder');
    }, 0);
  };
  const [open, setOpen] = useState(false);

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
        <InputLabel
          id="reminder-select-label"
          sx={{
            transform: 'translate(0px, -17px) scale(0.75)',
            color: 'inherit',
          }}
        >
          Reminder
        </InputLabel>
        <Select
          labelId="priority-reminder-label"
          id="reminder-id"
          onChange={handleChange}
          {...props}
          onClose={() => setFieldTouched('taskReminder', true)}
          defaultValue={props?.defaultValue ? props?.defaultValue : ''}
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
        {configOptions.error ? (
          <FormHelperText sx={{ width: '100%' }}>{meta.error}</FormHelperText>
        ) : null}
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
