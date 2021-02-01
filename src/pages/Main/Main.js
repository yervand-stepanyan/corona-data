import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';

import API from '../../fetchAPI';
import { checkOptionNameChange } from '../../helpers/checkOptionNameChange';
import { createCountryList } from '../../helpers/createCountryList';
import { darkTheme, lightTheme } from '../../theme/theme';
import Dropdown from '../../components/Dropdown';
import { filterCountries } from '../../helpers/filterCountries';
import Header from '../../components/Header';
import { LOCAL_STORAGE } from '../../globals/constants';
import Loader from '../../components/Loader';
import { loadState, saveState } from '../../helpers/localStorage';
import { normalizeCountries } from '../../helpers/normalizeCountries';
import { renameLocalStorageKey } from '../../helpers/renameLocalStorageKey';
import ShowDataComponent from '../../components/ShowDataComponent';
import { sortCountries } from '../../helpers/sortCountries';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  renameLocalStorageKey(LOCAL_STORAGE.filters, LOCAL_STORAGE.options);
  const [darkMode, setDarkMode] = useState(
    loadState(LOCAL_STORAGE.darkMode) || false
  );
  const theme = darkMode ? darkTheme : lightTheme;
  const [countries, setCountries] = useState([]);
  const [coronaData, setCoronaData] = useState([]);
  const [countriesDataToShow, setCountriesDataToShow] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const optionsFromLocalStorage = loadState(LOCAL_STORAGE.options);
  const fixedOptions = checkOptionNameChange(optionsFromLocalStorage);
  const [options, setOptions] = useState(fixedOptions);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const getData = async () => {
    try {
      const coronaResponse = await API.getCoronaData();
      const countriesArray = await createCountryList(coronaResponse);
      const sortedCountries = sortCountries(countriesArray);

      setCountries(sortedCountries);
      setCoronaData(coronaResponse);

      const selectedCountriesFromLocalStorage = loadState(
        LOCAL_STORAGE.selectedCountries
      );

      if (
        selectedCountriesFromLocalStorage &&
        selectedCountriesFromLocalStorage.length
      ) {
        setSelectedCountries(selectedCountriesFromLocalStorage);

        setIsEdit(false);

        setOptions(fixedOptions);
      }
    } catch (e) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filteredCountries = filterCountries(selectedCountries, coronaData);
    const normalizedCountries = normalizeCountries(filteredCountries);

    setCountriesDataToShow(normalizedCountries);
  }, [selectedCountries]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);

    saveState(LOCAL_STORAGE.darkMode, !darkMode);
  };

  const handleCountrySelect = countriesArray => {
    setSelectedCountries(countriesArray);

    saveState(LOCAL_STORAGE.selectedCountries, countriesArray);
  };

  const handleShow = event => {
    event.preventDefault();

    setIsEdit(!isEdit);
  };

  const handleOptionChange = name => {
    const changedOptions = options.map(option =>
      option.name === name
        ? {
            ...option,
            checked: !option.checked,
          }
        : option
    );

    setOptions(changedOptions);
    saveState(LOCAL_STORAGE.options, changedOptions);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.paper} square>
        <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            {isEdit ? (
              <Dropdown
                countries={countries}
                handleCountrySelect={handleCountrySelect}
                handleShow={handleShow}
                selectedCountries={selectedCountries}
              />
            ) : (
              <ShowDataComponent
                countriesDataToShow={countriesDataToShow}
                handleOptionChange={handleOptionChange}
                handleShow={handleShow}
                options={options}
              />
            )}
          </div>
        )}
      </Paper>
    </ThemeProvider>
  );
}

export default Main;
