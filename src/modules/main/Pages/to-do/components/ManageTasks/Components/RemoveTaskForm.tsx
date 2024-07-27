import { Grid, Paper, Typography, useTheme } from '@mui/material';
import { Form, Formik } from 'formik';
import ButtonWrapper from '../../../../../../global/components/ButtonWrapper';
import TextfieldWrapper from '../../../../../../global/components/TextfieldWrapper';
import { tokens } from '../../../../../../global/theme/theme';
import { useTaskForm } from '../hooks/useTaskForm';

function RemoveTaskForm() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    DELETE_FORM_VALIDATION,
    INITIAL_REMOVE_FORM_STATE,
    handleDeleteTask,
    buttonConfig,
  } = useTaskForm();

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
          {({ submitForm }) => (
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
                      sx: { bgcolor: '#eb3434' },
                      onClick: () => {
                        submitForm();
                      },
                    }}
                  >
                    Delete Task
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
