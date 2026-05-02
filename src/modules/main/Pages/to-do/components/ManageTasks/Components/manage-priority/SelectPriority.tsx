import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { PriorityType } from '../../../../types';

const SelectPriority = ({
  value,
  onChange,
  taskHasDueTime,
  defaultValue,
}: {
  value: PriorityType | undefined;
  onChange: (value: PriorityType | undefined) => void;
  taskHasDueTime: boolean;
  defaultValue?: PriorityType;
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(
      event.target.value ? (event.target.value as PriorityType) : undefined,
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
          '&.Mui-focused': { transform: 'translate(0, -17px) scale(0.75)' },
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
        value={value ?? ''}
        defaultValue={defaultValue ?? ''}
        onChange={handleChange}
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
