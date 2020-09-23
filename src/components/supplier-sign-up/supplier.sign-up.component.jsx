import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import PhoneInput from 'react-phone-number-input';
import useForm from '../../hooks/hooks';
import useStyles from './supplier-sign-up.styles';
import 'react-phone-number-input/style.css';
import CustomInputField from '../custom-input-field/custom-input-field.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  CountryDropdown,
  RegionDropdown,
} from 'react-country-region-selector';

const SupplierSignUp = ({
  signupUser,
  loading,
  message,
  inputErrors,
}) => {
  const classes = useStyles();
  const [country, setCountry] = useState('ET');
  const [region, setRegion] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');

  const { handleChange, fieldValues } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    companyEmail: '',
    websiteUrl: '',
    street: '',
    postalcode: '',
    password: '',
    confirmPassword: '',
    coffee: true,
    flower: false,
    sesame: false,
    other: false,
  });

  const {
    firstName,
    lastName,
    email,
    companyName,
    companyEmail,
    websiteUrl,
    postalcode,
    password,
    confirmPassword,
    coffee,
    flower,
    sesame,
    other,
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
        city: region,
        postalCode: postalcode,
      },
    });
  };

  const error =
    [coffee, sesame, flower, other].filter((v) => v).length === 0;

  return (
    <div>
      <Typography variant="h5" className={classes.title}>
        CREATE AN ACCOUNT FOR SUPPLIER
      </Typography>

      <FormControl>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              name="firstName"
              label="First Name"
              fullWidth
              autoFocus
              value={firstName}
              onChange={handleChange}
              error={
                inputErrors
                  ? inputErrors.firstName
                    ? true
                    : false
                  : null
              }
              helperText={inputErrors ? inputErrors.firstName : null}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              name="lastName"
              label="Last Name"
              fullWidth
              value={lastName}
              onChange={handleChange}
              error={
                inputErrors
                  ? inputErrors.lastName
                    ? true
                    : false
                  : null
              }
              helperText={inputErrors ? inputErrors.lastName : null}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={handleChange}
              error={
                inputErrors
                  ? inputErrors.email
                    ? true
                    : false
                  : null
              }
              helperText={inputErrors ? inputErrors.email : null}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              fullWidth
              id="companyName"
              label="Company Name"
              name="companyName"
              value={companyName}
              onChange={handleChange}
              error={
                inputErrors
                  ? inputErrors.companyName
                    ? true
                    : false
                  : null
              }
              helperText={
                inputErrors ? inputErrors.companyName : null
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              fullWidth
              id="companyEmail"
              label="Company Email"
              name="companyEmail"
              autoComplete="email"
              value={companyEmail}
              onChange={handleChange}
              error={
                inputErrors
                  ? inputErrors.companyEmail
                    ? true
                    : false
                  : null
              }
              helperText={
                inputErrors ? inputErrors.companyEmail : null
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              fullWidth
              id="websiteUrl"
              label="website Url"
              name="websiteUrl"
              value={websiteUrl}
              onChange={handleChange}
              error={
                inputErrors
                  ? inputErrors.websiteUrl
                    ? true
                    : false
                  : null
              }
              helperText={inputErrors ? inputErrors.websiteUrl : null}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CountryDropdown
              className={classes.country}
              value={country}
              valueType="short"
              disabled={true}
              onChange={(val) => setCountry(val)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RegionDropdown
              required
              disableWhenEmpty={false}
              className={classes.country}
              country={country}
              value={region}
              countryValueType="short"
              onChange={(val) => setRegion(val)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry={country}
              country={country}
              international
              name="phoneNumber"
              className={classes.phone}
              id="phone"
              value={phoneNumber}
              onChange={setphoneNumber}
              error={
                inputErrors
                  ? inputErrors.phoneNumber
                    ? true
                    : false
                  : null
              }
              helperText={
                inputErrors ? inputErrors.phoneNumber : null
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              fullWidth
              id="postalcode"
              label="postalcode"
              name="postalcode"
              value={postalcode}
              onChange={handleChange}
              error={
                inputErrors
                  ? inputErrors.postalCode
                    ? true
                    : false
                  : null
              }
              helperText={inputErrors ? inputErrors.postalCode : null}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <CustomInputField
              fullWidth
              type="password"
              id="password"
              label="Password"
              name="password"
              value={password}
              onChange={handleChange}
              error={
                inputErrors
                  ? inputErrors.password
                    ? true
                    : false
                  : null
              }
              helperText={inputErrors ? inputErrors.password : null}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInputField
              fullWidth
              type="password"
              id="confirm-password"
              label="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              error={
                inputErrors
                  ? inputErrors.confirmPassword
                    ? true
                    : false
                  : null
              }
              helperText={
                inputErrors ? inputErrors.confirmPassword : null
              }
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl
              required
              error={error}
              component="fieldset"
              className={classes.formControl}
            >
              <FormLabel component="legend">
                Choose products to supply
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={coffee}
                      onChange={handleChange}
                      name="coffee"
                    />
                  }
                  label="Coffee"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={flower}
                      onChange={handleChange}
                      name="flower"
                    />
                  }
                  label="Flower"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={other}
                      onChange={handleChange}
                      name="other"
                    />
                  }
                  label="Other"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={sesame}
                      onChange={handleChange}
                      name="sesame"
                    />
                  }
                  label="Sesame"
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormHelperText error={message ? true : false}>
              {message ? message : null}
            </FormHelperText>
          </Grid>
          <CustomButton
            type="submit"
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
            Sign Up
          </CustomButton>
        </Grid>
      </FormControl>
    </div>
  );
};
export default SupplierSignUp;
