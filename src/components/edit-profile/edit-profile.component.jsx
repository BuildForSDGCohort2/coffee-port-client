import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import EasyEdit from 'react-easy-edit';
import useForm from '../../hooks/hooks';
import CustomInputField from '../../components/custom-input-field/custom-input-field.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import useStyles from './edit-profile.styles';

const EditProfile = () => {
  const classes = useStyles();
  const save = (value) => {
    alert(value);
  };
  const cancel = () => {
    alert('Cancelled');
  };
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
                  <EasyEdit
                    type="text"
                    onSave={() => {}}
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
                    editComponent={
                      <CustomInputField
                        required
                        fullWidth
                        id="companyEail"
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
                    editComponent={
                      <CustomInputField
                        required
                        fullWidth
                        id="country"
                        edit
                        name="country"
                        value={country}
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
                    Region
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <EasyEdit
                    type="text"
                    onSave={() => {}}
                    editComponent={
                      <CustomInputField
                        required
                        fullWidth
                        id="city"
                        edit
                        name="city"
                        value={city}
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
                    Postal Code
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <EasyEdit
                    type="text"
                    onSave={() => {}}
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
                    editComponent={
                      <CustomInputField
                        required
                        fullWidth
                        id="phone"
                        edit
                        name="phoneNumber"
                        autoComplete="phone"
                        value={phoneNumber}
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
                      Password
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <EasyEdit
                    type="text"
                    onSave={() => {}}
                    editComponent={
                      <CustomInputField
                        edit
                        required
                        fullWidth
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                      />
                    }
                  />
                </Grid>
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
