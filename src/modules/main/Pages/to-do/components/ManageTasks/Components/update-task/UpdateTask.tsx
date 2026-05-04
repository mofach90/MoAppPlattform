import {
  Box,
  Dialog,
  Grid,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { Form, Formik } from 'formik';
import ButtonWrapper from '../../../../../../../global/components/ButtonWrapper';
import DateTimeWrapper from '../../../../../../../global/components/DateTimeWrapper';
import TextfieldWrapper from '../../../../../../../global/components/TextfieldWrapper';
import { tokens } from '../../../../../../../global/theme/theme';
import useDialogStore from '../../../../hooks/useDialogStore';
import { useTaskForm } from '../../hooks/useTaskForm';
import { shouldShowReminder } from '../../utils/taskFormValidation';
import SelectPriority from '../manage-priority/SelectPriority';
import SelectReminder from '../manage-reminder/SelectReminder';
import SelectTopic from '../manage-topics/SelectTopic';

function UpdateTask() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const activeDialog = useDialogStore((s) => s.activeDialog);
  const close = useDialogStore((s) => s.close);

  const {
    CREATE_FORM_VALIDATION,
    INITIAL_UPDATE_FORM_STATE,
    handleUpdateTask,
    buttonConfig,
  } = useTaskForm();

  return (
    <Dialog
      open={activeDialog === 'updateTask'}
      onClose={close}
      PaperProps={{
        elevation: 24,
        sx: {
          width: 600,
          height: 650,
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
            validationSchema={CREATE_FORM_VALIDATION}
            initialValues={{ ...INITIAL_UPDATE_FORM_STATE }}
            onSubmit={handleUpdateTask}
          >
            {({ submitForm, isValid, setFieldValue, values, validateForm }) => (
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
                        value={values.taskPriority}
                        onChange={(val) => setFieldValue('taskPriority', val)}
                        taskHasDueTime={shouldShowReminder(
                          values,
                          INITIAL_UPDATE_FORM_STATE,
                        )}
                        defaultValue={INITIAL_UPDATE_FORM_STATE.taskPriority}
                      />
                      {shouldShowReminder(values, INITIAL_UPDATE_FORM_STATE) ? (
                        <SelectReminder
                          defaultValue={INITIAL_UPDATE_FORM_STATE.taskReminder}
                        />
                      ) : null}
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <SelectTopic
                      value={values.taskTopic}
                      onChange={(val) => setFieldValue('taskTopic', val)}
                      defaultValue={INITIAL_UPDATE_FORM_STATE.taskTopic}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <DateTimeWrapper
                      name="taskDueDate"
                      initialValue={INITIAL_UPDATE_FORM_STATE.taskDueDate}
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
                          validateForm();

                          if (isValid) {
                            submitForm();
                            close();
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
    </Dialog>
  );
}

export default UpdateTask;
