import React from 'react';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import useStyles from './buyer-sign-up.styles';
import CustomInputField from "../custom-input-field/custom-input-field.component"
import CustomButton from "../custom-button/custom-button.component"
const BuyerSignUp = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h5" className={classes.title}>
        CREATE AN ACCOUNT FOR BUYER
      </Typography>

      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CustomInputField
           
              name="First Name"
              label="First Name"
              fullWidth
              required
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
          
              name="Last Name"
              label="Last Name"
              fullWidth
              required
            />
            </Grid>
            <Grid item xs={12}  sm={6}>
              <CustomInputField
             
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
          </Grid>
        
            <Grid item xs={12} sm={6}>
              <CustomInputField
             
                required
                fullWidth
                id="adress"
                label="Address"
                name="adress"
                autoComplete="adress"
              />
          </Grid> <Grid item xs={12} sm={6}>
              <CustomInputField
             
                required
                fullWidth
                id="country"
                label="Country"
                name="country"
               
              />
          </Grid>
          <Grid item xs={12} sm={6}>
              <CustomInputField
            
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
              />
          </Grid>

          <Grid item xs={12}  sm={6}>
              <CustomInputField
             
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
               
              />

          </Grid>
          <Grid item xs={12}  sm={6}>
              <CustomInputField
             
                required
                fullWidth
                id="confirm-password"
                label="Confirm Password"
                name="confirm-password"
               
              />
          </Grid>
          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </CustomButton>

          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>

        </Grid>
      </form>
    </div>
  );
};
export default BuyerSignUp;
