import React from 'react';
import { GET_REQUESTS_BY_USERID } from '../../apollo/request/request.operations';
import { useQuery } from '@apollo/client';
import NotificationPreview from './notification-preview.component';
import { currentUserVar } from '../../apollo/cache';
import { CircularProgress, Grid } from '@material-ui/core';
import {
  notificationFilter,
  getProperty,
} from '../notification-preview/notification-preview.utils';

const NotificationPreviewContainer = () => {
  console.log('current user var', currentUserVar());
  const { role, id } = currentUserVar();
  const { data, loading } = useQuery(GET_REQUESTS_BY_USERID, {
    variables: { ...getProperty(role, id) },
  });

  console.log('adsfsadf', data, loading);

  if (data) {
    if (data.requests.__typename === 'Requests') {
    } else if (data.requests.__typename === 'Error') {
    }
  }

  console.log(loading, data);
  if (loading)
    return (
      <Grid container justify="center" alignItems="center">
        <CircularProgress />
      </Grid>
    );
  return (
    <NotificationPreview
      role={role}
      requests={notificationFilter(data, role)}
    />
  );
};

export default NotificationPreviewContainer;
