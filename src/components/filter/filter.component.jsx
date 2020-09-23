import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import CustomComboBox from '../custom-combo-box/custom-combo-box.component';
import {
   TYPE, FILTER_DATA
} from './filter.data';
import useStyles from './filter.styles';
import {filtersVar} from '../../apollo/cache';


const Filter=({search})=>{
  const classes = useStyles();
  const [selectedFilter,setSelectedFilter]=useState({type:""});
  let emptyAttributes = (uniqueAttributes)=>{
    const newUniqueAttributes={...uniqueAttributes}
    Object.getOwnPropertyNames(newUniqueAttributes).forEach((key)=>{newUniqueAttributes[key] =''});
    return newUniqueAttributes;
  }
  return(
    <div className={classes.root}>
        <Grid container spacing={2}>

        <Grid item xs={2}>
            <Typography >Filter By</Typography>
        </Grid>

        <Grid item xs={2}>
        <CustomComboBox
        value={selectedFilter.type}
        onChange={(event, newValue) => {
          setSelectedFilter({...selectedFilter,type:newValue});
         newValue===null?filtersVar({uniqueAttributes:emptyAttributes(filtersVar().uniqueAttributes),type:newValue}):
         filtersVar({...filtersVar(), type:newValue})

        }}
        id="type"
        options={TYPE}
        getOptionLabel={(option)=>(option)}
        label='Type'
        />
         </Grid>
        {
          selectedFilter.type?
          FILTER_DATA[selectedFilter.type].map(
            ({id , handleFilterChange ,...allProps})=>( 
               <Grid key={id} item xs={2}>
              <CustomComboBox 
              onChange={handleFilterChange}
              {...allProps}/>
              </Grid>)
          ):null
        
        }
       
        </Grid>
        </div>)



}

export default Filter;
