import { ButtonProps } from '@mui/material/Button';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { FormikHelpers } from 'formik';
import useTaskStore from '../../../hooks/useTaskStore';
import { CreateTaskFormValues, Task } from '../../../types';
import createFormValidation from '../utils/createFormValidation';
import deleteFormDublicate from '../utils/deleteFormDublicate';

dayjs.extend(utc);
dayjs.extend(timezone);

const buttonConfig: ButtonProps = {
  variant: 'contained',
  color: 'primary',
  fullWidth: true,
};

const INITIAL_CREATE_FORM_STATE = {
  taskTitle: '',
  taskDescription: '',
  // taskDueDate: dayjs(new Date()).toISOString(),
  taskDueDate: '',
};
const INITIAL_REMOVE_FORM_STATE = {
  taskTitle: '',
};

export const useTaskForm = () => {
  const { createTask, deleteTask, tasks, updateTask } = useTaskStore();
  const selectedTask = useTaskStore((state) => state.selectedTask);
  const title = selectedTask ? selectedTask.title : '';
  const description = selectedTask ? selectedTask.description : '';
  const handleCreateTask = (
    values: CreateTaskFormValues,
    { resetForm }: Pick<FormikHelpers<CreateTaskFormValues>, 'resetForm'>,
  ) => {
    console.log("values to crteate", values)
    const Task: Task = {
      title: values.taskTitle,
      description: values.taskDescription,
      isChecked: false,
      dueDate: values.taskDueDate ? dayjs(values.taskDueDate).toISOString() : undefined,
    };
    console.log("task to crteate", Task)

    createTask(Task);
    resetForm();
  };
  const handleUpdateTask = (
    values: CreateTaskFormValues,
    { resetForm }: Pick<FormikHelpers<CreateTaskFormValues>, 'resetForm'>,
  ) => {
    const Task: Task = {
      id: selectedTask?.id,
      title: values.taskTitle,
      description: values.taskDescription,
      isChecked: false,
    };
    updateTask(Task);
    resetForm();
  };
  const handleDeleteTask = (
    values: Pick<CreateTaskFormValues, 'taskTitle'>,
    { resetForm }: Pick<FormikHelpers<CreateTaskFormValues>, 'resetForm'>,
  ) => {
    deleteTask(values.taskTitle);
    resetForm();
  };

  return {
    buttonConfig,
    CREATE_FORM_VALIDATION: createFormValidation(),
    DELETE_FORM_VALIDATION: deleteFormDublicate(tasks),
    INITIAL_CREATE_FORM_STATE,
    INITIAL_REMOVE_FORM_STATE,
    INITIAL_UPDATE_FORM_STATE: {
      taskTitle: title,
      taskDescription: description,
    },
    handleCreateTask,
    handleDeleteTask,
    handleUpdateTask,
  };
};
