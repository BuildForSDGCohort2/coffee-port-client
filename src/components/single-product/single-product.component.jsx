import React from 'react';
import DetailsContainer from '../details/details.container';
import DescriptionComponent from '../description/description.component';
import { storeComments } from '../../utils';

const SingleProduct = ({ data }) => {
  const { product } = data;

  storeComments(data.product.reviews);
  console.log(data);
  return (
    <div>
      <DetailsContainer product={product} />
      <DescriptionComponent product={product} />
    </div>
  );
};
export default SingleProduct;
