import React from 'react';
import SignIn from './sign-in.component';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../apollo/mutations';
import { storeUser } from '../../utils';

const SignInContainer = () => {
  const [loginUser, { data }] = useMutation(LOGIN);
  if (data) {
    if (data && data.signIn.__typename === 'Token') {
      storeUser(data.signIn.token);
    } else if (data.signIn.__typename === 'SignInError') {
      console.log(data.signIn.message);
    } else if (data.signIn.__typename === 'UserInputError') {
      console.log(data.signIn.message);
    }
  }

  return (
    <div>
      <SignIn loginUser={loginUser} />
    </div>
  );
};

export default SignInContainer;
