import React from 'react';
import NotificationItemContainer from '../notification-item/notification-item.container';
import Grid from '@material-ui/core/Grid';
import CustomAlert from '../custom-alert/custom-alert.component';
import NotificationAlert from '../notification-alert/notification-alert.component';

const NotificationPreview = ({role,requests}) => (
   <div>
        <Grid container alignItem='center' justify='center'>
            {requests.map((request)=>  role==='SUPPLIER'? <NotificationItemContainer key={request.id} request={request}/>:role==='BUYER'&&request.requestStatus==='REQUESTED'?
            
            <NotificationAlert  key={request.id} request={request}/>:null  )}
        </Grid>
        
    </div>


);

export default NotificationPreview;
