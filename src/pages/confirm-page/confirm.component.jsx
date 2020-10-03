import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { VERIFY } from '../../apollo/server/mutations';
import { Redirect } from 'react-router-dom';
import { CircularProgress, Grid } from '@material-ui/core';
import { storeUser } from '../../utils';

import { useParams } from 'react-router-dom';
const ConfirmPage = () => {
  const { token } = useParams();
  const [verifyUser, { loading, data }] = useMutation(VERIFY);

  useEffect(() => {
    try {
      verifyUser({
        variables: { token: token },
      });
    } catch (e) {
      console.log('e.message', e.message);
    }
  }, [token, verifyUser]);
  if (loading) {
    return (
      <Grid container alignItems="center" justify="center">
        <CircularProgress />
      </Grid>
    );
  } else {
    if (data) {
      console.log(data);
      if (data.verifyUser.__typename === 'VerifiedMessage') {
        storeUser(data.verifyUser.token);
        return <Redirect to="/" />;
      } else {
        return <Redirect to="/signup" />;
      }
    }
  }
  console.log('token', data);
  return <div>Some text</div>;
};

export default ConfirmPage;
