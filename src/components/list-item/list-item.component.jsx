import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import useStyles from './list-item.styles';

const ListComponent = (props) => {
    const classes = useStyles();
  const { primary, person,sales,secondary, avatar, trailing } = props;
  return (
    <div >
      <ListItem className={avatar?classes.listAvatar:null}>
      
        {avatar ? (
          <ListItemAvatar>
            <Avatar>
              {person ? (
                <PersonIcon color='primary'/>
              ) : sales ? (
                <TrendingUpIcon color='primary' />
              ) : null}
            </Avatar>
          </ListItemAvatar>
        ) : null}
        <Grid item xs={6}><ListItemText className={classes.primary} primary={primary} secondary={secondary} /></Grid>
        <Grid item xs={6}>{trailing ? <ListItemText  className={classes.trailing} primary={trailing} /> : null}</Grid>
        
        
      </ListItem>
    </div>
  );
};

export default ListComponent;
