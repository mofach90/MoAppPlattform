import dayjs from 'dayjs';
import { debounce } from 'lodash';
import * as Yup from 'yup';
import {
  alphanumericField,
  requiredAlphanumericField,
} from '../../../../../../../lib/validation/rules';
import { Task } from '../../../types';

const isTitleNotEmpty = (title: string | undefined) =>
  title !== undefined && title.trim().length > 0;

const isTitleUnique = (tasks: Task[], title: string | undefined) =>
  title !== undefined &&
  tasks.filter((t) => t.title === title.trim()).length === 0;

const debouncedTitleNotEmpty = debounce(isTitleNotEmpty, 200);
const debouncedTitleUnique = debounce(isTitleUnique, 200);

export const createTaskSchema = () =>
  Yup.object().shape({
    taskTitle: requiredAlphanumericField('Title', 55)
      .test(
        'is-not-empty-after-trim',
        'Title cannot be empty or just spaces',
        (value) => debouncedTitleNotEmpty(value) ?? false,
      ),
    taskDescription: alphanumericField('Description', 500).min(
      8,
      'Description is too short, should be 8 characters minimum',
    ),
    taskDueDate: Yup.date()
      .nullable()
      .test('is-future-date', 'Due Date must be in the future', (value) =>
        !value ? true : dayjs(value).isAfter(dayjs()),
      ),
    taskReminder: Yup.string()
      .nullable()
      .test(
        'is-valid-reminder',
        'Reminder must be set before the due date',
        function (value) {
          const { taskDueDate } = this.parent as { taskDueDate: unknown };
          if (!value || !taskDueDate || value === 'none') return true;
          return dayjs(
            dayjs(taskDueDate as string).subtract(parseInt(value), 'minute'),
          ).isAfter(dayjs());
        },
      )
      .test(
        'due-date-within-29-days',
        'When Using Reminder Due Date must not exceed 29 days',
        function (value) {
          const { taskDueDate } = this.parent as { taskDueDate: unknown };
          if (!value || !taskDueDate || value === 'none') return true;
          return dayjs(taskDueDate as string)
            .subtract(30, 'days')
            .isBefore(dayjs());
        },
      ),
  });

export const deleteTaskSchema = (tasks: Task[]) =>
  Yup.object().shape({
    taskTitle: requiredAlphanumericField('Title', 25)
      .test(
        'is-not-empty-after-trim',
        'Title cannot be empty or just spaces',
        (value) => value !== undefined && value.trim().length > 0,
      )
      .test('task-exists', 'This Task does not exist', (value) =>
        !(debouncedTitleUnique(tasks, value) ?? true),
      ),
  });

export const shouldShowReminder = (
  taskDueDate: unknown,
  initialDueDate: unknown,
): boolean =>
  (!!taskDueDate && taskDueDate !== null) ||
  (!!initialDueDate && taskDueDate !== null);
