import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { default as SupplierSignUp } from '../supplier-sign-up/supplier-signup.container';

import BuyerSignUp from '../buyer-sign-up/buyer-sign-up.component';

const SignUp = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChange} centered>
        <Tab label="Buyer" />
        <Tab label="Supplier" />
      </Tabs>
      {selectedTab === 0 ? <BuyerSignUp /> : <SupplierSignUp />}
    </div>
  );
};

export default SignUp;
