import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import useStyles from './homepage.styles';
import Button from '@material-ui/core/Button';
import ProductHomeCardList from '../../components/product-home-card-list/product-home-card-list.component';
import ProductIntro from '../../components/product-intro/product-intro.component';

const Home=()=>{
    const classes=useStyles();
    return(
    <div>

        <Grid className={classes.topGrid}   direction="column"
  justify="center"
  alignItems="center" container>
            <Grid item>
            <Typography className={classes.mainText}>
            Navigate through the 
            varieties of 
            </Typography>
            </Grid>
            <Divider  />
         <Grid item >
         <Typography className={classes.secondText}>
            Ethiopian Products
            </Typography>
         </Grid>
            <Grid   justify="center"
  alignItems="center" container>
                <Grid>
                <Button className={classes.buttonContainer} variant="outlined" size="large" color="primary" className={classes.margin}>Learn More</Button>
                </Grid>
                <Grid><Button variant="outlined" size="large" color="secondary" className={classes.margin}>Products Offered</Button></Grid>
            </Grid>

        </Grid>

        <Grid className={classes.introductionGrid}  direction="column"
  justify="center"
  alignItems="center" container>
      <Typography className={classes.subtitle} >--about Ethiopia</Typography>

        <Typography className={classes.title} >Introduction</Typography>
        <Typography className={classes.description}>


        There are by far more different and unique flavor profiles to be found in Ethiopia than in any other coffee-producing country. This is thanks to the incredible geographical, genotypic, and cultural variety within this ancient country.
Because of all this variety, Ethiopia can sometimes be a challenging place to do business, but the reward is worth it. This website will help you navigate the beautiful variety of coffee lands and coffee offerings that make up the motherland of coffee.
        </Typography>
        <Typography className={classes.description}>

In addition to that, Ethiopia is one of the centers of biodiversity for several oilseeds which can be considered 
as specialty high value seeds on the international market.
Overall, Ethiopia’s natural resource base, the soil, the climate, the relative humidity the vegetation types are the foundations of agriculture.
 The different agro ecological zones, extensive arable land and high population in rural areas make Ethiopia an agrarian country
</Typography>


        </Grid>
        <ProductHomeCardList/>
        <ProductIntro/>




    </div>
);
}
export default Home