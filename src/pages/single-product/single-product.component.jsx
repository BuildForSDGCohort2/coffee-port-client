import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Details from '../../components/details/details.component'
import useStyles from "./single-product.styles"
import DescriptionComponent from "../../components/description/description.component"

const SingleProductPage = () => {
    const classes=useStyles();
  return (
    
    <div>
     <Box className={classes.root}  bgcolor='primary.main'>   <Typography className={classes.title} variant="h5" >coffee number one(Yerga chefe)</Typography></Box>
     <Details/>
     <DescriptionComponent/>
     </div>
  );
};
export default SingleProductPage;
