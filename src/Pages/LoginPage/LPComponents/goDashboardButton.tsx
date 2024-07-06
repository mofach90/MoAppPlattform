import { Button, ButtonProps } from '@mui/material';
import { useContext } from 'react';
import { versionContext } from '../../../contexts/versionprovider';
import { useNavigate } from 'react-router-dom';

export const DashboardButton = () => {
  const { version } = useContext(versionContext);
  const navigate = useNavigate();
  const handleGoToDashboard = () => {
    navigate(`/${version}-dashboard`);
  };
  console.log('version from dashboeradr button', version);

  const buttonConfig: ButtonProps = {
    variant: 'contained',
    onClick: handleGoToDashboard,
    sx: { whiteSpace: 'nowrap' },
  };
  return <Button {...buttonConfig}>Dashboard</Button>;
};
