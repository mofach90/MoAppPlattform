import { ButtonProps } from '@mui/material/Button';
import * as Yup from 'yup';
import useTaskStore from '../../../hooks/useTaskStore';
import { CreateTaskFormValues, Task } from '../../../types';

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

const CREATE_FORM_VALIDATION = Yup.object().shape({
  taskTitle: Yup.string()
    .required('Required Field')
    .matches(/^[a-zA-Z0-9 ]+$/, 'Title must include only letters and numbers')
    .max(25, 'Title must be 25 characters or less'),
  taskDescription: Yup.string()
    .required('Required Field')
    .min(8, 'Description is too short, should be 8 characters minimum')
    .matches(
      /^[a-zA-Z0-9 ]+$/,
      'Description must include only letters and numbers',
    )
    .max(500, 'Description must be 500 characters or less'),
});

const DELETE_FORM_VALIDATION = Yup.object().shape({
  taskTitle: Yup.string()
    .required('Required Field')
    .matches(
      /^[a-zA-Z0-9 ]+$/,
      'Title must include only letters, numbers, and spaces',
    )
    .max(25, 'Title must be 25 characters or less'),
});

export const useTaskForm = () => {
  const { createTask, deleteTask } = useTaskStore();
  const handleCreateTask = (values: CreateTaskFormValues) => {
    const Task: Task = {
      title: values.taskTitle,
      description: values.taskDescription,
      isChecked: false,
    };
    createTask(Task);
  };
  const handleDeleteTask = (
    values: Pick<CreateTaskFormValues, 'taskTitle'>,
  ) => {
    console.log('tasks', values);
    deleteTask(values.taskTitle);
  };

  return {
    buttonConfig,
    CREATE_FORM_VALIDATION,
    DELETE_FORM_VALIDATION,
    INITIAL_CREATE_FORM_STATE,
    INITIAL_REMOVE_FORM_STATE,
    handleCreateTask,
    handleDeleteTask,
  };
};
