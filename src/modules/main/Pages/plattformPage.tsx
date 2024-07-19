import { Box } from '@mui/material';
import React from 'react';
import '../../global/theme/theme.css';
import Header, { HeaderTypes } from '../components/Header';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
export enum pages {
  dashboard = 'Dashboard',
  todo = 'To-do',
  receipe = 'Receipe',
  weather = 'Weather',
}

function PlattformPage({
  children,
  page,
  imgPath
}: Readonly<{
  children: React.ReactNode;
  page: pages;
  imgPath?: HeaderTypes['imgPath'];
}>) {
  return (
    <div className="PlattformPage">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Box m="20px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Header
              title={`${page} App`}
              subtitle={`Welcome to your ${page} App`}
              imgPath={imgPath}
            />
          </Box>
        </Box>
        {children}
      </main>
    </div>
  );
}

export default PlattformPage;
