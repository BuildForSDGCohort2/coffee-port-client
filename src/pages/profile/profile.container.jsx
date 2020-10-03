import React from 'react';
import ProfilePage from './profile.component';
import { useQuery } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import { CircularProgress, Grid } from '@material-ui/core';
import GET_CURRENT_USER from '../../apollo/client/queries';

const ProfileContainer = () => {
  const { data, loading } = useQuery(GET_CURRENT_USER);

  if (!data && !loading) {
    return <Redirect to="/error" />;
  }

  if (loading) {
    return (
      <Grid container alignItems="center" justify="center">
        <CircularProgress />
      </Grid>
    );
  }
  return (
    <div>
      <ProfilePage currentUser={data.currentuser} />
    </div>
  );
};

export default ProfileContainer;
