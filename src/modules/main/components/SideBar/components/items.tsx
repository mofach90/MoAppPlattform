import { Box, Typography } from '@mui/material';
import { MenuItem } from 'react-pro-sidebar';
import { Link, useMatch } from 'react-router-dom';
import { ItemTypes } from '../../../types/mainTypes';

const Item = ({ title, to, icon }: ItemTypes) => {
  const match = useMatch(to);

  return (
    <Box>
      <MenuItem active={!!match} icon={icon}>
        <Typography variant="h6">{title}</Typography>
        <Link to={to} />
      </MenuItem>
    </Box>
  );
};

export default Item;
