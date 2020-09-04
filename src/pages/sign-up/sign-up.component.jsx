import React from 'react';
import useStyles from './sign-up.styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SupplierSignUp from "../../components/supplier-sign-up/supplier.sign-up.component"
import BuyerSignUp from "../../components/buyer-sign-up/buyer-sign-up.component"
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';

import CardContent from '@material-ui/core/CardContent';
const SignUpPage = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <Container className={classes.root}>
    <Card raised >
        <CardContent className={classes.cardContent} >
    <Grid container >
      <Grid item xs={false} sm={4} md={5}   className={classes.image}>
      </Grid>
      <Grid item  xs={12} sm={8} md={7} className={classes.paper}>
      <Tabs value={selectedTab} onChange={handleChange} centered >
          <Tab label="Buyer"/>
          <Tab label="Supplier"/>
        </Tabs>
        {selectedTab===0?<BuyerSignUp/>:<SupplierSignUp/>}
      </Grid>
    </Grid>
    </CardContent>
    </Card>
    </Container>
  );
};

export default SignUpPage;
