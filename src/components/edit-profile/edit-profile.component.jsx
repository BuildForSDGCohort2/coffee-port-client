import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useForm from '../../hooks/hooks';
import CustomInputField from '../../components/custom-input-field/custom-input-field.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import useStyles from './edit-profile.styles';

const EditProfile = () => {
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
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <Typography
            variant="h5"
            color="primary"
            className={classes.title}
          >
            Edit profile
          </Typography>

          <form onSubmit={handlersubmit}>
            <Grid container spacing={3}>
              <Grid container item xs={12}>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography
                    variant="body1"
                    className={classes.label}
                  >
                    First Name
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomInputField
                    name="firstName"
                    required
                    autoFocus
                    className={classes.label}
                    value={firstName}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography
                    variant="body1"
                    className={classes.label}
                  >
                    Last Name
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CustomInputField
                    name="lastName"
                    fullWidth
                    required
                    value={lastName}
                    onChange={handleChange}
                  />
                </Grid>
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
                variant="contained"
                color="primary"
              >
                save
              </CustomButton>
            </Grid>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default EditProfile;
