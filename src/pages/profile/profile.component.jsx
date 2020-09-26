import React from 'react';
import Typography from '@material-ui/core/Typography';
import EditProfile from "../../components/edit-profile/edit-profile.component"

import useStyles from './profile.styles';

const ProfilePage = () => {
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
          Adona Tesfaye
        </Typography>
      </div>

      <EditProfile/>
    </div>
  );
};

export default ProfilePage;
