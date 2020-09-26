import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import CompanyPreview from '../../components/company-preview/company-preview.component';
import SingleSupplierPage from '../single-supplier/single-supplier.component';

const Suppliers = () => {
  let match = useRouteMatch();
  return (
    <div>
      {' '}
      <Route exact path={`${match.path}`}>
        <CompanyPreview />
      </Route>
      <Route exact path={`${match.path}/:supplierId`}>
        <SingleSupplierPage />
      </Route>
    </div>
  );
};

export default Suppliers;
