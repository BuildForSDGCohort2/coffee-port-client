import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './custom-input-field.styles';

const CustomInputField = ({ edit, normalMargin , ...otherProps }) => {
  const classes = useStyles();
  return (
    <TextField
      color="secondary"
      className={normalMargin ||edit?null:classes.inputField}
      {...otherProps}
    />
  );
};
export default CustomInputField;
