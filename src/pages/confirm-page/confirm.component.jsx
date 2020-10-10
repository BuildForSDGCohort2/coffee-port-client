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
    } catch (e) {}
  }, [token, verifyUser]);
  if (loading) {
    return (
      <Grid container alignItems="center" justify="center">
        <CircularProgress />
      </Grid>
    );
  } else {
    if (data) {
      if (data.verifyUser.__typename === 'VerifiedMessage') {
        storeUser(data.verifyUser.token);
        return <Redirect to="/" />;
      } else {
        return <Redirect to="/signup" />;
      }
    }
  }
  return <div>loading...</div>;
};

export default ConfirmPage;
