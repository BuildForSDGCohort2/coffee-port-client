import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import { useParams } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './comment.item.styles';

const CommentItem = ({email,comment,deleteReview}) =>{
  const { productId } = useParams();
  console.log(comment,productId)
const handleClick=()=>{
  deleteReview({
    variables: {
      productId: productId,
      reviewId: comment.id,
    },
  });

}
  const classes = useStyles();
    return <div><ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar className={classes.blue}>A</Avatar>
    </ListItemAvatar>
    <ListItemText
      primary="Adona Tesfaye"
      secondary={
        <React.Fragment>
 

          {
           comment.comment
          }
        </React.Fragment>
      }
    />
    {comment.reviewerEmail===email?   <ListItemSecondaryAction>
                    <Button variant="contained" color="secondary" onClick={handleClick}>
        Remove
      </Button>
                  </ListItemSecondaryAction>:null}
  
  </ListItem>
  <Divider variant="inset" component="li" />
  

  </div>
}
export default CommentItem
