import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import CompanyPreview from './company-preview.component';
import { GET_ALL_SUPPLIERS } from '../../apollo/server/queries';
import {  Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const CompanyPreviewContainer = () =>{
    const { data,loading } = useQuery(GET_ALL_SUPPLIERS);
    if(loading) return ( <Grid container alignItems="center" justify="center">
    <CircularProgress />
  </Grid>)
    if(!data && !loading){
      return <Redirect to="/error" />
    }
  
   console.log(data.users.users);
    return(
    <CompanyPreview data={data.users.users}/>
    
);}

export default CompanyPreviewContainer