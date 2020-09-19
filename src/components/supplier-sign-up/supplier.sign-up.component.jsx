import React from 'react';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import useForm from '../../hooks/hooks';
import useStyles from './supplier-sign-up.styles';
import CustomInputField from '../custom-input-field/custom-input-field.component';
import CustomButton from '../custom-button/custom-button.component';
import {SIGN_UP} from "../../apollo/mutations"
const SupplierSignUp = () => {
  const classes = useStyles();
  const { handleChange, fieldValues, handleSubmit } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    companyEmail: '',
    websiteUrl: '',
    country: '',
    city: '',
    street: '',
    postalcode: '',
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
              id="companyName"
              label="Company Name"
              name="companyName"
              value={fieldValues.companyName}
              onChange={handleChange}
            />
            </Grid>
             <Grid item xs={12} sm={6}>
             <CustomInputField
              required
              fullWidth
              id="companyEmail"
              label="Company Email"
              name="companyEmail"
              autoComplete="email"
              value={fieldValues.companyEmail}
              onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
               <CustomInputField
              required
              fullWidth
              id="websiteUrl"
              label="website Url"
              name="websiteUrl"
              value={fieldValues.websiteUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              required
              fullWidth
              id="country"
              label="country"
              name="country"
              value={fieldValues.country}
              onChange={handleChange}
            />
             </Grid>
              <Grid item xs={12} sm={6}>
            <CustomInputField
              required
              fullWidth
              id="city"
              label="city"
              name="city"
              value={fieldValues.city}
              onChange={handleChange}
            />
             </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              required
              fullWidth
              id="street"
              label="street"
              name="street"
              value={fieldValues.street}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              required
              fullWidth
              id="postalcode"
              label="postalcode"
              name="postalcode"
              value={fieldValues.postalcode}
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
