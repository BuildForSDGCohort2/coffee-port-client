import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormHelperText from '@material-ui/core/FormHelperText';
import PhoneInput from 'react-phone-number-input';
import FormControl from '@material-ui/core/FormControl';
import {
  CountryDropdown,
  RegionDropdown,
} from 'react-country-region-selector';

import { countries } from 'country-data';
import EasyEdit from 'react-easy-edit';
import useForm from '../../hooks/hooks';
import CustomInputField from '../../components/custom-input-field/custom-input-field.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import useStyles from './edit-profile.styles';
import { logout } from '../../utils';

const EditProfile = ({
  currentUser,
  update,
  deleteuser,
  deleteloading,
  updateloading,
  message,
}) => {
  const classes = useStyles();

  const [country, setCountry] = useState('ET');
  const [region, setRegion] = useState(
    currentUser.company.address.city,
  );
  const [phoneNumber, setphoneNumber] = useState(
    currentUser.phoneNumber,
  );
  const { handleChange, fieldValues } = useForm({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    companyName: currentUser.company.companyName,
    companyEmail: currentUser.company.companyEmail,
    websiteUrl: currentUser.company.websiteUrl,

    postalcode: currentUser.company.address.postalCode,
  });

  const {
    firstName,
    lastName,
    email,
    companyName,
    companyEmail,
    websiteUrl,

    postalcode,
  } = fieldValues;

  const deleteHandler = () => {
    deleteuser({
      variables: {
        deleteUserId: currentUser.id,
      },
    });
    logout();
  };
  const updateHandler = () => {
    update({
      variables: {
        updateUserId: currentUser.id,
        email: email,
        password: 'test',
        firstName: firstName,
        lastName: lastName,
        confirmPassword: 'test',
        role: 'SUPPLIER',
        phoneNumber: phoneNumber,
        websiteUrl: websiteUrl,
        companyName: companyName,
        companyEmail: companyEmail,
        country: countries[country].name,
        city: region,
        postalCode: postalcode,
      },
    });
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
            EDIT PROFILE
          </Typography>

          <FormControl>
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
                <Grid item xs={12} sm={6} md={6}>
                  <EasyEdit
                    type="text"
                    onSave={() => {}}
                    placeholder={firstName}
                    editComponent={
                      <CustomInputField
                        name="firstName"
                        edit
                        fullWidth
                        autoFocus
                        value={firstName}
                        onChange={handleChange}
                      />
                    }
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
                  <EasyEdit
                    type="text"
                    onSave={() => {}}
                    placeholder={lastName}
                    editComponent={
                      <CustomInputField
                        name="lastName"
                        edit
                        fullWidth
                        autoFocus
                        value={lastName}
                        onChange={handleChange}
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="body1"
                    className={classes.label}
                  >
                    Email
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <EasyEdit
                    type="text"
                    onSave={() => {}}
                    placeholder={email}
                    editComponent={
                      <CustomInputField
                        edit
                        required
                        fullWidth
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={handleChange}
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography
                    variant="body1"
                    className={classes.label}
                  >
                    Company Name
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <EasyEdit
                    type="text"
                    onSave={() => {}}
                    placeholder={companyName}
                    editComponent={
                      <CustomInputField
                        required
                        fullWidth
                        id="companyName"
                        edit
                        name="companyName"
                        value={companyName}
                        onChange={handleChange}
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography
                    variant="body1"
                    className={classes.label}
                  >
                    Company Email
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <EasyEdit
                    type="text"
                    onSave={() => {}}
                    placeholder={companyEmail}
                    editComponent={
                      <CustomInputField
                        required
                        fullWidth
                        id="companyEmail"
                        edit
                        name="companyEmail"
                        autoComplete="email"
                        value={companyEmail}
                        onChange={handleChange}
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography
                    variant="body1"
                    className={classes.label}
                  >
                    Website URL
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <EasyEdit
                    type="text"
                    onSave={() => {}}
                    placeholder={websiteUrl}
                    editComponent={
                      <CustomInputField
                        required
                        fullWidth
                        id="websiteUrl"
                        edit
                        name="websiteUrl"
                        value={websiteUrl}
                        onChange={handleChange}
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography
                    variant="body1"
                    className={classes.label}
                  >
                    Country
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <EasyEdit
                    type="text"
                    onSave={() => {}}
                    placeholder={country}
                    editComponent={
                      <CountryDropdown
                        className={classes.country}
                        value={country}
                        valueType="short"
                        disabled={true}
                        onChange={(val) => setCountry(val)}
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography
                    variant="body1"
                    className={classes.label}
                  >
                    Region
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <EasyEdit
                    type="text"
                    onSave={() => {}}
                    placeholder={region}
                    editComponent={
                      <RegionDropdown
                        required
                        disableWhenEmpty={false}
                        className={classes.country}
                        country={country}
                        value={region}
                        countryValueType="short"
                        onChange={(val) => setRegion(val)}
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography
                    variant="body1"
                    className={classes.label}
                  >
                    Postal Code
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <EasyEdit
                    type="text"
                    onSave={() => {}}
                    placeholder={postalcode}
                    editComponent={
                      <CustomInputField
                        required
                        fullWidth
                        id="postalcode"
                        edit
                        name="postalcode"
                        value={postalcode}
                        onChange={handleChange}
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography
                    variant="body1"
                    className={classes.label}
                  >
                    Phone Number
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <EasyEdit
                    type="text"
                    onSave={() => {}}
                    placeholder={phoneNumber}
                    editComponent={
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
                      />
                    }
                  />
                </Grid>
                <FormHelperText
                  className={classes.helper}
                  error={message !== null ? true : false}
                >
                  {message !== null ? message : null}
                </FormHelperText>
              </Grid>
              <Grid
                container
                item
                xs={12}
                alignItems="center"
                justify="center"
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  className={classes.buttons}
                >
                  <CustomButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    id="save"
                    name="save"
                    onClick={updateHandler}
                  >
                    {updateloading === true ? (
                      <CircularProgress
                        className={classes.progress}
                        
                        size="1.2rem"
                      />
                    ) : null}
                    save
                  </CustomButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  className={classes.buttons}
                >
                  <CustomButton
                    type="submit"
                    name="delete"
                    id="delete"
                    variant="contained"
                    onClick={deleteHandler}
                    color="primary"
                  >
                    {deleteloading === true ? (
                      <CircularProgress
                        className={classes.progress}
                      
                        size="1.2rem"
                      />
                    ) : null}
                    Delete Account
                  </CustomButton>
                </Grid>
              </Grid>
            </Grid>
          </FormControl>
        </div>
      </CardContent>
    </Card>
  );
};

export default EditProfile;
