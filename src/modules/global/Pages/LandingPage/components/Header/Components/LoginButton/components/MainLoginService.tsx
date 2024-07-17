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
            width: 800,
            height: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 4,
          },
        }}
      >
        <DialogTitle>Choose your Authentication method</DialogTitle>

        <DialogActions sx={{ width: '100%' }}>
          <Button
            variant="contained"
            onClick={() => {
              handleOnClick("/login-with-firebase","Firebase based authentication using Email and Password or Anonymously")
            }}
            fullWidth={true}
          >
            Login using Firebase
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
