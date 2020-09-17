import React from 'react';
import { useMutation } from '@apollo/client';
import { Redirect } from 'react-router';
import SignIn from './sign-in.component';
import LOGIN from '../../apollo/mutations';

const SignInContainer = () => {
  const token = window.localStorage.getItem('token');
  if (token) return <Redirect to="/" />;
  const [loginUser, { data, error }] = useMutation(LOGIN);
  return (
    <div>
      <SignIn loginUser />
    </div>
  );
  //     if (data) {
  //         window.localStorage.setItem('token', data.signIn.token)

  //         // Redirect to home page

  //       }
  //      }
  //      const token = window.localStorage.getItem('token')
  //      if (token)  return <Redirect to='/' />
  // })
};

export default SignInContainer;
