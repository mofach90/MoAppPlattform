import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { useLogin } from './useLogin';

function DemoLoginService() {
  const { navigate, open, setOpen, handleClose, triggerAuthPopup } = useLogin();

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
            height: 500,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 4,
          },
        }}
      >
        <DialogTitle>Choose your Authentication methode</DialogTitle>
        <DialogActions sx={{ width: '100%' }}>
          <Button
            variant="contained"
            fullWidth={true}
            onClick={triggerAuthPopup}
          >
            Login Using Basic Based Authentication
          </Button>
        </DialogActions>
        <DialogActions sx={{ width: '100%' }}>
          <Button
            variant="contained"
            onClick={() => navigate('/login')}
            fullWidth={true}
          >
            Login Using Form Based Authentication using Sesion ID
          </Button>
        </DialogActions>
        <DialogActions sx={{ width: '100%' }}>
          <Button
            variant="contained"
            onClick={() => navigate('/login-jwt-stored-in-localSession')}
            fullWidth={true}
          >
            Login Using Form Based Authentication using JWT Stored in
            Local-Session
          </Button>
        </DialogActions>
        <DialogActions sx={{ width: '100%' }}>
          <Button
            variant="contained"
            onClick={() => navigate('/login-jwt-stored-in-cookie')}
            fullWidth={true}
          >
            Login Using Form Based Authentication using JWT Stored in Cookie
          </Button>
        </DialogActions>
        <DialogActions sx={{ width: '100%' }}>
          <Button
            variant="contained"
            onClick={() => navigate('/login-with-social-networks')}
            fullWidth={true}
          >
            Login using your Social Network Account
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DemoLoginService;
