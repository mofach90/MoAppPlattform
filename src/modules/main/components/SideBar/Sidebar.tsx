import FlightLandIcon from '@mui/icons-material/FlightLand';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Box, IconButton, Theme, Typography, useTheme } from '@mui/material';
import { useCallback, useState } from 'react';
import { Menu, MenuItem, ProSidebar } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { tokens } from '../../../global/theme/theme';
import useSideBarStore from './hooks/useSideBarStore';

export interface ItemTypes {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  handleItemClick: any;
}

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

const Sidebar = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isSelected = useSideBarStore((state) => state.selected);
  const setSelected = useSideBarStore((state) => state.setSelect);
  const handleItemClick = useCallback((title: any) => {
    setSelected(title);
  }, []);

  return (
    <Box
    
      sx={{
        
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
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
        backgroundColor:"red"
      }}
      
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
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
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`public/assets/maradona.png`}
                  style={{
                    cursor: 'pointer',
                    borderRadius: '50%',
                    backgroundColor: colors.blueAccent[100],
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: '20px 10px 10px 10px' }}
                >
                  MO ADMIN
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title="Dashboard"
              to="/main-dashboard"
              icon={<HomeOutlinedIcon />}
              selected={isSelected}
              handleItemClick={handleItemClick}
            />
            <Item
              title="Landing Page"
              to="/"
              icon={<FlightLandIcon />}
              selected={isSelected}
              handleItemClick={handleItemClick}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              {' '}
              My Apps
            </Typography>
            <Item
              title="To do"
              to="/to-do"
              icon={<PlaylistAddCheckIcon />}
              selected={isSelected}
              handleItemClick={handleItemClick}
            />
            <Item
              title="Weather"
              to="/weather"
              icon={<ThunderstormIcon />}
              selected={isSelected}
              handleItemClick={handleItemClick}
            />
            <Item
              title="Receipe"
              to="/receipe"
              icon={<ReceiptLongIcon />}
              selected={isSelected}
              handleItemClick={handleItemClick}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
