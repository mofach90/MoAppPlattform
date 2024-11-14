import * as Yup from 'yup';
import { deboucedisTitleNotEmpty } from '../../../../../to-do/components/ManageTasks/utils/CheckForTitleNotEmpty';

const createIngFormValidation = () =>
  Yup.object().shape({
    ingredient: Yup.string()
      .required('Required Field')
      .test(
        'is-not-empty-after-trim',
        'Title cannot be empty or just spaces',
        (value) => deboucedisTitleNotEmpty(value),
      )
      .matches(
        /^[a-zA-Z0-9 ]+$/,
        'Ingredient must include only letters and numbers',
      )
      .max(55, 'Title must be 55 characters or less'),
    // taskDescription: Yup.string()

    //   .min(8, 'Description is too short, should be 8 characters minimum')
    //   .matches(
    //     /^[a-zA-Z0-9 ]+$/,
    //     'Description must include only letters and numbers',
    //   )
    //   .max(500, 'Description must be 500 characters or less'),
    // taskDueDate: Yup.date()
    //   .nullable()
    //   .test('is-future-date', 'Due Date must be in the future', (value) => {
    //     console.log(' value === null || dayjs(value).isAfter(dayjs()', value);
    //     return !value || dayjs(value).isAfter(dayjs());
    //   }),

    // taskReminder: Yup.string()
    //   .nullable()
    //   .test(
    //     'is-valid-reminder',
    //     'Reminder must be set before the due date',
    //     function (value) {
    //       const taskDueDate = (this as unknown as Yup.TestContext)?.parent
    //         .taskDueDate;
    //       if (!value || !taskDueDate || value === 'none') {
    //         return true; // because there is no validation needed
    //       }
    //       const reminderTime = dayjs(taskDueDate).subtract(
    //         parseInt(value),
    //         'minute',
    //       );
    //       const reminderInFuture = dayjs(reminderTime).isAfter(dayjs());
    //       return reminderInFuture;
    //     },
    //   )
    //   .test(
    //     'is-valid-reminder',
    //     'When Using Reminder Due Date must not exceed 29 days',
    //     function (value) {
    //       const taskDueDate = (this as unknown as Yup.TestContext)?.parent
    //         .taskDueDate;
    //       if (!value || !taskDueDate || value === 'none') {
    //         return true; // because there is no validation needed
    //       }
    //       const notAfter29Days = dayjs(taskDueDate)
    //         .subtract(30, 'days')
    //         .isBefore(dayjs());
    //       return notAfter29Days;
    //     },
    //   ),
  });

export default createIngFormValidation;
