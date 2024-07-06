import { Button, ButtonProps } from '@mui/material';

type DashboardButtonProps = "real" | "demo"

export const DashboardButton = ({version}:{version:DashboardButtonProps}) => {
  const handleGoToDashboard = () => {
    window.open(`/${version}dashboard`, '_self');
  };

  const buttonConfig: ButtonProps = {
    variant: 'contained',
    onClick: handleGoToDashboard,
    sx: { whiteSpace: 'nowrap' },
  };
  return <Button {...buttonConfig}>Go to Dashboard</Button>;
};
