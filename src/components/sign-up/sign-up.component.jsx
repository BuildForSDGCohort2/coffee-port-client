import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import SupplierSignUp from '../supplier-sign-up/supplier.sign-up.component';

import BuyerSignUp from '../buyer-sign-up/buyer-sign-up.component';

const SignUp = ({handler}) => {
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
      <Grid container justify='flex-end'>
            <Grid item>
              <Link href='#' onClick={handler} variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
    </div>
  );
};

export default SignUp;
