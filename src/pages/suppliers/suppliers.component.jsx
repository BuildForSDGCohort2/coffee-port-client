import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import {default as CompanyPreview} from '../../components/company-preview/company-preview.container';
import {default as SingleSupplierPage} from '../single-supplier/single-suppliler.container';

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
