import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Header from '../../components/Header';
import { darkTheme, lightTheme } from '../../theme/theme';

import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
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
