import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';

import API from '../../fetchAPI';
import { checkOptionChange } from '../../helpers/checkOptionChange';
import { convertDate } from '../../helpers/convertDate';
import { createCountryList } from '../../helpers/createCountryList';
import { darkTheme, lightTheme } from '../../theme/theme';
import Dropdown from '../../components/Dropdown';
import { filterCountries } from '../../helpers/filterCountries';
import Header from '../../components/Header';
import { LOCAL_STORAGE } from '../../globals/constants';
import Loader from '../../components/Loader';
import { loadState, saveState } from '../../helpers/localStorage';
import ShowDataComponent from '../../components/ShowDataComponent';
import { sortCountries } from '../../helpers/sortCountries';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(
    loadState(LOCAL_STORAGE.darkMode) || false
  );
  const theme = darkMode ? darkTheme : lightTheme;
  const [countries, setCountries] = useState([]);
  const [coronaData, setCoronaData] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const filtersFromLocalStorage = loadState(LOCAL_STORAGE.filters);
  const filterOptions = checkOptionChange(filtersFromLocalStorage);
  const [filterData, setFilterData] = useState(filterOptions);
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

        setIsEdit(!isEdit);
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
    const mappedCountries = filteredCountries.map(country => ({
      activeCases: country['Active Cases_text'],
      name: country.Country_text,
      newCases: country['New Cases_text'],
      newDeaths: country['New Deaths_text'],
      updateDate: convertDate(country['Last Update']),
    }));

    setCountriesToShow(mappedCountries);
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

  const handleCheckboxChange = name => {
    const newFilters = filterData.map(filter =>
      filter.name === name
        ? {
            ...filter,
            checked: !filter.checked,
          }
        : filter
    );

    setFilterData(newFilters);
    saveState(LOCAL_STORAGE.filters, newFilters);
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
                countriesToShow={countriesToShow}
                filterData={filterData}
                handleCheckboxChange={handleCheckboxChange}
                handleShow={handleShow}
              />
            )}
          </div>
        )}
      </Paper>
    </ThemeProvider>
  );
}

export default Main;
