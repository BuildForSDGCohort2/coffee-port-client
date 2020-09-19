import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import {FILTER_DATA,TYPE} from '../filter/filter.data';
import CustomComboBox from '../custom-combo-box/custom-combo-box.component';
import useStyles from './post-product.styles';

const PostProduct = () =>{
   const [selectedProperties,setSelectedProperties] = useState({type:'',uniqueAttributes:{GeographicalDesignation:'',Grade:'',Group:'',Type:''}});
   const classes = useStyles();
   console.log(selectedProperties);
   const {type,uniqueAttributes}=selectedProperties;
    const handlePostChange = (event,newValue,label) => {
      if (label==='GeographicalDesignation') newValue?newValue=newValue.specificOrigin:newValue='';
      setSelectedProperties({...selectedProperties, uniqueAttributes:{...uniqueAttributes, [label]:newValue}})

    }

    const handleSubmit= async event=>{
      event.preventDefault();
      
  
  }

    return(
          <div className={classes.root}>
                <Grid container spacing={2}>
                <form onSubmit={handleSubmit}>
                <Grid item xs={2}>
                <CustomComboBox
                value={type}
                onChange={(event, newValue) => {
                    setSelectedProperties({...selectedProperties,type:newValue});
                //  newValue===null?filtersVar({uniqueAttributes:emptyAttributes(filtersVar().uniqueAttributes),type:newValue}):
                //  filtersVar({...filtersVar(), type:newValue})
        
                }}
                id="type"
                options={TYPE}
                getOptionLabel={(option)=>(option)}
                label='Type'
                />
                 </Grid>
                {
                  type?
                  FILTER_DATA[type].map(
                    ({id , handleFilterChange ,label , ...allProps})=>( 
                       <Grid key={id} item xs={12}>
                      <CustomComboBox
                      label={label}
                      onChange={(e,newValue)=>{handlePostChange(e,newValue,label)}}
                      {...allProps}/>
                      </Grid>)
                  ):null
                
                }
               </form>
                </Grid>
                </div>)
    
}

export default PostProduct;
