import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box, IconButton, Theme, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { Menu, MenuItem, ProSidebar } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { navItems } from '../../../../routes/navItems';
import useCurrentUser from '../../../global/hooks/useCurrentUser';
import { tokens } from '../../../global/theme/theme';
import Item from './components/items';

const Sidebar = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const currentUser = useCurrentUser();

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
        backgroundColor: 'red',
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
                  Mo Plattform
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
                  src={currentUser?.photoURL ?? 'public/assets/maradona.png'}
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
                  {currentUser?.displayName ?? 'MO ADMIN'}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VIP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            {navItems.map((item, i) => {
              const isNewSection =
                item.section && navItems[i - 1]?.section !== item.section;
              return (
                <div key={item.path}>
                  {isNewSection && (
                    <Typography
                      variant="h6"
                      color={colors.grey[300]}
                      sx={{ m: '15px 0 5px 20px' }}
                    >
                      {item.section}
                    </Typography>
                  )}
                  <Item title={item.title} to={item.path} icon={item.icon} />
                </div>
              );
            })}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
