import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { CASE_OPTION } from '../../globals/constants';
import { checkIsNumber } from '../../helpers/checkIsNumber';
import { useStyles } from './CountryCard.style';

function CountryCard({ country, filterData }) {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer} variant="outlined">
      <CardContent>
        <div>
          <Typography variant="h6">{country.name}</Typography>
        </div>
        {filterData.map(filter =>
          filter.checked ? (
            <div className={classes.caseWrapper} key={filter.name}>
              <div>
                <Typography variant="subtitle2">{`${filter.title}:`}</Typography>
              </div>
              <div
                className={`${classes.dataWrapper} ${
                  filter.name === CASE_OPTION.newCases &&
                  checkIsNumber(country[filter.name])
                    ? classes.newCasesWrapper
                    : ''
                } ${
                  filter.name === CASE_OPTION.newDeaths &&
                  checkIsNumber(country[filter.name])
                    ? classes.deathDataWrapper
                    : ''
                }`}
              >
                <Typography variant="subtitle1">
                  {country[filter.name]}
                </Typography>
              </div>
            </div>
          ) : null
        )}
      </CardContent>
    </Card>
  );
}

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
  filterData: PropTypes.array.isRequired,
};

export default CountryCard;
