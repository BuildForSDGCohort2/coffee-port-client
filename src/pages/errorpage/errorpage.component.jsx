import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import CustomButton from '../../components/custom-button/custom-button.component';
import useStyles from './errorpage.styles';
const ErrorPage = () => {
    const history = useHistory();
    const classes = useStyles();
  return (
    <div className={classes.root}>
      {' '}
      <Typography variant="h1" color="secondary"
      >
        You don't seem to have an internet connection
      </Typography>
     
      <CustomButton
        type="submit"
        variant="contained"
        onClick={()=> history.push('/')}
      >
       Try again
      </CustomButton>
    </div>
  );
};

export default ErrorPage;
