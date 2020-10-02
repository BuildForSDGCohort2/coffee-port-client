import React from 'react';
import useStyles from './posted-product.styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PostedProductItem from '../../components/posted-product-item/posted-product-item.component';


const PostedProduct = ({ data }) => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Typography
          color="secondary"
          gutterBottom
          variant="h4"
          className={classes.title}
        >
          Posts
        </Typography>
        {data.products.length===0? <Typography
          gutterBottom
          variant="subtitle1"
          className={classes.title}
        >
          No Posts yet
        </Typography>:data.products.map((product)=><div><PostedProductItem />      <Divider variant="middle" /></div>)}

    </div>
  );
};

export default PostedProduct;
