import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { Box, IconButton, Theme, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { Menu, MenuItem, ProSidebar } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { v4 as uuidv4 } from 'uuid';
import { tokens } from '../../../../global/theme/theme';
import useTaskStore from '../hooks/useTaskStore';
import TodoItem from './TodoItem';

const TodoSidebar = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.blueAccent[900]} !important`,
          borderRadius: 3,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#868dfb !important',
        },
      }}
      height={'100vh'}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Your Todo List
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box padding={isCollapsed ? undefined : '5px 0px 5px 20px'}>
            {tasks.map((task) => (
              <TodoItem key={uuidv4()} task={task} />
            ))}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default TodoSidebar;
