import React from 'react';
import COFFEE_DATA from '../../data/coffee.data';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Information= ()=>{
    return (
        COFFEE_DATA.Description.map((coffee)=>(
            <Grid>
            <Typography>{coffee.title}</Typography>
            <Typography>{coffee.coffeeCharacteristics}</Typography>
            <Typography>{coffee.coffeeDesignations}</Typography>
        
            </Grid>
        ))
    );

}

export default Information;