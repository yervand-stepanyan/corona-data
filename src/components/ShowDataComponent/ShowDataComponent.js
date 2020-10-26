import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import CreateIcon from '@material-ui/icons/Create';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
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

function ShowDataComponent({
  countriesToShow,
  filterData,
  handleCheckboxChange,
  handleShow,
}) {
  const classes = useStyles();

  return (
    <div className={classes.showDataContainer}>
      <div className={classes.showDataTitleWrapper}>
        <Typography variant="h5">
          {countriesToShow.length > 1
            ? SHOWDATA_TITLE.multi
            : SHOWDATA_TITLE.single}
        </Typography>
      </div>
      <div className={classes.filtersIconWrapper}>
        <div>
          <FormGroup row>
            {filterData.map(data => (
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={data.checked}
                    onChange={() => handleCheckboxChange(data.name)}
                    size="small"
                  />
                )}
                key={data.name}
                label={data.title}
              />
            ))}
          </FormGroup>
        </div>
        <div>
          <Tooltip title={EDIT_ICON_TOOLTIP_TITLE} TransitionComponent={Zoom}>
            <IconButton onClick={handleShow}>
              <CreateIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className={classes.dataWrapper}>
        <div className={classes.cardWrapper}>
          {countriesToShow.map(country => (
            <CountryComponent
              country={country}
              filterData={filterData}
              key={country.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

ShowDataComponent.propTypes = {
  countriesToShow: PropTypes.array.isRequired,
  filterData: PropTypes.array.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  handleShow: PropTypes.func.isRequired,
};

export default ShowDataComponent;
