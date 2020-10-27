import { FILTER_OPTIONS } from '../globals/constants';

export const checkOptionChange = array => {
  if (array) {
    return array.map((filter, index) =>
      filter.title === FILTER_OPTIONS[index].title &&
      filter.name === FILTER_OPTIONS[index].name
        ? filter
        : FILTER_OPTIONS[index]
    );
  }
  return FILTER_OPTIONS;
};
