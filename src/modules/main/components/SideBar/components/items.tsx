import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { ItemTypes } from '../../../types/mainTypes';

const Item = ({ title, to, icon, selected, handleItemClick }: ItemTypes) => {
  useEffect(() => {
    console.log('selected === title useeffect', selected === title);
  }, []);

  return (
    <Box>
      <MenuItem
        active={selected === title}
        onClick={() => {
          handleItemClick(title);
          setTimeout(() => {
            console.log('selected === title', selected === title);
          }, 0);
        }}
        icon={icon}
      >
        <Typography variant="h6">{title}</Typography>
        <Link to={to} />
      </MenuItem>
    </Box>
  );
};

export default Item;
