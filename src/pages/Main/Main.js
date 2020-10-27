import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';

import API from '../../fetchAPI';
import { convertDate } from '../../helpers/convertDate';
import { darkTheme, lightTheme } from '../../theme/theme';
import Header from '../../components/Header';
import { loadState, saveState } from '../../helpers/localStorage';
import { FILTER_OPTIONS, LOCAL_STORAGE } from '../../globals/constants';

import { useStyles } from './Main.style';
import Dropdown from '../../components/Dropdown';
import Loader from '../../components/Loader';
import ShowDataComponent from '../../components/ShowDataComponent';

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
  const filterOptions = filtersFromLocalStorage
    ? filtersFromLocalStorage.map((filter, index) =>
        filter.title === FILTER_OPTIONS[index].title &&
        filter.name === FILTER_OPTIONS[index].name
          ? filter
          : FILTER_OPTIONS[index]
      )
    : FILTER_OPTIONS;
  const [filterData, setFilterData] = useState(filterOptions);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const getData = async () => {
    try {
      const coronaResponse = await API.getCoronaData();
      const countriesArray = await coronaResponse
        .slice(1, -1)
        .map(data => ({ name: data.Country_text }));
      const sortedCountries = [...countriesArray].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

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
    const filteredCountries = selectedCountries.map(country =>
      coronaData.find(data => data.Country_text === country.name)
    );
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
