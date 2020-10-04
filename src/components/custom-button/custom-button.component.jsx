import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => {
  const classes = useStyles();
  return (
    <Button
      color="secondary"
      className={classes.submit}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
