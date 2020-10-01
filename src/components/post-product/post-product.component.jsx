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
    productPrice:'',
    productQuantity:'',
    productMeasurementUnit:'',
    uniqueAttributes: {
      geographicalDesignation: '',
      grade: '',
      group: '',
      flowerType: '',
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
    <Grid container direction='column'  alignItems="center" justify="center">
    
      <Grid container direction='column'  alignItems="center" justify="center">
        <Grid className={classes.title}  item><Typography variant='h5' color='primary'>Please Fill In This Form</Typography></Grid>
        
        
        <form onSubmit={handleSubmit}>
        <div className={classes.root}>
          <Grid container>
          
          <Grid className = {classes.eachCombo} item xs={12}>
          <Typography className={classes.label} variant="subtitle2"
                color="textSecondary">Product Name</Typography>
            <CustomComboBox
              wide={true}
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
            />
          </Grid>
          <Grid className={classes.eachInput} item xs={4}>
          <Typography className={classes.label} variant="subtitle2"
                color="textSecondary">Quantity</Typography>
            <CustomInputField 
             
            placeholder="400"
            forPostForm={true}
          size='small'  variant="outlined" type='number' value={productQuantity} name="productQuantity" 
            onChange={handleChange}
            
            />
          </Grid>
          <Grid className={classes.eachInput} item xs={3}>
          <Typography className={classes.label} variant="subtitle2"
                color="textSecondary">Measurement Unit</Typography>
            <CustomInputField 
             
            forPostForm={true}
            placeholder="Kg"
             size='small'
             variant="outlined"
              
              name="productMeasurementUnit"
              type='text'
              value={productMeasurementUnit}
              onChange={handleChange}
          

            />
          </Grid>
          <Grid className={classes.eachInput} item xs={4}>
          <Typography className={classes.label} variant="subtitle2"
                color="textSecondary">Price in USD</Typography>
            <CustomInputField forPostForm={true} size='small'
             
            placeholder="327.5"
              variant="outlined" type='number' value={productPrice} name="productPrice"
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
                  <Grid key={id} className = {classes.eachCombo} item xs={12}>
                    <Typography className={classes.label} variant="subtitle2"
                color="textSecondary">{label}</Typography>
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
            </Grid>
            </div>

            <div className={classes.root}>
          <Grid container>
           <Grid className={classes.eachInput} item xs={12}>
           <Typography className={classes.label} variant="subtitle2"
                color="textSecondary">Additional Info</Typography>
            <CustomInputField 
            forPostForm={true} 
            size='small'
              // value={additionalDescription}
              rows={4}
              multiline
              variant='outlined'
              name="Additional Description"
              onChange= {handleChange}
            />
          </Grid> 
           </Grid>
           <Grid className={classes.buttonContainer}  item xs={12}>
            <CustomButton className={classes.button} color="secondary" variant="contained" color="secondary" type="submit">Post Product</CustomButton></Grid>
          
    
            </div>
         
        
        </form>
     
      </Grid>
 
    </Grid>
  );
};

export default PostProduct;
