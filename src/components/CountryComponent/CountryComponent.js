import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './CountryComponent.style';

function CountryComponent({ country }) {
  const classes = useStyles();

  return (
    <div className={classes.countryComponentContainer}>
      <div>{country.name}</div>
      <div className={classes.newCasesWrapper}>{country.newCases}</div>
      <div className={classes.lastUpdateWrapper}>{country.updateDate}</div>
    </div>
  );
}

CountryComponent.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryComponent;
