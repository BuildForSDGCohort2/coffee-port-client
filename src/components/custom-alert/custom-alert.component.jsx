import React from 'react';
import Alert from '@material-ui/lab/Alert';
import useStyles from './custom-alert.styles';


const CustomAlert= ({severity,message})=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity = {severity}>{message}</Alert>

    </div>
  );
}

export default CustomAlert;