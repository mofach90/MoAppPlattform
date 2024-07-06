import { Button, ButtonProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const HomeButton = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  };

  const buttonConfig: ButtonProps = {
    variant: 'contained',
    onClick: handleHome,
    sx: { whiteSpace: 'nowrap', ml: 2 },
  };
  return <Button {...buttonConfig}>Home</Button>;
};
