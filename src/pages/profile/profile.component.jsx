import React from 'react';
import Typography from '@material-ui/core/Typography';
import { default as EditProfile } from '../../components/edit-profile/edit-profile.container';

import useStyles from './profile.styles';

const ProfilePage = ({currentUser}) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Typography
          color="secondary"
          gutterBottom
          variant="h3"
          className={classes.title}
        >
         {`${currentUser.firstName} ${currentUser.lastName}`}
        </Typography>
      </div>

      <EditProfile />
    </div>
  );
};

export default ProfilePage;
