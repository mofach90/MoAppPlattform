import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../../../global/theme/theme';
import { ItemTypes } from '../../../types/mainTypes';
import { MenuItem } from 'react-pro-sidebar';

const Item = ({ title, to, icon, selected, handleItemClick }: ItemTypes) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <MenuItem
        active={selected === title}
        onClick={() => handleItemClick(title)}
        icon={icon}
      >
        <Typography variant="h6">{title}</Typography>
        <Link to={to} />
      </MenuItem>
    </Box>
  );
};

export default Item;
