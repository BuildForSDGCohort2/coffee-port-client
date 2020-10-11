import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import { useParams } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './comment.item.styles';

const CommentItem = ({ email, comment, deleteReview, loading,counter }) => {
  const { productId } = useParams();
  const handleClick = () => {
    deleteReview({
      variables: {
        productId: productId,
        reviewId: comment.id,
      },
    });
  };
  const classes = useStyles();
  const colors = [
    classes.blue,
    classes.purple,
    classes.pink,
    classes.red,
    classes.green,
    classes.orange,
    classes.blueGray,
    classes.teal,
  ];
 
  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar className={colors[counter]}>
            {' '}
            {comment.reviewerEmail.charAt(0).toUpperCase()}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={comment.reviewerEmail}
          secondary={
            <React.Fragment>{comment.comment}</React.Fragment>
          }
        />
        {comment.reviewerEmail === email ? (
          <ListItemSecondaryAction>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClick}
            >
              {loading === true ? (
                <CircularProgress
                  className={classes.progress}
                  size="1.2rem"
                />
              ) : null}
              Remove
            </Button>
          </ListItemSecondaryAction>
        ) : null}
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};
export default CommentItem;
