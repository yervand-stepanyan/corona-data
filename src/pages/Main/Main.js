import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { darkTheme, lightTheme } from '../../theme/theme';
import Header from '../../components/Header';
import { loadState, saveState } from '../../helpers/localStorage';
import { LOCAL_STORAGE } from '../../globals/constants';

import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(
    loadState(LOCAL_STORAGE.darkMode) || false
  );
  const theme = darkMode ? darkTheme : lightTheme;

  const handleDarkMode = () => {
    setDarkMode(!darkMode);

    saveState(LOCAL_STORAGE.darkMode, !darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.paper}>
        <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <Typography variant="h1">React</Typography>
      </Paper>
    </ThemeProvider>
  );
}

export default Main;
