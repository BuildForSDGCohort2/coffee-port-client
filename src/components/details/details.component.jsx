import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CustomInputField from '../custom-input-field/custom-input-field.component';
import CustomButton from '../custom-button/custom-button.component';
import ListComponent from '../list-item/list-item.component';
import useStyles from './details.styles';
import CustomAlert from '../custom-alert/custom-alert.component';
import CircularProgress from '@material-ui/core/CircularProgress';

const Details = ({
  product,
  createProductRequest,
  alert,
  currentUserVar,
  requestLoading,
}) => {
  const classes = useStyles();
  const {
    productName,
    productPrice,
    uniqueAttributes,
    productMeasurementUnit,
    productQuantity,
  } = product;
  const [enteredInquiry, selectEnteredInquiry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createProductRequest({
      variables: {
        createProductRequestProductId: product.id,
        createProductRequestInquiryText: enteredInquiry,
      },
    });
  };
  const handleChange = (e) => {
    const { value } = e.target;
    selectEnteredInquiry(value);
  };

  return (
    <Grid container justify="center" alignItem="center">
      <Card className={classes.root} bgcolor="secondary.main">
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={currentUserVar.role === 'BUYER' ? 6 : 12}
            className={classes.contain}
          >
            <Grid container justify="center" alignItems="center">
              <Typography
                className={classes.productName}
                variant="h3"
              >
                {productName}
              </Typography>
              <Typography className={classes.title} variant="h5">
                ${productPrice}
              </Typography>
              <Grid item xs={12} sm={12} md={12}>
                <List>
                  {Object.getOwnPropertyNames(uniqueAttributes).map(
                    (property) =>
                      property !== '__typename' &&
                      uniqueAttributes[property] !== '' &&
                      uniqueAttributes[property] !== null ? (
                        <div>
                          <ListComponent
                            primary={property}
                            trailing={uniqueAttributes[property]}
                          />
                          <Divider />
                        </div>
                      ) : null,
                  )}
                  <ListComponent
                    primary={'Quantity'}
                    trailing={`${productQuantity} ${productMeasurementUnit}`}
                  />
                  <Divider />
                </List>
              </Grid>
            </Grid>
          </Grid>

          {currentUserVar.role === 'BUYER' ? (
            <Grid item xs={12} sm={12} md={6}>
              <Grid
                container
                item
                xs={false}
                sm={false}
                md={1}
                justify="center"
              >
                <Divider orientation="vertical" />
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <form onSubmit={handleSubmit}>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={12} md={12}>
                      <CustomInputField
                        value={enteredInquiry}
                        onChange={handleChange}
                        id="filled-multiline-static"
                        rows={5}
                        label="Inquiry"
                        multiline
                        variant="filled"
                        className={classes.formfields}
                      />
                    </Grid>
                    <Grid
                      justify="center"
                      alignItems="center"
                      container
                      item
                      xs={12}
                      sm={12}
                      md={12}
                    >
                      <CustomButton
                        variant="contained"
                        size="small"
                        color="primary"
                        type="submit"
                        mr={2}
                      >
                        {requestLoading ? (
                          <CircularProgress
                          
                            size="1.2rem"
                          />
                        ) : null}
                        Send Request
                      </CustomButton>
                      {alert.severity ? (
                        <CustomAlert
                          severity={alert.severity}
                          message={alert.message}
                        />
                      ) : null}
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </Card>
    </Grid>
  );
};
export default Details;
