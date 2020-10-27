export const filterCountries = (arrayToCheck, arrayCheckFrom) => {
  if (
    Array.isArray(arrayToCheck) &&
    Array.isArray(arrayCheckFrom) &&
    arrayToCheck.length &&
    arrayCheckFrom.length
  ) {
    return arrayToCheck.map(country =>
      arrayCheckFrom.find(data => data.Country_text === country.name)
    );
  }
  return [];
};
