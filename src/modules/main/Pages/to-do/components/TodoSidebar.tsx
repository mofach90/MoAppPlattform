import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box, IconButton, Theme, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { Menu, MenuItem, ProSidebar } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { v4 as uuidv4 } from 'uuid';
import { tokens } from '../../../../global/theme/theme';
import useTaskStore from '../hooks/useTaskStore';
import { Task } from '../types';
import TodoItem from './TodoItem';

const TodoSidebar = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const tasks = useTaskStore((state) => state.tasks);
  const [selected, setSelected] = useState('');
  const selectTask = useTaskStore((state) => state.selectTask);
  useEffect(() => {
    console.log({ selected });
    console.log({ tasks });
    console.log({ selectTask });
  }, [selected, tasks, selectTask]);
  const handleTaskSelected: (task: Task) => void = (task: Task) => {
    setSelected(task.title);
    selectTask(task);
  };
  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.blueAccent[900]} !important`,
          borderRadius: 3,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: '#F00F00 !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
          backgroundColor: 'pink !important',
          color: '#008000 !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#FFFF00 !important',
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
              color: colors.grey[100],
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
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            {tasks.map((task) => (
              <TodoItem
                key={uuidv4()}
                title={task.title}
                icon={<HomeOutlinedIcon />}
                selected={selected}
                onClick={() => handleTaskSelected(task)}
              />
            ))}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default TodoSidebar;
