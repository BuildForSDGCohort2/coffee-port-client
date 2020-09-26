import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CustomComboBox from '../custom-combo-box/custom-combo-box.component';
import {
   TYPE, COMBOBOX_DATA
} from '../../data/combobox.data';
import useStyles from './filter.styles';
import {filtersVar} from '../../apollo/cache';
import {GET_ALL_FILTERS} from '../../apollo/filter/filter.operations';
import { useQuery } from '@apollo/react-hooks';

const Filter=()=>{
  const { data } = useQuery(GET_ALL_FILTERS);
  const {filters} = data;
  const {productName}=filters;
  const classes = useStyles();
  let emptyAttributes = (uniqueAttributes)=>{
    const newUniqueAttributes={...uniqueAttributes}
    Object.getOwnPropertyNames(newUniqueAttributes).forEach((key)=>{newUniqueAttributes[key] =''});
    return newUniqueAttributes;
  }

  const handleFilterChange2 = (event,newValue,attributeName) =>{
    console.log(attributeName)
    attributeName==='geographicalDesignation'?
    filtersVar({
      ...filtersVar(),
      uniqueAttributes: {
        ...filtersVar().uniqueAttributes,
      geographicalDesignation: newValue ? newValue.specificOrigin : '',
      },
    }):
    filtersVar({
      ...filtersVar(),
      uniqueAttributes: { ...filtersVar().uniqueAttributes, [attributeName]: newValue },
    });

  }
  return(
    <div className={classes.root}>
        <Grid container spacing={2}>

        <Grid item xs={2}>
            <Typography >Filter By</Typography>
        </Grid>

        <Grid item xs={2}>
        <CustomComboBox
        value={productName}
        onChange={(event, newValue) => {
         newValue===null?filtersVar({uniqueAttributes:emptyAttributes(filtersVar().uniqueAttributes),productName:newValue}):
         filtersVar({...filtersVar(), productName:newValue})

        }}
        id="type"
        options={TYPE}
        getOptionLabel={(option)=>(option)}
        label='Type'
        />
         </Grid>
        {
         productName?
          COMBOBOX_DATA[productName].map(
            ({id , attributeName , handleFilterChange ,...allProps})=>( 
               <Grid key={id} item xs={2}>
              <CustomComboBox 
              onChange={(event,newValue)=>{handleFilterChange2(event,newValue,attributeName)}}
              {...allProps}/>
              </Grid>)
          ):null
        
        }
       
        </Grid>
        </div>)



}

export default Filter;
