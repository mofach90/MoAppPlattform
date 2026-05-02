import { Alert, AlertProps, Snackbar } from '@mui/material';
import { forwardRef } from 'react';
import useTaskStore from '../../../../hooks/useTaskStore';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={9} ref={ref} {...props} />;
  },
);

const OperationStatusNotification = () => {
  const notification = useTaskStore((state) => state.notification);
  const handleCloseNotification = useTaskStore(
    (state) => state.handleCloseNotification,
  );

  return (
    <Snackbar
      autoHideDuration={2000}
      open={notification?.open ?? false}
      onClose={handleCloseNotification}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <SnackbarAlert
        variant="filled"
        severity={notification?.severity ?? 'success'}
      >
        {notification?.message}
      </SnackbarAlert>
    </Snackbar>
  );
};

export default OperationStatusNotification;
