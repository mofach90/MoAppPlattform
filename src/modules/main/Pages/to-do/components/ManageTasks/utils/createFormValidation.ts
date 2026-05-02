import dayjs from 'dayjs';
import * as Yup from 'yup';
import {
  alphanumericField,
  requiredAlphanumericField,
} from '../../../../../../../lib/validation/rules';
import { deboucedisTitleNotEmpty } from './CheckForTitleNotEmpty';

const createFormValidation = () =>
  Yup.object().shape({
    taskTitle: requiredAlphanumericField('Title', 55).test(
      'is-not-empty-after-trim',
      'Title cannot be empty or just spaces',
      (value) => deboucedisTitleNotEmpty(value),
    ),
    taskDescription: alphanumericField('Description', 500).min(
      8,
      'Description is too short, should be 8 characters minimum',
    ),
    taskDueDate: Yup.date()
      .nullable()
      .test('is-future-date', 'Due Date must be in the future', (value) => {
        return !value || dayjs(value).isAfter(dayjs());
      }),
    taskReminder: Yup.string()
      .nullable()
      .test(
        'is-valid-reminder',
        'Reminder must be set before the due date',
        function (value) {
          const taskDueDate = (this as unknown as Yup.TestContext)?.parent
            .taskDueDate;
          if (!value || !taskDueDate || value === 'none') return true;
          return dayjs(
            dayjs(taskDueDate).subtract(parseInt(value), 'minute'),
          ).isAfter(dayjs());
        },
      )
      .test(
        'is-valid-reminder',
        'When Using Reminder Due Date must not exceed 29 days',
        function (value) {
          const taskDueDate = (this as unknown as Yup.TestContext)?.parent
            .taskDueDate;
          if (!value || !taskDueDate || value === 'none') return true;
          return dayjs(taskDueDate).subtract(30, 'days').isBefore(dayjs());
        },
      ),
  });

export default createFormValidation;
