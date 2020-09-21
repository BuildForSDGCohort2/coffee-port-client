import React from 'react';
import SupplierSignUp from './supplier.sign-up.component';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../../apollo/mutations';
import { storeUser } from '../../utils';

const SupplierSignUpContainer = () => {
  const [signupUser, { data }] = useMutation(SIGN_UP);
  if (data) {
    if (data && data.createUser.__typename === 'Token') {
      storeUser(data.createUser.token);
    } else if (data.createUser.__typename === 'SignupError') {
      console.log(data.signIn.message);
    } else if (data.createUser.__typename === 'UserInputError') {
      console.log(data.signIn.message);
    }
  }

  return (
    <div>
      <SupplierSignUp signupUser={signupUser} />
    </div>
  );
};

export default SupplierSignUpContainer;
