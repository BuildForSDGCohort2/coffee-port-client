import React from 'react';
import Grid from '@material-ui/core/Grid';
import useForm from '../../hooks/hooks';
import Typography from '@material-ui/core/Typography';
import CustomInputField from '../custom-input-field/custom-input-field.component';
import CustomButton from '../custom-button/custom-button.component';
import useStyles from './sign-in.styles';

const SignIn = ({ loginUser }) => {
  const { handleChange, fieldValues } = useForm({
    email: '',
    password: '',
  });

  const classes = useStyles();
  const handlersubmit = (event) => {
    event.preventDefault();
    loginUser({
      variables: {
        email: fieldValues.email,
        password: fieldValues.password,
      },
    });
  };

  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        className={classes.title}
        color="primary"
      >
        Log In To Access Coffee Port
      </Typography>

      <form onSubmit={handlersubmit}>
        <Grid container spacing={1}>
          <CustomButton
            facebookSignIn
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Continue with FaceBook
          </CustomButton>
          <CustomButton
            googleSignIn
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Continue with Google
          </CustomButton>
          <Grid container item>
            <Grid item xs={5}>
              <hr />
            </Grid>
            <Grid item xs={2} className={classes.divider}>
              or
            </Grid>

            <Grid item xs={5}>
              <hr />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CustomInputField
              required
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              fullWidth
              value={fieldValues.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInputField
              required
              id="password"
              label="Password"
              name="password"
              type="password"
              fullWidth
              value={fieldValues.password}
              onChange={handleChange}
            />
          </Grid>
          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </CustomButton>
        </Grid>
      </form>
    </div>
  );
};

export default SignIn;
