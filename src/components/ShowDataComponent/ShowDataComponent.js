import React from 'react';
import PropTypes from 'prop-types';

import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Typography } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';

import CountryComponent from '../CountryComponent';
import {
  EDIT_ICON_TOOLTIP_TITLE,
  SHOWDATA_TITLE,
} from '../../globals/constants';
import { useStyles } from './ShowDataComponent.style';

function ShowDataComponent({ countriesToShow, handleShow }) {
  const classes = useStyles();

  return (
    <div className={classes.showDataContainer}>
      <div className={classes.showDataTitleWrapper}>
        <Typography variant="h6">
          {countriesToShow.length > 1
            ? SHOWDATA_TITLE.multi
            : SHOWDATA_TITLE.single}
        </Typography>
      </div>
      <div className={classes.dataWrapper}>
        <div>
          {countriesToShow.map(country => (
            <CountryComponent country={country} key={country.Country_text} />
          ))}
        </div>
        <div>
          <Tooltip title={EDIT_ICON_TOOLTIP_TITLE} TransitionComponent={Zoom}>
            <IconButton onClick={handleShow}>
              <CreateIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

ShowDataComponent.propTypes = {
  countriesToShow: PropTypes.array.isRequired,
  handleShow: PropTypes.func.isRequired,
};

export default ShowDataComponent;
