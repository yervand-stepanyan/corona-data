import logo from '../assets/images/corona-logo_260x260.png';

export const DROPDOWN_INPUT_LABEL = 'Countries';
export const DROPDOWN_TITLE = 'Select at least one country';
export const EDIT_ICON_TOOLTIP_TITLE = 'Edit countries';
export const FILTER_OPTIONS = [
  {
    checked: true,
    name: 'newCases',
    title: 'New cases',
  },
  {
    checked: true,
    name: 'updateDate',
    title: 'Update time',
  },
  {
    checked: false,
    name: 'newDeaths',
    title: 'New deaths',
  },
  {
    checked: false,
    name: 'activeCases',
    title: 'Active cases',
  },
];
export const LOCAL_STORAGE = {
  darkMode: 'darkMode',
  filters: 'filters',
  selectedCountries: 'selectedCountries',
};
export const LOGO = {
  src: logo,
  title: 'logo',
};
export const SHOW_BUTTON_LABEL = 'Save & Show';
export const SHOWDATA_TITLE = {
  single: 'Data for selected country',
  multi: 'Data for selected countries',
};
export const TITLE = 'Corona Data';
