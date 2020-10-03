import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import useStyles from './product-intro.styles';
import { useRouteMatch, useHistory } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

const ProductIntro = () =>{
    const classes=useStyles();
    const match=useRouteMatch();
    const history=useHistory();


    return(
    <div>
        <Grid className={classes.container} container>
        <Grid xs={6} item></Grid>
            <Grid xs={6} item>
                <Typography variant='h3' className={classes.title}>
                Want to know more about Ethiopian Coffee?
                </Typography>
                <Typography className={classes.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur, molestiae. Quidem nemo libero odit? Modi esse sed
        dolor enim optio reprehenderit magnam earum dicta mollitia
        suscipit, aperiam numquam recusandae nulla. Lorem ipsum dolor 
                </Typography>
                <CustomButton className={classes.link} endIcon={<ArrowRightAlt />} onClick={() => history.push(`${match.url}information`)}>
                        Read More
                    </CustomButton>
                
            </Grid>
            <Grid xs={6} item>
               
            </Grid>





        </Grid>



    </div>
)};

export default ProductIntro