import React from 'react';
import useStyles from './single-supplier.styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const SingleSupplierPage = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography
         className={classes.title}
          color="primary"
          gutterBottom
          variant="h6"
        >
          Supplier name
        </Typography>
        <Divider variant="middle" />
        <Typography
         className={classes.body}
          variant="body1"
          color="textSecondary"
          gutterBottom
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aspernatur, aliquid corporis! Provident, harum, quaerat
          dolor molestiae temporibus sed in et optio perferendis
          veniam adipisci. Magni est delectus maiores aliquid
          dignissimos. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Laboriosam, nostrum. Recusandae esse error
          vitae aut neque, qui inventore ad iste pariatur, ipsum
          voluptatum facilis! Doloribus aut atque unde quia dicta!
          lorem
        </Typography>
        <Divider variant="middle" />
      </CardContent>
    </Card>
  );
};

export default SingleSupplierPage;
