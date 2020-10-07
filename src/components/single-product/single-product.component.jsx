import React from 'react';
import DetailsContainer from '../details/details.container';
import DescriptionComponent from '../description/description.component';

const SingleProduct = ({ data }) => {
  const { product } = data;

  return (
    <div>
      <DetailsContainer product={product} />
      <DescriptionComponent product={product} />
    </div>
  );
};
export default SingleProduct;
