import { debounce } from 'lodash';
import { Task } from '../../../types';

const isTitleUnique = (tasks: Task[], title: string | undefined) => {
  if (title === undefined) {
    return false;
  }
  const newTasks = tasks.filter((task) => task.title === title.trim());
  return newTasks.length === 0;
};

export const deboucedisTitleUnique = debounce(isTitleUnique, 200);
