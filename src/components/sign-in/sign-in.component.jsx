import React from 'react';
import Grid from '@material-ui/core/Grid';
import useForm from '../../hooks/hooks';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import CustomInputField from '../custom-input-field/custom-input-field.component';
import CircularProgress from '@material-ui/core/CircularProgress';
import CustomButton from '../custom-button/custom-button.component';

import useStyles from './sign-in.styles';

const SignIn = ({ loginUser, loading, message, inputErrors }) => {
  const { handleChange, fieldValues } = useForm({
    email: '',
    password: '',
  });
  if (loading) {
  }

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
    <div>
      <div className={classes.root}>
        <Typography
          variant="h4"
          className={classes.title}
          color="secondary"
        >
          Log In To Access Coffee Port
        </Typography>

        <FormControl>
          <Grid container spacing={1}>

            <hr />
            <Grid item xs={12}>
              <CustomInputField
                error={
                  inputErrors
                    ? inputErrors.email
                      ? true
                      : false
                    : null
                }
                helperText={inputErrors ? inputErrors.email : null}
                required
                id="email"
                label="Email Address"
                name="email"
                variant="outlined"
                autoComplete="email"
                fullWidth
                value={fieldValues.email}
                onChange={handleChange}
                className={classes.input}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInputField
                error={
                  inputErrors
                    ? inputErrors.password
                      ? true
                      : false
                    : null
                }
                helperText={inputErrors ? inputErrors.password : null}
                id="password"
                label="Password"
                variant="outlined"
                name="password"
                type="password"
                fullWidth
                value={fieldValues.password}
                className={classes.input}
                onChange={handleChange}
              />
            </Grid>
            <FormHelperText error={message ? true : false}>
              {message ? message : null}
            </FormHelperText>
            <CustomButton
              type="submit"
              className={classes.input}
              fullWidth
              variant="contained"
              onClick={handlersubmit}
            >
              {loading === true ? (
                <CircularProgress
                  className={classes.progress}
                  color="white"
                  size="1.2rem"
                />
              ) : null}
              Sign In
            </CustomButton>
          </Grid>
        </FormControl>
      </div>
    </div>
  );
};

export default SignIn;
