import { ButtonProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonWrapper from './ButtonWrapper';

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
  return <ButtonWrapper buttonConfig={buttonConfig}>Home</ButtonWrapper>;
};
