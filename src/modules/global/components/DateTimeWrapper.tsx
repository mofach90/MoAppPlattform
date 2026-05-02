import { TextFieldProps, useTheme } from '@mui/material';
import { DateTimePicker, PickersActionBarAction } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { debounce } from 'lodash';

import { useField, useFormikContext } from 'formik';
import { tokens } from '../theme/theme';

function useSlotProps() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return {
    slotProps: {
      actionBar: {
        actions: ['clear', 'today', 'accept', 'cancel'] as PickersActionBarAction[],
        sx: {
          '& .MuiButton-text': {
            color: 'white',
            backgroundColor: `${colors.greenAccent[600]}`,
            ':hover': { backgroundColor: `${colors.greenAccent[500]}` },
          },
        },
      },
      calendarHeader: { sx: { border: '1px yellow solid' } },
    },
  };
}

function DateTimeWrapper({ name, initialValue }: { name: string; initialValue?: dayjs.Dayjs | null }) {
  const [field, meta] = useField(name);
  const { slotProps } = useSlotProps();
  const { setFieldValue, handleBlur, setFieldTouched, validateField } = useFormikContext();

  const configOption = {
    ...field,
    slotProps: {
      ...slotProps,
      textField: { onBlur: handleBlur } as TextFieldProps,
    },
    onClose: () => { setFieldTouched(name, true); },
  };

  if (meta && meta.touched && meta.error) {
    configOption.slotProps.textField.error = true;
    configOption.slotProps.textField.helperText = meta.error;
  }

  const deboucedisTitleNotEmpty = debounce(() => { validateField('taskDueDate'); }, 50);

  return (
    <DateTimePicker
      {...configOption}
      onChange={(newValue: any) => {
        setFieldValue('taskDueDate', newValue, true);
        deboucedisTitleNotEmpty();
      }}
      sx={{ width: '100%' }}
      defaultValue={initialValue ? dayjs(initialValue) : null}
    />
  );
}

export default DateTimeWrapper;
