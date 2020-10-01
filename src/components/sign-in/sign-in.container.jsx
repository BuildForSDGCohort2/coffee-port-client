import React from 'react';
import SignIn from './sign-in.component';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../apollo/server/mutations';

import { storeUser } from '../../utils';

const SignInContainer = () => {
  let message = null;
  let inputErrors = null;

  const [loginUser, { data, loading }] = useMutation(LOGIN);
  if (data) {
    if (data && data.signIn.__typename === 'Token') {
      storeUser(data.signIn.token);
    } else if (data.signIn.__typename === 'SignInError') {
      message = data.signIn.message;
    } else if (data.signIn.__typename === 'UserInputError') {
      message = data.signIn.message;
      inputErrors = data.signIn.userErrors;
    }
  }

  return (
    <div>
      <SignIn
        loginUser={loginUser}
        loading={loading}
        message={message}
        inputErrors={inputErrors}
      />
    </div>
  );
};

export default SignInContainer;
