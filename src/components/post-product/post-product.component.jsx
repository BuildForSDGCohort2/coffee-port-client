import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import {FILTER_DATA,TYPE} from '../filter/filter.data';
import CustomComboBox from '../custom-combo-box/custom-combo-box.component';
import useStyles from './post-product.styles';
import CustomButton from '../custom-button/custom-button.component';

const PostProduct = () =>{
   const [selectedProperties,setSelectedProperties] = useState({productName:'Coffee',uniqueAttributes:{GeographicalDesignation:'',Grade:'',Group:'',productName:''}});
   const classes = useStyles();
   console.log(selectedProperties);
   const {productName,uniqueAttributes}=selectedProperties;
    const handlePostChange = (event,newValue,label) => {
      if (label==='GeographicalDesignation') newValue?newValue=newValue.specificOrigin:newValue='';
      setSelectedProperties({...selectedProperties, uniqueAttributes:{...uniqueAttributes, [label]:newValue}})

    }

    const handleSubmit= async event=>{
      event.preventDefault();
      console.log('selectedproducts',selectedProperties);
      
  
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
                  FILTER_DATA[productName].map(
                    ({id , handleFilterChange ,label , ...allProps})=>( 
                       <Grid key={id} item xs={12}>
                      <CustomComboBox
                      label={label}
                      onChange={(e,newValue)=>{handlePostChange(e,newValue,label)}}
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
