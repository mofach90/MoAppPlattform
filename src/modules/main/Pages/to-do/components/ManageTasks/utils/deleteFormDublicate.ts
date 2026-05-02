import * as Yup from 'yup';
import { requiredAlphanumericField } from '../../../../../../../lib/validation/rules';
import { Task } from '../../../types';
import { deboucedisTitleUnique } from './checkForDublicate';

const deleteFormDublicate = (tasks: Task[]) =>
  Yup.object().shape({
    taskTitle: requiredAlphanumericField('Title', 25)
      .test(
        'is-not-empty-after-trim',
        'Title cannot be empty or just spaces',
        (value) => value !== undefined && value.trim().length > 0,
      )
      .test('is-not-duplicate', 'This Task doenst exist', (value) => {
        return !deboucedisTitleUnique(tasks, value);
      }),
  });

export default deleteFormDublicate;
