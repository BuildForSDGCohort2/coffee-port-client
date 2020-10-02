import React from 'react';
import EditProfile from './edit-profile.component';
import { useMutation } from '@apollo/client';
import jwt_decode from 'jwt-decode';
import { UPDATE_USER,DELETE_USER } from '../../apollo/server/mutations';
import { storeUser } from '../../utils';


const EditContainer = () => {
   //let message = null;
  // let inputErrors = null;
  const [updateUser, { data:updateData }] = useMutation(UPDATE_USER);
  const [deleteUser, { data:deleteData }] = useMutation(DELETE_USER);
  console.log(updateData,deleteData)
  if (updateData) {
    if (updateData && updateData.updateUser.__typename === 'UpdatedUser') {
      storeUser(updateData.updateUser.token);
    
    } else if ( updateData.updateUser.__typename === '"UpdateUserError"') {
      //message =  updateData.updateUser.message;

    }
    // } else if (data.createUser.__typename === 'UserInputError') {
    //   inputErrors = data.createUser.userErrors;
    //   message = data.createUser.message;
    // }
  }

  const token = window.localStorage.getItem('token');
  const decoded = jwt_decode(token);
  console.log(decoded)
 
  return (
    <div>
      <EditProfile currentUser={decoded} update={updateUser} deleteuser={deleteUser} />
    </div>
  );
};

export default EditContainer;
