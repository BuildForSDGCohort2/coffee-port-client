import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';
import useStyles from './custom-toggle-menu.styles';

const CustomToggleMenu = ({ currentUser }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Button
        aria-haspopup="true"
        onClick={() => history.push('/profile')}
      >
        <Avatar
          mr={4}
          alt={currentUser.firstName}
          src="/static/images/avatar/2.jpg"
        />
        <Typography style={{ color: '#546e7a', fontSize: '13px' }}>
          {currentUser.firstName}
        </Typography>
      </Button>
    </div>
  );
};

export default CustomToggleMenu;
