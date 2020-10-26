import React from 'react';
import PropTypes from 'prop-types';

import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

import {
  DROPDOWN_INPUT_LABEL,
  DROPDOWN_TITLE,
  SHOW_BUTTON_LABEL,
} from '../../globals/constants';
import { useStyles } from './Dropdown.style';

function Dropdown({ countries, handleCountrySelect, selectedCountries }) {
  const classes = useStyles();
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;

  return (
    <div className={classes.dropdownContainer}>
      <div>
        <Typography variant="h5">{DROPDOWN_TITLE}</Typography>
      </div>
      <div className={classes.dropdownWrapper}>
        <Autocomplete
          autoHighlight
          className={classes.dropdown}
          disableCloseOnSelect
          getOptionLabel={option => option.name}
          getOptionSelected={(option, values) => option.name === values.name}
          multiple
          onChange={(event, value) => handleCountrySelect(value)}
          options={countries}
          renderInput={params => (
            <TextField
              {...params}
              label={DROPDOWN_INPUT_LABEL}
              placeholder="Favorites"
              variant="outlined"
            />
          )}
          renderOption={(option, { selected }) => (
            <>
              <Checkbox
                checked={selected}
                checkedIcon={checkedIcon}
                icon={icon}
                style={{ marginRight: 8 }}
              />
              {option.name}
            </>
          )}
          value={selectedCountries}
        />
      </div>
      <div className={classes.buttonWrapper}>
        <Button color="primary" variant="contained">
          {SHOW_BUTTON_LABEL}
        </Button>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  countries: PropTypes.array.isRequired,
  handleCountrySelect: PropTypes.func.isRequired,
  selectedCountries: PropTypes.array.isRequired,
};

export default Dropdown;
