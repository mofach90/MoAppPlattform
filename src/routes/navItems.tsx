import FlightLandIcon from '@mui/icons-material/FlightLand';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import React from 'react';

export interface NavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  section?: string;
}

export const navItems: NavItem[] = [
  { title: 'Dashboard', path: '/main-dashboard', icon: <HomeOutlinedIcon /> },
  { title: 'Landing Page', path: '/', icon: <FlightLandIcon /> },
  { title: 'To do', path: '/to-do', icon: <PlaylistAddCheckIcon />, section: 'My Apps' },
  { title: 'Weather', path: '/weather', icon: <ThunderstormIcon />, section: 'My Apps' },
  { title: 'Receipe', path: '/receipe', icon: <ReceiptLongIcon />, section: 'My Apps' },
];
