import React from 'react';
import EditProfile from './edit-profile.component';
import { useMutation } from '@apollo/client';
import jwt_decode from 'jwt-decode';
import { logout } from '../../utils';
import {
  UPDATE_USER,
  DELETE_USER,
} from '../../apollo/server/mutations';
import { storeUser } from '../../utils';
import { Redirect } from 'react-router-dom';

const EditContainer = () => {
  let message = null;
  const [
    updateUser,
    { data: updateData, loading: updateloading },
  ] = useMutation(UPDATE_USER);
  const [
    deleteUser,
    { data: deleteData, loading: deleteloading },
  ] = useMutation(DELETE_USER);
  if (updateData) {
    if (
      updateData &&
      updateData.updateUser.__typename === 'UpdatedUser'
    ) {
      storeUser(updateData.updateUser.token);
    } else if (
      updateData.updateUser.__typename === 'UpdateUserError'
    ) {
      message = updateData.updateUser.message;
    } else if (
      updateData.updateUser.__typename ===
        'NotAuthenticatedUserError' ||
      deleteData.deleteUser.__typename === 'NotAuthenticatedUserError'
    ) {
      logout();
    }
  }
  if (
    (!updateData && !updateloading && !updateUser) ||
    (!deleteData && !deleteloading && !deleteUser)
  ) {
    return <Redirect to="/error" />;
  }

  const token = window.localStorage.getItem('token');
  if (!token) {
    return <Redirect to="/signup" />;
  }
  const decoded = jwt_decode(token);
  return (
    <div>
      <EditProfile
        currentUser={decoded}
        update={updateUser}
        deleteuser={deleteUser}
        deleteloading={deleteloading}
        updateloading={updateloading}
        message={message}
      />
    </div>
  );
};

export default EditContainer;
