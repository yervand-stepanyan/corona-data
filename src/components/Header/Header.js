import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { LOGO, TITLE } from '../../globals/constants';
import { useStyles } from './Header.style';

function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <div className={classes.logoTitleWrapper}>
            <div className={classes.logoWrapper}>
              <img alt={LOGO.title} className={classes.logo} src={LOGO.src} />
            </div>
            <div className={classes.titleWrapper}>
              <Typography variant="h6">{TITLE}</Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
