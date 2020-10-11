import React from 'react';
import ProductHomeCardList from '../../components/product-home-card-list/product-home-card-list.component';
import ProductIntro from '../../components/product-intro/product-intro.component';
import Landing from '../../components/landing/landing.component';
import Introduction from '../../components/introduction/Introduction.component';
import Grid from '@material-ui/core/Grid';

const Home = () => {
  return (
    <div>
      <Grid container direction="column">
      <Landing />
      <Introduction />
      <ProductHomeCardList />
      <ProductIntro />
      </Grid>
    </div>
  );
};
export default Home;
