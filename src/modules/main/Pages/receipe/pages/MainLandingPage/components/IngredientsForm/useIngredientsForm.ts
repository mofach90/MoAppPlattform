import { ButtonProps } from '@mui/material/Button';

import { IngredientsFormValues } from '../../../../types/ingredientsFormValues';
import createIngFormValidation from './createIngFormValidation';

const buttonConfig: ButtonProps = {
  variant: 'outlined',
  color: 'inherit',
  fullWidth: true,
};

const INITIAL_CREATE_FORM_STATE = {
  ingredient: '',
};

export const useIngredientsForm = () => {
  // const title = selectedTask?.title ? selectedTask.title : '';

  const handleSubmit = (
    values: IngredientsFormValues,
    // {
    //   resetForm,
    //   setFieldValue,
    // }: Pick<FormikHelpers<CreateTaskFormValues>, 'resetForm' | 'setFieldValue'>,
  ) => {
    console.log('values to crteate', values);
    // const Task: any = {
    //   title: values.taskTitle,
    //   description: values.taskDescription,
    //   isChecked: false,
    //   dueDate: values.taskDueDate
    //   ? dayjs(values.taskDueDate).toISOString()
    //   : null,
    //   reminder:
    //   values.taskReminder && values.taskDueDate
    //   ? values.taskReminder
    //   : undefined,
    //   priority: values.taskPriority ? values.taskPriority : 'medium',
    //   topic: values.taskTopic,
    // };
    // console.log('task to crteate', Task);

    // createTask(Task);
    // resetForm();
    // setTimeout(() => {

    //   console.log('values after to crteate', values);
    // }, 2000);

    // resetForm({
    //   values: {
    //     ...INITIAL_CREATE_FORM_STATE,
    //     taskTitle: "test",
    //     taskPriority: "low",
    //     taskTopic: null,
    //   },
    // });
  };

  return {
    buttonConfig,
    CREATE_FORM_VALIDATION: createIngFormValidation(),
    INITIAL_CREATE_FORM_STATE,

    handleSubmit,
  };
};
