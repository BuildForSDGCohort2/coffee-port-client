import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './custom-combo-box.styles';

const CustomComboBox = ({ label,error,helperText, wide, ...allProps }) => {
  const classes = useStyles();
  return (
    <Autocomplete
      {...allProps}
      className={classes.wideWidth}
      size="small"
      renderInput={(params) => (
        <TextField
          color="secondary"
          {...params}
          InputLabelProps={{
            shrink: true,
          }}
          error={error}
          helperText={helperText}
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};
export default CustomComboBox;
