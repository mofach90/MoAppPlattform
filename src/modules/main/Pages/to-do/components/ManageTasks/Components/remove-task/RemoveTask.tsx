import { Dialog, Grid, Paper, Typography, useTheme } from '@mui/material';
import { Form, Formik } from 'formik';
import ButtonWrapper from '../../../../../../../global/components/ButtonWrapper';
import TextfieldWrapper from '../../../../../../../global/components/TextfieldWrapper';
import { tokens } from '../../../../../../../global/theme/theme';
import useDialogStore from '../../../../hooks/useDialogStore';
import { useTaskForm } from '../../hooks/useTaskForm';

function RemoveTask() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    DELETE_FORM_VALIDATION,
    INITIAL_REMOVE_FORM_STATE,
    handleDeleteTask,
    buttonConfig,
  } = useTaskForm();
  const activeDialog = useDialogStore((s) => s.activeDialog);
  const close = useDialogStore((s) => s.close);

  return (
    <Dialog
      open={activeDialog === 'removeTask'}
      onClose={close}
      PaperProps={{
        elevation: 24,
        sx: {
          width: 800,
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          opacity: 0.8,
        },
      }}
    >
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90%"
      >
        <Paper
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: `${colors.primary[400]}`,
          }}
          variant="outlined"
        >
          <Formik
            validationSchema={DELETE_FORM_VALIDATION}
            initialValues={{ ...INITIAL_REMOVE_FORM_STATE }}
            onSubmit={handleDeleteTask}
          >
            {({ submitForm, isValid }) => (
              <Form style={{ width: '60%' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography fontWeight={'bold'}>
                      Enter the Title of the Task to Delete
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextfieldWrapper
                      name="taskTitle"
                      label="Title"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ButtonWrapper
                      buttonConfig={{
                        ...buttonConfig,
                        sx: {
                          bgcolor: '#eb3434',
                          '&:hover': {
                            backgroundColor: '#d62d2d',
                          },
                        },
                        onClick: () => {
                          if (isValid) {
                            submitForm();
                            close();
                          }
                        },
                      }}
                    >
                      Delete Task and Exit
                    </ButtonWrapper>
                    <ButtonWrapper
                      buttonConfig={{
                        ...buttonConfig,
                        sx: {
                          bgcolor: '#cc0000',
                          '&:hover': {
                            backgroundColor: '#b30000',
                          },
                          marginTop: 2,
                        },
                        onClick: () => {
                          if (isValid) {
                            submitForm();
                          }
                        },
                      }}
                    >
                      Delete Task and Continue
                    </ButtonWrapper>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </Dialog>
  );
}

export default RemoveTask;
