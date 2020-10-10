import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomInputField from '../custom-input-field/custom-input-field.component';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { default as CommentItem } from '../comment-item/comment.item.container';
import useForm from '../../hooks/hooks';
import useStyles from './comments.styles';

const Comments = ({ post, comments }) => {
  const { productId } = useParams();

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const { handleChange, fieldValues } = useForm({
    comment: '',
  });

  const { comment } = fieldValues;
  const handleSubmit = () => {
    console.log(productId);
    post({
      variables: {
        productId: productId,
        comment: comment,
        stars: value,
      },
    });
  };
  return (
    <div>
      <Typography
        color="secondary"
        gutterBottom
        variant="h6"
        className={classes.review}
      >
        Tell others what you think
      </Typography>
      <Grid container direction="cloumn" alignItems="flex-start">
        <Grid item xs={12} sm={6} md={8} className={classes.review}>
          <Rating
            name="size-large"
            size="large"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <CustomInputField
            id="filled-multiline-static"
            rows={4}
            label="write your comment here"
            multiline
            variant="filled"
            name="comment"
            className={classes.formfields}
            value={comment}
            onChange={handleChange}
          />

          <Button
            className={classes.post}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            endIcon={<Icon>send</Icon>}
          >
            Post
          </Button>
          <List className={classes.list}>
            {comments.length === 0 ? (
              <Typography
                color="secondary"
                gutterBottom
                variant="body1"
                className={classes.review}
              >
                No comments yet
              </Typography>
            ) : (
              comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
              ))
            )}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Comments;
