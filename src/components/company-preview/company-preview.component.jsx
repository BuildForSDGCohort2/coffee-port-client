import React from 'react';
import CompanyItem from '../supplier-item/supplier-item.component';
import Grid from '@material-ui/core/Grid';
import useStyles from './company-preview.styles';

const CompanyPreview = () =>{
    const classes=useStyles();
    return(
    <div className={classes.root}>
    <Grid container spacing={3}>
    <Grid item xs={4}>
    <CompanyItem/>
    </Grid>
    <Grid item xs={4}>
    <CompanyItem/>
    </Grid>
    <Grid item xs={4}>
    <CompanyItem/>
    </Grid>
    </Grid>
    </div>
    
);}

export default CompanyPreview