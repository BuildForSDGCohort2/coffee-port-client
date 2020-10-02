import React from 'react';
import {GET_REQUESTS_BY_USERID} from '../../apollo/request/request.operations';
import {useQuery} from '@apollo/client';
import NotificationPreview from './notification-preview.component';
import {currentUserVar} from '../../apollo/cache'; 
import { CircularProgress, Grid } from '@material-ui/core';

const NotificationPreviewContainer = () =>{
    console.log('current user var',currentUserVar());
    const {role,id}=currentUserVar();
    let property={};
    if (role==='SUPPLIER'){
        property.requestsBySellerId=id;
    }
    else if (role==='BUYER'){
        property.requestsByBuyerId=id;
    }
    

        const {data,loading} = useQuery(GET_REQUESTS_BY_USERID,{variables:{...property}});

    console.log('adsfsadf',data,loading);
    
   
    if (data) {
        if (data.requests.__typename === 'Requests') {

              
        } else if ( data.requests.__typename === 'Error') {
           
   

        } 
      } 

      console.log(loading,data);
      if(loading)return (<Grid container justify='center' alignItems='center'><CircularProgress/></Grid>);
      return (<NotificationPreview role={role} requests={data.requests.requests}/>);



}

export default NotificationPreviewContainer;
