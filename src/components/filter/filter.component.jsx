import React,{useState} from 'react';
import CustomComboBox from '../custom-combo-box/custom-combo-box.component';
import {COFFEE_DATA,TYPE, FLOWER_DATA, OILSEED_DATA} from './filter.data';
import useStyles from './filter.styles';
import {Grid, Typography} from '@material-ui/core';

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
            (selectedType==='Coffee')?
            (<Grid container item xs={8} spacing={2}>
                <Grid item xs={3}>
                <CustomComboBox id='geographicalDesignation'
            filterSelectedOptions
            multiple
             options={COFFEE_DATA.GeographicalDesignation} 
             label='Geographical Designation'
             groupBy={(option) => option.origin}
            getOptionLabel={(option) => option.specificOrigin}
             />
                </Grid>
           
             
             <Grid item xs={3}>
             <CustomComboBox
                multiple
                id="group"
                options={COFFEE_DATA.Group}
                getOptionLabel={(option)=>(option)}
                filterSelectedOptions
                label='Group'
            
              />
                </Grid>
          
            <Grid item xs={3}>
            <CustomComboBox
                multiple
                id="grade"
                options={COFFEE_DATA.Grade}
                getOptionLabel={(option)=>(option)}
                filterSelectedOptions
                label='Grade'
            
              />
                </Grid>
                </Grid>):
                (selectedType==='Cut Flower')?(
                    <Grid container item xs={8} spacing={2}>
             <Grid item xs={3}>
             <CustomComboBox
                multiple
                id="flower-type"
                options={FLOWER_DATA.FlowerType}
                getOptionLabel={(option)=>(option)}
                filterSelectedOptions
                label='FlowerType'
            
              />
                </Grid>
                </Grid>):(selectedType==='Oil Seed')?(
                <Grid container item xs={8} spacing={2}>
             <Grid item xs={3}>
             <CustomComboBox
                multiple
                id="oilseed-type"
                options={OILSEED_DATA.OilSeedType}
                getOptionLabel={(option)=>(option)}
                filterSelectedOptions
                label='OilSeedType'
            
              />
                </Grid>
                </Grid>):null
        }
        
      </Grid>



    </div>

);}



export default Filter;