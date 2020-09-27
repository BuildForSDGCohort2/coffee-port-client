import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Rating from '@material-ui/lab/Rating';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CommentItem from '../comment-item/comment-item.component'
import useStyles from './comments.styles';

const Comments = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={6} md={8}>
          <Typography variant="h5" color="primary">
            comments
          </Typography>

          <TextareaAutosize
            className={classes.root}
            aria-label="minimum height"
            rowsMin={5}
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
          />
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Button
            className={classes.post}
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
          >
            Post
          </Button>
          <List className={classes.list}>
           <CommentItem/>
           <CommentItem/>
           <CommentItem/>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Comments;
