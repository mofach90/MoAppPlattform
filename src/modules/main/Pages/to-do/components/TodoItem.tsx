import { Theme, Typography, useTheme } from '@mui/material';
import { MenuItem } from 'react-pro-sidebar';
import { tokens } from '../../../../global/theme/theme';
import { TodoItemType } from '../types';

const TodoItem = ({ title, icon, selected, onClick }: TodoItemType) => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "red",
      }}
      onClick={onClick}
      icon={icon}
    >
      <Typography>{title}</Typography>
      {/* <Link to={to} /> */}
    </MenuItem>
  );
};
export default TodoItem;
