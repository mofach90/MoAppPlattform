import { Button, ButtonProps } from '@mui/material';

export const DashboardButton = () => {
  const handleGoToDashboard = () => {
    window.open('/dashboard', '_self');
  };

  const buttonConfig: ButtonProps = {
    variant: 'contained',
    onClick: handleGoToDashboard,
    sx: { whiteSpace: 'nowrap' },
  };
  return <Button {...buttonConfig}>Go to Dashboard</Button>;
};
