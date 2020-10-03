import React from 'react';
import EditProfile from './edit-profile.component';
import { useMutation } from '@apollo/client';
import jwt_decode from 'jwt-decode';
import {
  UPDATE_USER,
  DELETE_USER,
} from '../../apollo/server/mutations';
import { storeUser } from '../../utils';
import { Redirect } from 'react-router-dom';

const EditContainer = () => {
  //let message = null;
  // let inputErrors = null;
  const [
    updateUser,
    { data: updateData, loading: updateloading },
  ] = useMutation(UPDATE_USER);
  const [
    deleteUser,
    { data: deleteData, loading: deleteloading },
  ] = useMutation(DELETE_USER);
  console.log(updateData, deleteData);
  if (updateData) {
    if (
      updateData &&
      updateData.updateUser.__typename === 'UpdatedUser'
    ) {
      storeUser(updateData.updateUser.token);
    } else if (
      updateData.updateUser.__typename === '"UpdateUserError"'
    ) {
      //message =  updateData.updateUser.message;
    }
    // } else if (data.createUser.__typename === 'UserInputError') {
    //   inputErrors = data.createUser.userErrors;
    //   message = data.createUser.message;
    // }
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
      />
    </div>
  );
};

export default EditContainer;
