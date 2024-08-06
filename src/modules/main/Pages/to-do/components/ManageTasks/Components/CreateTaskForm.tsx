import { Grid, Paper, Typography, useTheme } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Form, Formik } from 'formik';
import ButtonWrapper from '../../../../../../global/components/ButtonWrapper';
import TextfieldWrapper from '../../../../../../global/components/TextfieldWrapper';
import { tokens } from '../../../../../../global/theme/theme';
import  useSlotProps  from '../hooks/slotProps';
import useManageTasksStore from '../hooks/useManageTasks';
import { useTaskForm } from '../hooks/useTaskForm';
import SelectPriority from './SelectPriority';

dayjs.extend(utc);
dayjs.extend(timezone);

function CreateTaskForm() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleOnclickCreate = useManageTasksStore(
    (state) => state.handleOnClickCreate,
  );
  const { slotProps } = useSlotProps();

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
          backgroundColor: `${colors.primary[400]}`,
        }}
        variant="outlined"
      >
        <Formik
          validationSchema={CREATE_FORM_VALIDATION}
          initialValues={{ ...INITIAL_CREATE_FORM_STATE }}
          onSubmit={handleCreateTask}
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

                <SelectPriority setFieldValue={setFieldValue} />                </Grid>

                <Grid item xs={12}>
                  <DateTimePicker
                    label="Task due Date"
                    slotProps={slotProps}
                    onChange={(newValue) => {
                      setFieldValue('taskDueDate', newValue);
                    }}
                    sx={{ width: '100%' }}
                    value={
                      values.taskDueDate !== null
                        ? dayjs(values.taskDueDate)
                        : null
                    }
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
                          handleOnclickCreate();
                        } else {
                          console.log('Your Input is not Valid');
                        }
                      },
                    }}
                  >
                    Create and exit
                  </ButtonWrapper>
                  <ButtonWrapper
                    buttonConfig={{
                      ...buttonConfig,
                      sx: {
                        bgcolor: '#5c7fea',
                        '&:hover': {
                          backgroundColor: '#4b70d8',
                        },

                        marginTop: 2,
                      },
                      onClick: () => {
                        if (isValid) {
                          submitForm();
                        } else {
                          console.log('Your Input is not Valid');
                        }
                      },
                    }}
                  >
                    Create and add another
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
