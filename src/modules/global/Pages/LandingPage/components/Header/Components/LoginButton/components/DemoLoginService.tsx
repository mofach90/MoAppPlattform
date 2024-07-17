import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { useLogin } from '../hooks/useLogin';

function DemoLoginService() {
  const { handleOnClick, open, setOpen, handleClose, triggerAuthPopup } =
    useLogin();

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
            onClick={() => {
              handleOnClick(
                '/login',
                'form-based-authentication using session-id',
              );
            }}
            fullWidth={true}
          >
            Login Using Form Based Authentication using Sesion ID
          </Button>
        </DialogActions>
        <DialogActions sx={{ width: '100%' }}>
          <Button
            variant="contained"
            onClick={() =>
              handleOnClick(
                '/login-jwt-stored-in-localSession',
                'form-based-authentication using Jwt stored in browser local session',
              )
            }
            fullWidth={true}
          >
            Login Using Form Based Authentication using JWT Stored in
            Local-Session
          </Button>
        </DialogActions>
        <DialogActions sx={{ width: '100%' }}>
          <Button
            variant="contained"
            onClick={() =>
              handleOnClick(
                '/login-jwt-stored-in-cookie',
                'form-based-authentication using Jwt stored in browser cookie',
              )
            }
            fullWidth={true}
          >
            Login Using Form Based Authentication using JWT Stored in Cookie
          </Button>
        </DialogActions>
        <DialogActions sx={{ width: '100%' }}>
          <Button
            variant="contained"
            onClick={() =>
              handleOnClick(
                '/login-with-social-networks',
                'social based authentication',
              )
            }
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
