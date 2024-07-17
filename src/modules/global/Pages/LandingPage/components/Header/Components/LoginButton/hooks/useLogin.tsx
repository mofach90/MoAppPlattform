import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../../../../../../contexts/authProvider';
import { AuthenticationFormType } from '../../../../../../../../../types/authTypes';
export const useLogin = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const { setAuthenticationForm, setIsAuthenticatedBasic } = useAuth();
  const handleOnClick = (
    path: string,
    authenticationForm: AuthenticationFormType,
  ) => {
    setAuthenticationForm(authenticationForm);
    navigate(path);
  };
  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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

  return { handleOnClick, open, setOpen, handleClose, triggerAuthPopup, navigate };
};
