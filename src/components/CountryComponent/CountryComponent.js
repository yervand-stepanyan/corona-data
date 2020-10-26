import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './CountryComponent.style';

function CountryComponent({ country }) {
  const classes = useStyles();

  return (
    <div className={classes.countryComponentContainer}>
      <div>{country.Country_text}</div>
      <div className={classes.newCasesWrapper}>{country['New Cases_text']}</div>
      <div className={classes.lastUpdateWrapper}>{country['Last Update']}</div>
    </div>
  );
}

CountryComponent.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryComponent;
