import { Grid, Paper, Typography, useTheme } from '@mui/material';
import { Form, Formik } from 'formik';
import ButtonWrapper from '../../../../../../global/components/ButtonWrapper';
import TextfieldWrapper from '../../../../../../global/components/TextfieldWrapper';
import { tokens } from '../../../../../../global/theme/theme';
import useTaskStore from '../../../hooks/useTaskStore';
import { useTaskForm } from '../hooks/useTaskForm';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

function UpdateTaskForm() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const setUpdateTaskDialog = useTaskStore(
    (state) => state.setUpdateTaskDialog,
  );

  const {
    CREATE_FORM_VALIDATION,
    INITIAL_UPDATE_FORM_STATE,
    handleUpdateTask,
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
          validationSchema={CREATE_FORM_VALIDATION}
          initialValues={{ ...INITIAL_UPDATE_FORM_STATE }}
          onSubmit={handleUpdateTask}
        >
          {({ submitForm, isValid, setFieldValue }) => (
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
                 
                <Grid
                  item
                  xs={12}
                >
                <DateTimePicker
                    label='Task due Date'
                    onChange={(newValue) => {
                      setFieldValue('taskDueDate', newValue);
                    }}
                    sx={{ width: "100%" }}
                    defaultValue={dayjs(INITIAL_UPDATE_FORM_STATE.dueDate)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ButtonWrapper
                    buttonConfig={{
                      ...buttonConfig,
                      sx: {
                        bgcolor: '#34a1eb',
                        '&:hover': {
                          backgroundColor: '#1e8fe6',
                        },
                      },
                      onClick: () => {
                        if (isValid) {
                          submitForm();
                          setUpdateTaskDialog();
                        } else {
                          console.log('Your Input is not Valid');
                        }
                      },
                    }}
                  >
                    Update and exit
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

export default UpdateTaskForm;
