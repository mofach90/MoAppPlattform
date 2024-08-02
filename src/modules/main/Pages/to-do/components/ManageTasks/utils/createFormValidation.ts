import * as Yup from 'yup';
import { deboucedisTitleNotEmpty } from './CheckForTitleNotEmpty';

const createFormValidation = () =>
  Yup.object().shape({
    taskTitle: Yup.string()
      .required('Required Field')
      .test(
        'is-not-empty-after-trim',
        'Title cannot be empty or just spaces',
        (value) => deboucedisTitleNotEmpty(value),
      )
      .matches(/^[a-zA-Z0-9 ]+$/, 'Title must include only letters and numbers')
      .max(55, 'Title must be 55 characters or less'),
    taskDescription: Yup.string()

      .min(8, 'Description is too short, should be 8 characters minimum')
      .matches(
        /^[a-zA-Z0-9 ]+$/,
        'Description must include only letters and numbers',
      )
      .max(500, 'Description must be 500 characters or less'),
  });

export default createFormValidation;
