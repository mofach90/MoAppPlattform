import { ButtonProps } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { versionContext } from '../../../../../../../../../contexts/versionprovider';

export function useDashboardButton() {
  const { version } = useContext(versionContext);
  const navigate = useNavigate();
  const handleGoToDashboard = () => {
    navigate(`/${version}-dashboard`);
  };
  const buttonConfig: ButtonProps = {
    variant: 'contained',
    onClick: handleGoToDashboard,
    sx: { whiteSpace: 'nowrap' },
  };
  return { buttonConfig };
}
