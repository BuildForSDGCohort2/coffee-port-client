import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { COMBOBOX_DATA, TYPE } from '../../data/combobox.data';
import CustomComboBox from '../custom-combo-box/custom-combo-box.component';
import useStyles from './post-product.styles';
import CustomButton from '../custom-button/custom-button.component';
import CustomInputField from '../custom-input-field/custom-input-field.component';

const PostProduct = ({ postProduct, data, loading }) => {
  const classes = useStyles();

  const [selectedProperties, setSelectedProperties] = useState({
    productName: 'Coffee',
    productPrice:0,
    productQuantity:0,
    productMeasurementUnit:'',

    uniqueAttributes: {
      geographicalDesignation: '',
      grade: '',
      group: '',
    },
  });

  console.log(selectedProperties);
  const { productName, uniqueAttributes,productPrice,productQuantity,productMeasurementUnit,additionalDescription } = selectedProperties;
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

  const handleSubmit =  (event) => {
    event.preventDefault();
    console.log('selectedproducts', selectedProperties);
    postProduct({
      variables: {
        postProductProduct: {
          ...selectedProperties
      
        }

      },
    });
    if (!loading && data !== null) {
      console.log('clearing');
      setSelectedProperties({
        productName: '',
        productPrice:'',
        productQuantity:'',
        productMeasurementUnit:'',
        additionalDescription:'',
        uniqueAttributes: emptyAttributes(uniqueAttributes),
      });
      console.log('trypost', data);
    }
  };

  const handleChange=event=>{
    let {value,name}=event.target;
    if(name==='productQuantity'){
      value=parseInt(value);
    }
    else if(name==='productPrice'){
      value=parseFloat(value);
    }

    setSelectedProperties({...selectedProperties, [name]:value});
}

  return (
    <div className={classes.root}>
      <Grid container  direction="column" alignItems="center" justify="center">
        <Grid item><Typography>Post Product</Typography></Grid>
        
        <form onSubmit={handleSubmit}>
          <Grid item xs={2}>
            <CustomComboBox
              value={productName}
              onChange={(event, newValue) => {
                setSelectedProperties({
                  ...selectedProperties,
                  productName: newValue,
                });
                //  newValue===null?filtersVar({uniqueAttributes:emptyAttributes(filtersVar().uniqueAttributes),type:newValue}):
                //  filtersVar({...filtersVar(), type:newValue})
              }}
              id="productName"
              options={TYPE}
              getOptionLabel={(option) => option}
              label="Product Name"
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInputField  type='number' value={productQuantity} label="Quantity" name="productQuantity" 
            onChange={handleChange}
            
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInputField
              label="Measurment Unit"
              name="productMeasurementUnit"
              type='text'
              value={productMeasurementUnit}
              onChange={handleChange}
          

            />
          </Grid>
          <Grid item xs={12}>
            <CustomInputField label="Price" type='number' value={productPrice} name="productPrice"
                          onChange={handleChange}
            
            
            />
          </Grid>

          {productName
            ? COMBOBOX_DATA[productName].map(
                ({
                  id,
                  handleFilterChange,
                  attributeName,
                  ...allProps
                }) => (
                  <Grid key={id} item xs={12}>
                    <CustomComboBox
                      value={
                        attributeName === 'geographicalDesignation' &&
                        productName === 'Coffee'
                          ? uniqueAttributes[attributeName]
                              .specificOrigin
                          : uniqueAttributes[attributeName]
                      }
                      onChange={(e, newValue) => {
                        handlePostChange(e, newValue, attributeName);
                      }}
                      {...allProps}
                    />
                  </Grid>
                ),
              )
            : null}
          {/* <Grid item xs={12}>
            <CustomInputField
              label="additionalDescription"
              value={additionalDescription}
              rows={4}
              multiline
              variant="filled"
              name="Additional Description"
              onChange= {handleChange}
            />
          </Grid> */}
          <CustomButton type="submit">Post Product</CustomButton>
        </form>
      </Grid>
    </div>
  );
};

export default PostProduct;
