import { ButtonProps } from '@mui/material/Button';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { FormikHelpers } from 'formik';
import { useEffect } from 'react';
import useTaskStore from '../../../hooks/useTaskStore';
import {
  CreateTaskFormValues,
  Initial_Update_State_Type,
  PriorityType,
  Task,
  TopicType,
} from '../../../types';
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
  taskDueDate: null,
  taskPriority: undefined,
  // taskPriority: 'medium' as PriorityType,
  taskReminder: undefined,
  taskTopic: 'Others' as TopicType,
};
const INITIAL_REMOVE_FORM_STATE = {
  taskTitle: '',
};

export const useTaskForm = () => {
  const { createTask, deleteTask, tasks, updateTask } = useTaskStore();
  const selectedTask = useTaskStore((state) => state.selectedTask);

  useEffect(() => {
    console.log('selectedTask yahoo', selectedTask);
  }, [selectedTask]);

  const title = selectedTask?.title ? selectedTask.title : '';
  const priority = selectedTask?.priority ? selectedTask.priority : 'medium';
  const description = selectedTask?.description ? selectedTask.description : '';
  const dueDate = selectedTask?.dueDate ? dayjs(selectedTask.dueDate) : null;
  const reminder = selectedTask?.reminder;
  const topic = selectedTask?.topic ?? null;

  const handleCreateTask = (
    values: CreateTaskFormValues,
    {
      resetForm,
      setFieldValue,
    }: Pick<FormikHelpers<CreateTaskFormValues>, 'resetForm' | 'setFieldValue'>,
  ) => {
    console.log('values to crteate', values);
    const Task: Task = {
      title: values.taskTitle,
      description: values.taskDescription,
      isChecked: false,
      dueDate: values.taskDueDate
      ? dayjs(values.taskDueDate).toISOString()
      : null,
      reminder:
      values.taskReminder && values.taskDueDate
      ? values.taskReminder
      : undefined,
      priority: values.taskPriority ? values.taskPriority : 'medium',
      topic: values.taskTopic,
    };
    console.log('task to crteate', Task);
    
    createTask(Task);
    resetForm();
    setTimeout(() => {
      
      console.log('values after to crteate', values);
    }, 2000);
    
    // resetForm({
    //   values: {
    //     ...INITIAL_CREATE_FORM_STATE,
    //     taskTitle: "test",
    //     taskPriority: "low",
    //     taskTopic: null,
    //   },
    // });
  };
  const handleUpdateTask = (
    values: Initial_Update_State_Type,
    { resetForm }: Pick<FormikHelpers<Initial_Update_State_Type>, 'resetForm'>,
  ) => {
    const Task: Task = {
      id: selectedTask?.id,
      title: values.taskTitle,
      description: values.taskDescription,
      isChecked: selectedTask?.isChecked,
      dueDate: values.taskDueDate ? values.taskDueDate.toISOString() : null,
      createdAt: selectedTask?.createdAt,
      updatedAt: dayjs(new Date()).toISOString(),
      priority: values.taskPriority,
      reminder:
        values.taskReminder && values.taskDueDate
          ? values.taskReminder
          : undefined,
      topic: values.taskTopic
    };
    console.log('task updated', Task);
    console.log('task updated values', values);
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
      taskDueDate: dueDate,
      taskPriority: priority,
      taskReminder: reminder,
      taskTopic: topic as TopicType,

    },
    handleCreateTask,
    handleDeleteTask,
    handleUpdateTask,
  };
};
