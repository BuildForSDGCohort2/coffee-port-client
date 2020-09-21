import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useForm from '../../hooks/hooks';
import useStyles from './supplier-sign-up.styles';
import CustomInputField from '../custom-input-field/custom-input-field.component';
import CustomButton from '../custom-button/custom-button.component';

const SupplierSignUp = ({ signupUser }) => {
  const classes = useStyles();
  const { handleChange, fieldValues } = useForm({
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

  const {
    firstName,
    lastName,
    email,
    companyName,
    companyEmail,
    websiteUrl,
    country,
    city,
    street,
    postalcode,
    phoneNumber,
    password,
    confirmPassword,
  } = fieldValues;
  const handlersubmit = (event) => {
    event.preventDefault();

    signupUser({
      variables: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        confirmPassword: confirmPassword,
        phoneNumber: phoneNumber,
        websiteUrl: websiteUrl,
        companyName: companyName,
        companyEmail: companyEmail,
        country: country,
        city: city,
        street: street,
        postalCode: postalcode,
      },
    });
  };
  return (
    <div>
      <Typography variant="h5" className={classes.title}>
        CREATE AN ACCOUNT FOR SUPPLIER
      </Typography>

      <form onSubmit={handlersubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              name="firstName"
              label="First Name"
              fullWidth
              required
              autoFocus
              value={firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              name="lastName"
              label="Last Name"
              fullWidth
              required
              value={lastName}
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
              value={email}
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
              value={companyName}
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
              value={companyEmail}
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
              value={websiteUrl}
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
              value={country}
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
              value={city}
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
              value={street}
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
              value={postalcode}
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
              value={phoneNumber}
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
              value={password}
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
              value={confirmPassword}
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
