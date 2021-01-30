import logo from '../assets/images/corona-logo_260x260.png';

export const DROPDOWN_INPUT_LABEL = 'Countries';
export const DROPDOWN_TITLE = 'Select at least one country';
export const EDIT_ICON_TOOLTIP_TITLE = 'Edit countries';
export const OPTIONS = [
  {
    checked: true,
    name: 'newCases',
    title: 'New cases',
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
  {
    checked: true,
    name: 'updateDate',
    title: 'Last updated',
  },
];
export const CASE_OPTION = {
  newCases: OPTIONS[0].name,
  newDeaths: OPTIONS[1].name,
  activeCases: OPTIONS[2].name,
  updateDate: OPTIONS[3].name,
};
export const LOCAL_STORAGE = {
  darkMode: 'darkMode',
  options: 'options',
  selectedCountries: 'selectedCountries',
};
export const LOGO = {
  src: logo,
  title: 'logo',
};
export const NOT_AVAILABLE = 'N/A';
export const SHOW_BUTTON_LABEL = 'Save & Show';
export const SHOWDATA_TITLE = {
  single: 'Data for selected country',
  multi: 'Data for selected countries',
};
export const TITLE = 'Corona Data';
