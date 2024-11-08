import { Alert, AlertProps, Snackbar } from '@mui/material';
import { forwardRef } from 'react';
import useTaskStore from '../../../../hooks/useTaskStore';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={9} ref={ref} {...props} />;
  },
);
const OperationStatusNotification = () => {
  const {
    openSnackbarTaskCreated,
    openSnackbarTopicDeleted,
    topicDeletedErrorMessage,
    openSnackbarTopicDeletedError,
    openSnackbarTaskUpdated,
    openSnackbarTaskDeleted,
    openSnackbarTaskDeletedError,
    taskDeletedErrorMessage,
    handleCloseNotification,
    openSnackbarTaskUpdatedError,
    taskUpdateErrorMessage
  } = useTaskStore((state) => ({
    openSnackbarTaskCreated: state.openSnackbarTaskCreated,
    openSnackbarTopicDeleted: state.openSnackbarTopicDeleted,
    topicDeletedErrorMessage: state.topicDeletedErrorMessage,
    openSnackbarTopicDeletedError: state.openSnackbarTopicDeletedError,
    openSnackbarTaskUpdated: state.openSnackbarTaskUpdated,
    openSnackbarTaskDeleted: state.openSnackbarTaskDeleted,
    openSnackbarTaskDeletedError: state.openSnackbarTaskDeletedError,
    taskDeletedErrorMessage: state.taskDeletedErrorMessage,
    handleCloseNotification: state.handleCloseNotification,
    openSnackbarTaskUpdatedError: state.openSnackbarTaskUpdatedError,
    taskUpdateErrorMessage: state.taskUpdatedErrorMessage,
  }));
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
      <Snackbar
        autoHideDuration={2000}
        open={openSnackbarTopicDeleted}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <SnackbarAlert variant="filled" severity="success">
          Topic Successfully Deleted
        </SnackbarAlert>
      </Snackbar>
      <Snackbar
        autoHideDuration={2000}
        open={openSnackbarTaskDeletedError}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <SnackbarAlert variant="filled" severity="error">
          {taskDeletedErrorMessage}
        </SnackbarAlert>
      </Snackbar>
      <Snackbar
        autoHideDuration={2000}
        open={openSnackbarTopicDeletedError}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <SnackbarAlert variant="filled" severity="error">
          {topicDeletedErrorMessage}
        </SnackbarAlert>
      </Snackbar>
      <Snackbar
        autoHideDuration={2000}
        open={openSnackbarTaskUpdatedError}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <SnackbarAlert variant="filled" severity="error">
          {taskUpdateErrorMessage}
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default OperationStatusNotification;
