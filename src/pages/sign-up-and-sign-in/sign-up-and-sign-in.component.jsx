import React,{useState} from 'react';
import useStyles from './sign-up-and-sign-in.styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import SignUp from "../../components/sign-up/sign-up.component"
//import  SignInContainer from "../../components/sign-in/sign-in.container"
import SignInContainer from '../../components/sign-in/sign-in.container'
  
// import SignIn from '../../components/sign-in/sign-in.component'
  
const SignUpAndSignInPage = () => {
  const [selectSignIn,setselectSignIn]=useState(true)
  const handleSignInChange=()=>setselectSignIn(!selectSignIn);
  const classes = useStyles();

  return (
 
    <Card raised  className={classes.root}>
        <CardContent className={classes.cardContent} >
    <Grid container >
      <Grid item xs={false} sm={4} md={5}   className={classes.image}>
      </Grid>
      <Grid item  xs={12} sm={8} md={7} className={classes.paper}>

     {selectSignIn?<SignInContainer />:<SignUp handler={handleSignInChange} />}
     <Grid container justify='flex-end' className={classes.link}>
            <Grid item>
              <Link href='#' onClick={()=>{setselectSignIn(!selectSignIn)}} variant='body2'>
              {selectSignIn?"Don't have an account? Sign up": "Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
      </Grid>
    </Grid>
    </CardContent>
    </Card>

  );
};

export default SignUpAndSignInPage;
