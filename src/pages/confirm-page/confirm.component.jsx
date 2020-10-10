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
    verifyUser({
      variables: { token: token },
    });
  }, [token, verifyUser]);
  if (!data && !loading) {
    return <Redirect to="/error" />;
  }
  if (loading) {
    return (
      <Grid container alignItems="center" justify="center">
        <CircularProgress />
      </Grid>
    );
  } else {
    if (data) {
      if (data.verifyUser.__typename === 'VerifiedMessage') {
        storeUser(token);
        return <Redirect to="/" />;
      } else if (data.verifyUser.__typename === 'TokenError') {
        return <Redirect to="/signup" />;
      } else if (data.verifyUser.__typename === 'VerifiedUserError') {
        return <Redirect to="/signup" />;
      } else {
        return <Redirect to="/signup" />;
      }
    } else {
      return <div>loading...</div>;
    }
  }
};

export default ConfirmPage;
