import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import { Brightness2, Brightness7 } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { LOGO, TITLE } from '../../globals/constants';
import { useStyles } from './Header.style';

function Header({ darkMode, handleDarkMode }) {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <div className={classes.logoIconContainer}>
            <div className={classes.logoTitleWrapper}>
              <div className={classes.logoWrapper}>
                <img alt={LOGO.title} className={classes.logo} src={LOGO.src} />
              </div>
              <div className={classes.titleWrapper}>
                <Typography variant="h6">{TITLE}</Typography>
              </div>
            </div>
            <div>
              {darkMode ? (
                <IconButton className={classes.icon} onClick={handleDarkMode}>
                  <Brightness7 />
                </IconButton>
              ) : (
                <IconButton className={classes.icon} onClick={handleDarkMode}>
                  <Brightness2 />
                </IconButton>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  handleDarkMode: PropTypes.func.isRequired,
};

export default Header;
