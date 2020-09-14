import React from 'react';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import useForm from '../../hooks/hooks';
import useStyles from './supplier-sign-up.styles';
import CustomInputField from '../custom-input-field/custom-input-field.component';
import CustomButton from '../custom-button/custom-button.component';
const SupplierSignUp = () => {
  const classes = useStyles();
  const { handleChange, fieldValues, handleSubmit } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    country: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  return (
    <div>
      <Typography variant="h5" className={classes.title}>
        CREATE AN ACCOUNT FOR SUPPLIER
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              name="firstName"
              label="First Name"
              fullWidth
              required
              autoFocus
              value={fieldValues.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              name="lastName"
              label="Last Name"
              fullWidth
              required
              value={fieldValues.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={fieldValues.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              value={fieldValues.address}
              onChange={handleChange}
            />
          </Grid>{' '}
          <Grid item xs={12} sm={6}>
            <CustomInputField
              required
              fullWidth
              id="country"
              label="Country"
              name="country"
              value={fieldValues.country}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              required
              fullWidth
              id="phone"
              label="phoneNumber"
              name="phoneNumber"
              autoComplete="phone"
              value={fieldValues.phoneNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              required
              fullWidth
              type="password"
              id="password"
              label="Password"
              name="password"
              value={fieldValues.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              required
              fullWidth
              type="password"
              id="confirm-password"
              label="Confirm Password"
              name="confirmPassword"
              value={fieldValues.confirmPassword}
              onChange={handleChange}
            />
          </Grid>
          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </CustomButton>
        </Grid>
      </form>
    </div>
  );
};
export default SupplierSignUp;
