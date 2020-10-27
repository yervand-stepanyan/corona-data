export const sortCountries = array => {
  if (Array.isArray(array) && array.length > 1) {
    return [...array].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  return array;
};
