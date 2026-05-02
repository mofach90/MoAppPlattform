import {
  CreateTaskFormValues,
  Initial_Update_State_Type,
} from '../../../types';

export function shouldShowReminder(
  values: CreateTaskFormValues,
  INITIAL_UPDATE_FORM_STATE: Initial_Update_State_Type,
) {
  return (
    (!!values.taskDueDate && values.taskDueDate !== null) ||
    (!!INITIAL_UPDATE_FORM_STATE.taskDueDate && values.taskDueDate !== null)
  );
}
