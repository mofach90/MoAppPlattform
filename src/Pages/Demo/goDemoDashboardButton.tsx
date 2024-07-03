import { Button, ButtonProps } from '@mui/material';

export const DemoDashboardButton = () => {
  const handleGoToDemoDashboard = () => {
    window.open('/demo-dashboard', '_self');
  };

  const buttonConfig: ButtonProps = {
    variant: 'contained',
    onClick: handleGoToDemoDashboard,
    sx: { whiteSpace: 'nowrap' },
  };
  return <Button {...buttonConfig}>Go to Demo Dashboard</Button>;
};
