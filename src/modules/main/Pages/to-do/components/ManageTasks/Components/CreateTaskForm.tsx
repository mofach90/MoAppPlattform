import { Grid, Paper, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import ButtonWrapper from '../../../../../../global/components/ButtonWrapper';
import TextfieldWrapper from '../../../../../../global/components/TextfieldWrapper';
import { useTaskForm } from '../hooks/useTaskForm';

function CreateTaskForm() {
  const {
    CREATE_FORM_VALIDATION,
    INITIAL_CREATE_FORM_STATE,
    handleCreateTask,
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
        }}
        variant="outlined"
      >
        <Formik
          validationSchema={CREATE_FORM_VALIDATION}
          initialValues={{ ...INITIAL_CREATE_FORM_STATE }}
          onSubmit={handleCreateTask}
        >
          {({ submitForm }) => (
            <Form style={{ width: '60%' }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography fontWeight={'bold'}>
                    Enter the Title and Description of your Task
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
                  <TextfieldWrapper
                    name="taskDescription"
                    label="Description"
                    type="text"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ButtonWrapper
                    buttonConfig={{
                      ...buttonConfig,
                      sx: { bgcolor: '#34a1eb' },
                      onClick: () => {
                        submitForm();
                      },
                    }}
                  >
                    Create New Task
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

export default CreateTaskForm;
