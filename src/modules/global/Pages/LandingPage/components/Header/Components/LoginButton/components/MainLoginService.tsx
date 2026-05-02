import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { useLogin } from '../hooks/useLogin';

export const MainLoginService = () => {
  const { open, setOpen, handleClose, handleOnClick } = useLogin();

  return (
    <>
      <Button
        variant="contained"
        sx={{ whiteSpace: 'nowrap' }}
        onClick={() => {
          setOpen(true);
        }}
      >
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 24,
          sx: {
            width: 500,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 4,
          },
        }}
      >
        <DialogTitle>Login to your account</DialogTitle>
        <DialogActions sx={{ width: '100%' }}>
          <Button
            variant="contained"
            onClick={() => handleOnClick('/login-with-social-networks')}
            fullWidth={true}
          >
            Continue with Google
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
