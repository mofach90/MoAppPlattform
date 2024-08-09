import { Alert, AlertProps, Snackbar } from '@mui/material';
import { forwardRef } from 'react';
import useTaskStore from '../../../../hooks/useTaskStore';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={9} ref={ref} {...props} />;
  },
);
const OperationStatusNotification = () => {
  const openSnackbarTaskCreated = useTaskStore(
    (state) => state.openSnackbarTaskCreated,
  );
  const openSnackbarTaskUpdated = useTaskStore(
    (state) => state.openSnackbarTaskUpdated,
  );
  const openSnackbarTaskDeleted = useTaskStore(
    (state) => state.openSnackbarTaskDeleted,
  );
  const handleCloseNotification = useTaskStore(
    (state) => state.handleCloseNotification,
  );
  return (
    <>
      <Snackbar
        autoHideDuration={2000}
        open={openSnackbarTaskCreated}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <SnackbarAlert variant="filled" severity="success">
          Task Successfully Created
        </SnackbarAlert>
      </Snackbar>
      <Snackbar
        autoHideDuration={2000}
        open={openSnackbarTaskUpdated}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <SnackbarAlert variant="filled" severity="success">
          Task Successfully Updated
        </SnackbarAlert>
      </Snackbar>
      <Snackbar
        autoHideDuration={2000}
        open={openSnackbarTaskDeleted}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <SnackbarAlert variant="filled" severity="success">
          Task Successfully Deleted
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default OperationStatusNotification;
