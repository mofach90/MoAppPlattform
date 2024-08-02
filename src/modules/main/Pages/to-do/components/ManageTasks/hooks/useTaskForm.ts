import { ButtonProps } from '@mui/material/Button';
import { FormikHelpers } from 'formik';
import useTaskStore from '../../../hooks/useTaskStore';
import { CreateTaskFormValues, Task } from '../../../types';
import createFormValidation from '../utils/createFormValidation';
import deleteFormDublicate from '../utils/deleteFormDublicate';

const buttonConfig: ButtonProps = {
  variant: 'contained',
  color: 'primary',
  fullWidth: true,
};

const INITIAL_CREATE_FORM_STATE = {
  taskTitle: '',
  taskDescription: '',
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
    const Task: Task = {
      title: values.taskTitle,
      description: values.taskDescription,
      isChecked: false,
    };
    createTask(Task);
    resetForm();
  };
  const handleUpdateTask = (
    values: CreateTaskFormValues,
    { resetForm }: Pick<FormikHelpers<CreateTaskFormValues>, 'resetForm'>,
  ) => {
    const Task: Task = {
      id:selectedTask?.id,
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
