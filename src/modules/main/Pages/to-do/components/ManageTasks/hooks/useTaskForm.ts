import { ButtonProps } from '@mui/material/Button';
import { FormikHelpers } from 'formik';
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

const isTitleUnique = (tasks:Task[], title:string | undefined) =>{
  if (title === undefined) {
    return false
  }
  const newTasks = tasks.filter((task)=>task.title===title.trim())
  return newTasks.length === 0;
}



const CREATE_FORM_VALIDATION = (tasks:Task[]) => Yup.object().shape({
  taskTitle: Yup.string()
    .required('Required Field')
    .test(
      'is-not-empty-after-trim',
      'Title cannot be empty or just spaces',
      (value) => value !== undefined && value.trim().length > 0,
    )
    .test(
      'is-not-duplicate',
      'This Task already Exist',
      (value)=>{
        return isTitleUnique(tasks,value)
      }
    )
    .matches(/^[a-zA-Z0-9 ]+$/, 'Title must include only letters and numbers')
    .max(25, 'Title must be 25 characters or less'),
  taskDescription: Yup.string()
    .required('Required Field')
    .test(
      'is-not-empty-after-trim',
      'Description cannot be empty or just spaces',
      (value) => value !== undefined && value.trim().length > 0,
    )
    .min(8, 'Description is too short, should be 8 characters minimum')
    .matches(
      /^[a-zA-Z0-9 ]+$/,
      'Description must include only letters and numbers',
    )
    .max(500, 'Description must be 500 characters or less'),
});

const DELETE_FORM_VALIDATION = (tasks: Task[]) => Yup.object().shape({
  taskTitle: Yup.string()
    .required('Required Field')
    // .test(
    //   'is-not-empty-after-trim',
    //   'Title cannot be empty or just spaces',
    //   (value) => {
    //     const tasks = useTaskStore((state)=>state.tasks)
    //     const newTasks = tasks.filter((task)=>task.title===value)
    //     console.log("newtasks", newTasks)
    //     return newTasks.length === 0

    //   },
    // )
    .test(
      'is-not-empty-after-trim',
      'This Task doenst exist',
      (value)=>{
         return !isTitleUnique(tasks, value)
      }

,
    )
    .matches(
      /^[a-zA-Z0-9 ]+$/,
      'Title must include only letters, numbers, and spaces',
    )
    .max(25, 'Title must be 25 characters or less'),
});

export const useTaskForm = () => {
  const { addTask, deleteTask, tasks } = useTaskStore();
  const handleCreateTask = (
    values: CreateTaskFormValues,
    { resetForm }: Pick<FormikHelpers<CreateTaskFormValues>, 'resetForm'>,
  ) => {
    const Task: Task = {
      title: values.taskTitle,
      description: values.taskDescription,
      isChecked: false,
    };
    addTask(Task);
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
    CREATE_FORM_VALIDATION : CREATE_FORM_VALIDATION(tasks),
    DELETE_FORM_VALIDATION: DELETE_FORM_VALIDATION(tasks),
    INITIAL_CREATE_FORM_STATE,
    INITIAL_REMOVE_FORM_STATE,
    handleCreateTask,
    handleDeleteTask,
  };
};
