import * as Yup from 'yup';
import { Task } from '../../../types';
import { deboucedisTitleUnique } from './checkForDublicate';

const deleteFormDublicate = (tasks: Task[]) =>
  Yup.object().shape({
    taskTitle: Yup.string()
      .required('Required Field')
      .test(
        'is-not-empty-after-trim',
        'Title cannot be empty or just spaces',
        (value) => value !== undefined && value.trim().length > 0,
      )
      .test('is-not-duplicate', 'This Task doenst exist', (value) => {
        return !deboucedisTitleUnique(tasks, value);
      })
      .matches(
        /^[a-zA-Z0-9 ]+$/,
        'Title must include only letters, numbers, and spaces',
      )
      .max(25, 'Title must be 25 characters or less'),
  });

export default deleteFormDublicate;
