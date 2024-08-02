import { debounce } from 'lodash';

const isTitleNotEmpty = (title: string | undefined) => {
  if (title === undefined) {
    return false;
  }
  return title.trim().length > 0;
};

export const deboucedisTitleNotEmpty = debounce(isTitleNotEmpty, 200);
