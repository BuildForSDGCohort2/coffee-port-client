import React from 'react';
import { UPDATE_REQUEST } from '../../apollo/request/request.operations';
import { useMutation } from '@apollo/client';
import NotificationItem from './notification-item.component';

const NotificationItemContainer = ({ request }) => {
  const [updateRequest, { loading }] = useMutation(UPDATE_REQUEST);
  const alert = {
    severity: '',
    message: '',
  };

  return (
    <NotificationItem
      alert={alert}
      loading={loading}
      updateRequest={updateRequest}
      request={request}
    />
  );
};

export default NotificationItemContainer;
