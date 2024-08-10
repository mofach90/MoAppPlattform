import { TextFieldProps } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { debounce } from 'lodash';

import { useField, useFormikContext } from 'formik';
import useSlotProps from '../../main/Pages/to-do/components/ManageTasks/hooks/slotProps';

function DateTimeWrapper({ name }: { name: string }) {
  const [field, meta] = useField(name);
  const { slotProps } = useSlotProps();
  const { setFieldValue, handleBlur, setFieldTouched, validateField } =
    useFormikContext();

  const configOption = {
    ...field,
    slotProps: {
      ...slotProps,
      textField: {
        onBlur: handleBlur,
      } as TextFieldProps,
    },
    onClose: () => {
      setFieldTouched(name, true);
    },
  };
  if (meta && meta.touched && meta.error) {
    configOption.slotProps.textField.error = true;
    configOption.slotProps.textField.helperText = meta.error;
  }

  const deboucedisTitleNotEmpty = debounce(() => {
    validateField('taskDueDate');
  }, 50);

  return (
    <DateTimePicker
      {...configOption}
      onChange={(newValue: any) => {
        console.log('newvalue', newValue);
        setFieldValue('taskDueDate', newValue, true);
        deboucedisTitleNotEmpty();
      }}
      sx={{ width: '100%' }}
      value={field.value !== null ? dayjs(field.value) : null}
    />
  );
}

export default DateTimeWrapper;
