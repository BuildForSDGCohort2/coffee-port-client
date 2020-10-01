import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './comment.item.styles';

const CommentItem = ({comment}) =>{
  const classes = useStyles();
    return <div><ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar className={classes.blue}>A</Avatar>
    </ListItemAvatar>
    <ListItemText
      primary="Adona Tesfaye"
      secondary={
        <React.Fragment>
          {/* <Typography
      component="span"
      variant="body2"
      className={classes.inline}
      color="textPrimary"
    >
      Ali Connors
    </Typography> */}

          {
           comment.comment
          }
        </React.Fragment>
      }
    />
  </ListItem>
  <Divider variant="inset" component="li" />
  

  </div>
}
export default CommentItem
