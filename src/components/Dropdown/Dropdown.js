import React from 'react';
import PropTypes from 'prop-types';

import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

import { DROPDOWN_INPUT_LABEL, DROPDOWN_TITLE } from '../../globals/constants';
import { useStyles } from './Dropdown.style';

function Dropdown({ countries }) {
  const classes = useStyles();
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <div className={classes.dropdownContainer}>
      <div>
        <Typography variant="h5">{DROPDOWN_TITLE}</Typography>
      </div>
      <div className={classes.dropdownWrapper}>
        <Autocomplete
          className={classes.dropdown}
          autoHighlight
          disableCloseOnSelect
          getOptionLabel={option => option.name}
          id="checkboxes-tags-demo"
          multiple
          options={countries}
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label={DROPDOWN_INPUT_LABEL}
              placeholder="Favorites"
            />
          )}
          renderOption={(option, { selected }) => (
            <>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.name}
            </>
          )}
          // style={{ width: 500 }}
        />
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default Dropdown;
