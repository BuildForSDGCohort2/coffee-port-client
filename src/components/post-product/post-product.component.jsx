import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import {COMBOBOX_DATA,TYPE} from '../../data/combobox.data';
import CustomComboBox from '../custom-combo-box/custom-combo-box.component';
import useStyles from './post-product.styles';
import CustomButton from '../custom-button/custom-button.component';

const PostProduct = ({postProduct,data,loading}) =>{
   const [selectedProperties,setSelectedProperties] = useState({productName:'Coffee',uniqueAttributes:{geographicalDesignation:'',grade:'',group:''}});
   const classes = useStyles();
   console.log(selectedProperties);
   const {productName,uniqueAttributes}=selectedProperties;
    const handlePostChange = (event,newValue,attributeName) => {
      if (attributeName==='geographicalDesignation'&& productName==='Coffee') newValue?newValue=newValue.specificOrigin:newValue='';
      setSelectedProperties({...selectedProperties, uniqueAttributes:{...uniqueAttributes, [attributeName]:newValue}})

    }
    let emptyAttributes = (uniqueAttributes)=>{
      const newUniqueAttributes={...uniqueAttributes}
      Object.getOwnPropertyNames(newUniqueAttributes).forEach((key)=>{newUniqueAttributes[key] =''});
      return newUniqueAttributes;
    }

    const handleSubmit= async event=>{
      event.preventDefault();
      console.log('selectedproducts',selectedProperties);
      postProduct({variables: {productName:productName,...uniqueAttributes, companyName:'Abcd',companyEmail:'abcd@gmail.com',websiteUrl:'https://abcd.com',country:'Ethiopia',city:'Addis Ababa',
      street:'Addis Ababa,Ethiopia',postalCode:'12345',productPrice:45,
      productQuantity:6,
      productMeasurementUnit:"kg"}});
      if (!loading && data!=null) {
        console.log('clearing');
        setSelectedProperties({productName:'',uniqueAttributes:emptyAttributes(uniqueAttributes)})
        console.log('trypost',data);
      }
      
  }

    return(
          <div className={classes.root}>
                <Grid container alignItems='center' justify='center' >
                <form onSubmit={handleSubmit}>
                <Grid item xs={2}>
                <CustomComboBox
                value={productName}
                onChange={(event, newValue) => {
                    setSelectedProperties({...selectedProperties,productName:newValue});
                //  newValue===null?filtersVar({uniqueAttributes:emptyAttributes(filtersVar().uniqueAttributes),type:newValue}):
                //  filtersVar({...filtersVar(), type:newValue})
        
                }}
                id="productName"
                options={TYPE}
                getOptionLabel={(option)=>(option)}
                label='Product Name'
                />
                 </Grid>
                {
                  productName?
                  COMBOBOX_DATA[productName].map(
                    ({id , handleFilterChange ,attributeName , ...allProps})=>( 
                       <Grid key={id} item xs={12}>
                      <CustomComboBox
                      value={(attributeName==='geographicalDesignation'&&productName==='Coffee')?uniqueAttributes[attributeName].specificOrigin:uniqueAttributes[attributeName]}
                      onChange={(e,newValue)=>{handlePostChange(e,newValue,attributeName)}}
                      {...allProps}/>
                      </Grid>)
                  ):null
                
                }
                <CustomButton type='submit'>Post Product</CustomButton>
               </form>
                </Grid>
                </div>)
    
}

export default PostProduct;
