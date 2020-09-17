import React,{useState} from 'react';
import useStyles from './sign-up-and-sign-in.styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import SignUp from "../../components/sign-up/sign-up.component"
import  SignIn from "../../components/sign-in/sign-in.component"
const SignUpAndSignInPage = () => {
  const [selectSignIn,setselectSignIn]=useState(true);
  const handleSignInChange=()=>setselectSignIn(!selectSignIn);
  const classes = useStyles();

  return (
 
    <Card raised  className={classes.root}>
        <CardContent className={classes.cardContent} >
    <Grid container >
      <Grid item xs={false} sm={4} md={5}   className={classes.image}>
      </Grid>
      <Grid item  xs={12} sm={8} md={7} className={classes.paper}>

     {selectSignIn?<SignIn handler={handleSignInChange}/>:<SignUp handler={handleSignInChange} />}
      </Grid>
    </Grid>
    </CardContent>
    </Card>

  );
};

export default SignUpAndSignInPage;
