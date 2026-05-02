import { ButtonProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function useDashboardButton() {
  const navigate = useNavigate();
  const buttonConfig: ButtonProps = {
    variant: 'contained',
    onClick: () => navigate('/main-dashboard'),
    sx: { whiteSpace: 'nowrap' },
  };
  return { buttonConfig };
}
