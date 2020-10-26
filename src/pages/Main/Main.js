import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';

import API from '../../fetchAPI';
import { darkTheme, lightTheme } from '../../theme/theme';
import Header from '../../components/Header';
import { loadState, saveState } from '../../helpers/localStorage';
import { LOCAL_STORAGE } from '../../globals/constants';

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
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [countriesToShow, setCountriesToShow] = useState([]);
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

      const dataFromLocalStorage = loadState(LOCAL_STORAGE.selectedCountries);

      if (dataFromLocalStorage) {
        setSelectedCountries(dataFromLocalStorage);
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

    setCountriesToShow(filteredCountries);
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

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.paper} square>
        <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            {isEdit || !selectedCountries.length ? (
              <Dropdown
                countries={countries}
                handleCountrySelect={handleCountrySelect}
                handleShow={handleShow}
                selectedCountries={selectedCountries}
              />
            ) : (
              <ShowDataComponent
                countriesToShow={countriesToShow}
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
