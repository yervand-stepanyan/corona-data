export const createCountryList = array => {
  return array.slice(1, -1).map(data => ({ name: data.Country_text }));
};
