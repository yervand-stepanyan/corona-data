import { convertDate } from './convertDate';
import { NOT_AVAILABLE } from '../globals/constants';

export const refactorCountries = array => {
  if (Array.isArray(array) && array.length) {
    return array.map(country => ({
      activeCases: country['Active Cases_text'] || NOT_AVAILABLE,
      name: country.Country_text || NOT_AVAILABLE,
      newCases: country['New Cases_text'] || NOT_AVAILABLE,
      newDeaths: country['New Deaths_text'] || NOT_AVAILABLE,
      updateDate: convertDate(country['Last Update']) || NOT_AVAILABLE,
    }));
  }
  return array;
};
