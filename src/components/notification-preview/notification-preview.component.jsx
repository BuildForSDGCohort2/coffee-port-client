import React from 'react';
import NotificationItemContainer from '../notification-item/notification-item.container';
import Grid from '@material-ui/core/Grid';
import NotificationAlert from '../notification-alert/notification-alert.component';
import { Typography } from '@material-ui/core';

const NotificationPreview = ({ role, requests }) => (
  <div>
    {requests.length > 0 ? (
      <Grid container alignItem="center" justify="center">
        {requests.map((request) =>
          role === 'SUPPLIER' ? (
            <NotificationItemContainer
              key={request.id}
              request={request}
            />
          ) : role === 'BUYER' ? (
            <NotificationAlert key={request.id} request={request} />
          ) : null,
        )}
      </Grid>
    ) : (
      <Grid
        container
        style={{ background: '#f6f6f6', margin: '30px' }}
        alignItems="center"
        justify="center"
      >
        <Typography
          style={{ margin: '20px' }}
          color="secondary"
          variant="h5"
        >
          You don't have any notifications
        </Typography>
      </Grid>
    )}
  </div>
);

export default NotificationPreview;
