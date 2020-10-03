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
        <Grid className={classes.container}  container>
            <Grid xs={12} sm={12} md={6} item>
                <Typography variant='h3' className={classes.title}>
                Want to know more about Ethiopian Coffee?
                </Typography>
                <Typography className={classes.description}>
                From modern roasteries and coffee houses in the capital of Addis Ababa,
                 to the simplest pan-roasted coffee ceremony in a small rural hamlet,
                  Ethiopians of all classes and ethnicities enjoy coffee.
                It is difficult to make generalizations about the flavor of Ethiopian coffee.
                 Each coffee-growing region is home to unique flavors. So if you want to know more
                 about how Ethiopian coffee is categorised click on the link below.
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