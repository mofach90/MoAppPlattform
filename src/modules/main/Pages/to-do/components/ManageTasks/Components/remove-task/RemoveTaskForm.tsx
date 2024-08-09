import { Grid, Paper, Typography, useTheme } from '@mui/material';
import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import ButtonWrapper from '../../../../../../../global/components/ButtonWrapper';
import TextfieldWrapper from '../../../../../../../global/components/TextfieldWrapper';
import { tokens } from '../../../../../../../global/theme/theme';
import useManageTasksStore from '../../hooks/useManageTasks';
import { useTaskForm } from '../../hooks/useTaskForm';

function RemoveTaskForm() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    DELETE_FORM_VALIDATION,
    INITIAL_REMOVE_FORM_STATE,
    handleDeleteTask,
    buttonConfig,
  } = useTaskForm();
  const handleOnClickRemove = useManageTasksStore(
    (state) => state.handleOnClickRemove,
  );
  useEffect(() => {
    console.log(' DELETE_FORM_VALIDATION: ');
  }, [DELETE_FORM_VALIDATION]);

  return (
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
                          handleOnClickRemove();
                        } else {
                          console.log('Your Input is not valid');
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
                        } else {
                          console.log('Your Input is not valid');
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
  );
}

export default RemoveTaskForm;