import { OPTIONS } from '../globals/constants';

export const checkOptionNameChange = array => {
  if (Array.isArray(array) && array.length) {
    return array.map((filter, index) =>
      filter.title === OPTIONS[index].title &&
      filter.name === OPTIONS[index].name
        ? filter
        : OPTIONS[index]
    );
  }
  return OPTIONS;
};
