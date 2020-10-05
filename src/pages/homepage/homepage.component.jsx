import React from 'react';
import ProductHomeCardList from '../../components/product-home-card-list/product-home-card-list.component';
import ProductIntro from '../../components/product-intro/product-intro.component';
import Landing from '../../components/landing/landing.component';
import Introduction from '../../components/introduction/Introduction.component';

const Home = () => {
  return (
    <div>
      <Landing />
      <Introduction />
      <ProductHomeCardList />
      <ProductIntro />
    </div>
  );
};
export default Home;
