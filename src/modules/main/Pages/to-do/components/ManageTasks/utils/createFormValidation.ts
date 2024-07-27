import * as Yup from 'yup';
import { Task } from '../../../types';
import { deboucedisTitleUnique } from './checkForDublicate';

const createFormValidation = (tasks: Task[]) =>
  Yup.object().shape({
    taskTitle: Yup.string()
      .required('Required Field')
      .test(
        'is-not-empty-after-trim',
        'Title cannot be empty or just spaces',
        (value) => value !== undefined && value.trim().length > 0,
      )
      .test('is-not-duplicate', 'This Task already Exist', (value) => {
        return deboucedisTitleUnique(tasks, value);
      })
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

export default createFormValidation;
