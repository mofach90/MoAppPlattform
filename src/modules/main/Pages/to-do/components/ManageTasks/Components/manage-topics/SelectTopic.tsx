import EngineeringIcon from '@mui/icons-material/Engineering';
import FlightIcon from '@mui/icons-material/Flight';
import HouseIcon from '@mui/icons-material/House';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SchoolIcon from '@mui/icons-material/School';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TopicType } from '../../../../types';

const SelectTopic = ({
  value,
  onChange,
  defaultValue,
}: {
  value?: TopicType | null;
  onChange: (value: TopicType) => void;
  defaultValue?: TopicType | null;
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as TopicType);
  };

  return (
    <FormControl sx={{ width: '100%' }} size="medium">
      <InputLabel
        id="topic-select-label"
        sx={{
          '&.Mui-focused': { transform: 'translate(0, -17px) scale(0.75)' },
          '&.MuiInputLabel-shrink': { transform: 'translate(0, -17px) scale(0.75)' },
        }}
      >
        Topic
      </InputLabel>
      <Select
        labelId="topic-select-label"
        id="topic-select"
        value={value ?? ''}
        defaultValue={defaultValue ?? ''}
        onChange={handleChange}
      >
        <MenuItem value={'Travel'}>
          <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '100%' }}>
            <Typography ml={2}>Travel</Typography> <FlightIcon sx={{ mr: 2 }} />
          </Box>
        </MenuItem>
        <MenuItem value={'Personal'}>
          <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '100%' }}>
            <Typography ml={2}>Personal</Typography> <SensorOccupiedIcon sx={{ mr: 2 }} />
          </Box>
        </MenuItem>
        <MenuItem value={'Work'}>
          <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '100%' }}>
            <Typography ml={2}>Work</Typography> <EngineeringIcon sx={{ mr: 2 }} />
          </Box>
        </MenuItem>
        <MenuItem value={'Education'}>
          <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '100%' }}>
            <Typography ml={2}>Education</Typography> <SchoolIcon sx={{ mr: 2 }} />
          </Box>
        </MenuItem>
        <MenuItem value={'Home and Family'}>
          <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '100%' }}>
            <Typography ml={2}>Home/Family</Typography> <HouseIcon sx={{ mr: 2 }} />
          </Box>
        </MenuItem>
        <MenuItem value={'Shopping'}>
          <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '100%' }}>
            <Typography ml={2}>Shopping</Typography> <ShoppingCartIcon sx={{ mr: 2 }} />
          </Box>
        </MenuItem>
        <MenuItem value={'Others'}>
          <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '100%' }}>
            <Typography ml={2}>Others</Typography> <MoreHorizIcon sx={{ mr: 2 }} />
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectTopic;
