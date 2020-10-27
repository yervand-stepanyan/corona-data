export const createCountryList = array => {
  if (Array.isArray(array) && array.length > 3) {
    return array.slice(1, -1).map(data => ({ name: data.Country_text }));
  }

  return array;
};
