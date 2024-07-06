import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../../../../../../contexts/authProvider';
export const useLogin = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const { setAuthenticationForm, setIsAuthenticatedBasic } = useAuth();

  const triggerAuthPopup = async () => {
    try {
      const response = await fetch('/api/v1/auth/login-basic-authentication', {
        method: 'GET',
        credentials: 'include',
      });
      setAuthenticationForm('Simple Basic Authentication');
      if (response.ok) {
        setIsAuthenticatedBasic(true);
        window.open('/demo-dashboard', '_self');
      } else {
        setIsAuthenticatedBasic(false);
        console.error(' Response Status ', response.statusText);
      }
    } catch (error) {
      console.error('Error during authentication', error);
    }
  };

  return { navigate, open, setOpen, handleClose, triggerAuthPopup };
};
