import React from 'react';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import FacebookIcon from '@material-ui/icons/Facebook';
import useStyles from './custom-button.styles';
import { ReactComponent as GoogleIcon } from '../../assets/google.svg';
const CustomButton = ({
  children,
  googleSignIn,
  facebookSignIn,
  ...otherProps
}) => {
  const classes = useStyles();
  return (
    <Button
      color="secondary"
      className={
        googleSignIn || facebookSignIn
          ? classes.externalButton
          : classes.submit
      }
      {...otherProps}
    >
      {facebookSignIn ? (
        <FacebookIcon color="primary" />
      ) : googleSignIn ? (
        <SvgIcon
          viewBox="0 0 44 44"
          className={classes.icon}
          component={GoogleIcon}
        />
      ) : null}
      {children}
    </Button>
  );
};
export default CustomButton;
