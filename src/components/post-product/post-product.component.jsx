import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import {
  COMBOBOX_DATA,
  TYPE,
  MEASUREMENT_UNITS,
} from '../../data/combobox.data';
import CustomComboBox from '../custom-combo-box/custom-combo-box.component';
import useStyles from './post-product.styles';
import CustomButton from '../custom-button/custom-button.component';
import CustomInputField from '../custom-input-field/custom-input-field.component';
import { GET_ALL_PRODUCTS } from '../../apollo/product/product.operations';

import CircularProgress from '@material-ui/core/CircularProgress';
import CustomAlert from '../custom-alert/custom-alert.component';

const PostProduct = ({inputErrors,error, alert, postProduct, data, loading }) => {
  const classes = useStyles();
  let intError=error?error.graphQLErrors.find((err)=>err.message.includes("Int")):null;
  let floatError=error?error.graphQLErrors.find((err)=>err.message.includes("Float")):null;
console.log(intError,"intError");
console.log(floatError,"floatError");
  console.log(error,"err");
  console.log(inputErrors,"errors");
  const [selectedProperties, setSelectedProperties] = useState({
    productName: 'Coffee',
    productPrice: 0,
    productQuantity: 0,
    productDescription: '',
    productMeasurementUnit: '',
    uniqueAttributes: {
      geographicalDesignation: '',
      grade: '',
      group: '',
      flowerType: '',
    },
  });

  const {
    productName,
    uniqueAttributes,
    productPrice,
    productQuantity,
    productMeasurementUnit,
    productDescription,
  } = selectedProperties;
  const handlePostChange = (event, newValue, attributeName) => {
    if (
      attributeName === 'geographicalDesignation' &&
      productName === 'Coffee'
    )
      newValue
        ? (newValue = newValue.specificOrigin)
        : (newValue = '');
    setSelectedProperties({
      ...selectedProperties,
      uniqueAttributes: {
        ...uniqueAttributes,
        [attributeName]: newValue,
      },
    });
  };
  let emptyAttributes = (uniqueAttributes) => {
    const newUniqueAttributes = { ...uniqueAttributes };
    Object.getOwnPropertyNames(newUniqueAttributes).forEach((key) => {
      newUniqueAttributes[key] = '';
    });
    return newUniqueAttributes;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  postProduct({
    variables: {
      postProductProduct: {
        ...selectedProperties,
      },

    },
  });
  

    
    console.log("Product Inputs",selectedProperties);
    if (!loading) {
      setSelectedProperties({
        productName: 'Coffee',
        productPrice: 0,
        productQuantity: 0,
        productMeasurementUnit: '',
        productDescription: '',
        uniqueAttributes: emptyAttributes(uniqueAttributes),
      });
    }
  };

  const handleChange = (event) => {
    let { value, name } = event.target;
    if (name === 'productQuantity') {
      if (value===""){
          value=0;
      }
      else{
        value = parseInt(value);
      }


    } else if (name === 'productPrice') {
      if (value===""){
        value=0;
    }
    else{
      value = parseFloat(value);
    }
 
    }

    setSelectedProperties({ ...selectedProperties, [name]: value });
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid className={classes.title} item>
          <Typography variant="h5" color="primary">
            Please Fill In This Form
          </Typography>
        </Grid>

        <form onSubmit={handleSubmit}>
          <div className={classes.root}>
            <Grid container>
              <Grid className={classes.eachCombo} item xs={12}>
                <Typography
                  className={classes.label}
                  variant="subtitle2"
                  color="textSecondary"
                >
                  Product Name (*)
                </Typography>
                <CustomComboBox
            
                error={inputErrors?inputErrors.productName?true:false:null}
                helperText={inputErrors ?inputErrors.productName:null}
                  wide={true}
                  value={productName}
                  onChange={(event, newValue) => {
                    let modifiedValue=newValue;
                    if (newValue===null){
                        modifiedValue='';
                    }
                    setSelectedProperties({
                      ...selectedProperties,
                      productName: modifiedValue,
                    });
                    //  newValue===null?filtersVar({uniqueAttributes:emptyAttributes(filtersVar().uniqueAttributes),type:newValue}):
                    //  filtersVar({...filtersVar(), type:newValue})
                  }}
                  id="productName"
                  options={TYPE}
                  getOptionLabel={(option) => option}
                />
              </Grid>
              <Grid className={classes.eachInput} item xs={4}>
                <Typography
                  className={classes.label}
                  variant="subtitle2"
                  color="textSecondary"
                >
                  Quantity (*)
                </Typography>
                <CustomInputField
                  error={intError?intError.message?true:false:null}
                  helperText={intError ?intError.message:null}
                  placeholder="400"
                  forPostForm={true}
                  size="small"
                  variant="outlined"
                  type="number"
                  value={productQuantity}
                  name="productQuantity"
                  onChange={handleChange}
                />
              </Grid>
              <Grid className={classes.eachInput} item xs={3}>
                <Typography
                  className={classes.label}
                  variant="subtitle2"
                  color="textSecondary"
                >
                  Measurement Unit (*)
                </Typography>
                <CustomComboBox
                 error={inputErrors?inputErrors.productMeasurementUnit?true:false:null}
                 helperText={inputErrors ?inputErrors.productMeasurementUnit:null}
                  wide={true}
                  value={productMeasurementUnit}
                  id="productMeasurementUnit"
                  options={MEASUREMENT_UNITS}
                  getOptionLabel={(option) => option}
                  onChange={(event, newValue) => {
                    setSelectedProperties({
                      ...selectedProperties,
                      productMeasurementUnit: newValue,
                    });
                  }}
                />
              </Grid>
              <Grid className={classes.eachInput} item xs={4}>
                <Typography
                  className={classes.label}
                  variant="subtitle2"
                  color="textSecondary"
                >
                  Price in USD (*)
                </Typography>
                <CustomInputField
                  error={floatError?floatError.message?true:false:null}
                  helperText={floatError ?floatError.message:null}
                  forPostForm={true}
                  size="small"
                  placeholder="327.5"
                  variant="outlined"
                  type="number"
                  value={productPrice}
                  name="productPrice"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </div>

          <div className={classes.root}>
            <Grid container>
              {productName
                ? COMBOBOX_DATA[productName].map(
                    ({
                      id,
                      handleFilterChange,
                      attributeName,
                      label,
                      ...allProps
                    }) => (
                      <Grid
                        key={id}
                        className={classes.eachCombo}
                        item
                        xs={12}
                      >
                        <Typography
                          className={classes.label}
                          variant="subtitle2"
                          color="textSecondary"
                        >
                          {`${label} (Optional but recommended)`}
                        </Typography>
                        <CustomComboBox
                          value={
                            attributeName ===
                              'geographicalDesignation' &&
                            productName === 'Coffee'
                              ? uniqueAttributes[attributeName]
                                  .specificOrigin
                              : uniqueAttributes[attributeName]
                          }
                          onChange={(e, newValue) => {
                            handlePostChange(
                              e,
                              newValue,
                              attributeName,
                            );
                          }}
                          {...allProps}
                        />
                      </Grid>
                    ),
                  )
                : null}
            </Grid>
          </div>

          <div className={classes.root}>
            <Grid container>
              <Grid className={classes.eachInput} item xs={12}>
                <Typography
                  className={classes.label}
                  variant="subtitle2"
                  color="textSecondary"
                >
                  Additional Info (Optional)
                </Typography>
                <CustomInputField
                  forPostForm={true}
                  size="small"
                  value={productDescription}
                  rows={4}
                  multiline
                  variant="outlined"
                  name="productDescription"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid className={classes.buttonContainer} item xs={12}>
              <CustomButton
                className={classes.button}
                color="secondary"
                variant="contained"
                type="submit"
              >
                {loading === true ? (
                  <CircularProgress
                    // className={classes.progress}
                    size="1.2rem"
                  />
                ) : null}
                Post Product
              </CustomButton>
            </Grid>
            {!loading && data ? (
              <CustomAlert
                severity={alert.severity}
                message={alert.message}
              />
            ) : null}
          </div>
        </form>
      </Grid>
    </Grid>
  );
};

export default PostProduct;
