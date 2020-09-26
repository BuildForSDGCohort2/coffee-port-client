import React,{useState} from 'react';
import useStyles from './sign-up-and-sign-in.styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import SignUp from "../../components/sign-up/sign-up.component"
//import  SignInContainer from "../../components/sign-in/sign-in.container"
import SignInContainer from '../../components/sign-in/sign-in.container'
  
// import SignIn from '../../components/sign-in/sign-in.component'
  
const SignUpAndSignInPage = () => {
  const [selectSignIn,setselectSignIn]=useState(true)
  const handleSignInChange=()=>setselectSignIn(!selectSignIn);
  const classes = useStyles();

  return (<div className={classes.paper}>

     {selectSignIn?<SignInContainer />:<SignUp handler={handleSignInChange} />}
     <Grid container justify='flex-end' className={classes.link}>
            <Grid item>
              <Link href='#' color='secondary' onClick={()=>{setselectSignIn(!selectSignIn)}} variant='body2'>
              {selectSignIn?"Don't have an account? Sign up": "Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
      </div>
   
   

  );
};

export default SignUpAndSignInPage;
