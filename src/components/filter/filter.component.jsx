import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import CustomComboBox from '../custom-combo-box/custom-combo-box.component';
import {
   TYPE, FILTER_DATA
} from './filter.data';
import useStyles from './filter.styles';

const Filter=()=>{
  const classes = useStyles();
  const [selectedType,setSelectedType]=useState('');
  return(
    <div className={classes.root}>
        <Grid container spacing={2}>

        <Grid item xs={2}>
            <Typography >Filter By</Typography>
        </Grid>

        <Grid item xs={2}>
        <CustomComboBox
        value={selectedType}
        onChange={(event, newValue) => {
            setSelectedType(newValue);
        }}
        id="type"
        options={TYPE}
        getOptionLabel={(option)=>(option)}
        label='Type'
        />
         </Grid>
        {
          selectedType?
          FILTER_DATA[selectedType].map(
            ({...allProps})=>( 
               <Grid item xs={2}>
              <CustomComboBox {...allProps}/>
              </Grid>)
          ):null
        
        }
       
        </Grid>
        </div>)



}

export default Filter;
