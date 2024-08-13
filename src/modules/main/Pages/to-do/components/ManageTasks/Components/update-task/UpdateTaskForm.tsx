import { Box, Grid, Paper, Typography, useTheme } from '@mui/material';
import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import ButtonWrapper from '../../../../../../../global/components/ButtonWrapper';
import DateTimeWrapper from '../../../../../../../global/components/DateTimeWrapper';
import TextfieldWrapper from '../../../../../../../global/components/TextfieldWrapper';
import { tokens } from '../../../../../../../global/theme/theme';
import useTaskStore from '../../../../hooks/useTaskStore';
import { useTaskForm } from '../../hooks/useTaskForm';
import { shouldShowReminder } from '../../utils/checkIfDueDate';
import SelectPriority from '../manage-priority/SelectPriority';
import SelectReminder from '../manage-reminder/SelectReminder';

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
  useEffect(() => {
    console.log(INITIAL_UPDATE_FORM_STATE.dueDate);
  }, [INITIAL_UPDATE_FORM_STATE]);

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
          {({ submitForm, isValid, setFieldValue, values }) => (
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
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box display={'flex'} justifyContent={'space-between'}>
                    <SelectPriority
                      setFieldValue={setFieldValue}
                      taskHasDueTime={shouldShowReminder(
                        values,
                        INITIAL_UPDATE_FORM_STATE,
                      )}
                      props={{
                        defaultValue: INITIAL_UPDATE_FORM_STATE.taskPriority
                          ? INITIAL_UPDATE_FORM_STATE.taskPriority
                          : '',
                      }}
                    />

                    {shouldShowReminder(values, INITIAL_UPDATE_FORM_STATE) ? (
                      <SelectReminder
                        setFieldValue={setFieldValue}
                        props={{
                          defaultValue: INITIAL_UPDATE_FORM_STATE.taskReminder,
                        }}
                      />
                    ) : null}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <DateTimeWrapper
                    name="taskDueDate"
                    initialValue={INITIAL_UPDATE_FORM_STATE.dueDate}
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
