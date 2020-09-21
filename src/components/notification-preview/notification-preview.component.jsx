import React from 'react';
import NotificationItem from '../notification-item/notification-item.component';
import Grid from '@material-ui/core/Grid';

const NotificationPreview = () => (
    <div>
        <Grid container alignItem='center' justify='center'>
        <NotificationItem/>
        <NotificationItem/>
        <NotificationItem/>
        </Grid>
        
    </div>

);

export default NotificationPreview;
