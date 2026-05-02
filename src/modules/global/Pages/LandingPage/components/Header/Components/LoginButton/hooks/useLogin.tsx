import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  const handleOnClick = (path: string) => {
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

  return {
    handleOnClick,
    open,
    setOpen,
    handleClose,
    navigate,
  };
};
