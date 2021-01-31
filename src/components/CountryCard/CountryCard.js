import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { CASE_OPTION } from '../../globals/constants';
import { checkIsNumber } from '../../helpers/checkIsNumber';
import { useStyles } from './CountryCard.style';

function CountryCard({ countryData, options }) {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer} variant="outlined">
      <CardContent>
        <div>
          <div>
            <Typography variant="h6">{countryData.name}</Typography>
          </div>
        </div>
        <div className={classes.contentWrapper}>
          <div className={classes.optionsWrapper}>
            {options.map(option =>
              option.checked ? (
                <div className={classes.optionItemWrapper} key={option.name}>
                  <Typography variant="subtitle2">{`${option.title}:`}</Typography>
                </div>
              ) : null
            )}
          </div>
          <div className={classes.dataWrapper}>
            {options.map(option =>
              option.checked ? (
                <div
                  className={`${classes.dataItemWrapper} ${
                    option.name === CASE_OPTION.newCases &&
                    checkIsNumber(countryData[option.name])
                      ? classes.newCasesWrapper
                      : ''
                  } ${
                    option.name === CASE_OPTION.newDeaths &&
                    checkIsNumber(countryData[option.name])
                      ? classes.deathsDataWrapper
                      : ''
                  }`}
                  key={option.name}
                >
                  <Typography
                    variant={`${
                      option.name === CASE_OPTION.updateDate
                        ? 'subtitle2'
                        : 'subtitle1'
                    }`}
                  >
                    {countryData[option.name]}
                  </Typography>
                </div>
              ) : null
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

CountryCard.propTypes = {
  countryData: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
};

export default CountryCard;
