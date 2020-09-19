import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Header from './components/header/header.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Buyers from './pages/buyers/buyers.component';
import Suppliers from './pages/suppliers/suppliers.component';
import Home from './pages/homepage/homepage.component';
import SingleSupplierPage from './pages/single-supplier/single-supplier.component';
import SignUpAndSignInPage from './pages/sign-up-and-sign-in/sign-up-and-sign-in.component';
import GET_CURRENT_USER from './apollo/queries';
import Authenticated from './components/authenticated/authenticated.component';
import ProductPage from './pages/product-page/product-page.component';
import NotificationPage from './pages/notification-page/notification-page.component';


function App() {
  const { data, loading, error } = useQuery(GET_CURRENT_USER);
  console.log(data, loading, error);

  if (data) {
    console.log(data);
  }
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route
          exact
          path="/products."
         component={ProductPage}
        ></Route>
        <Route
          exact
          path="/suppliers"
          render={() => <Authenticated Component={Suppliers} />}
        ></Route>
        <Route
          exact
          path="/buyers"
          render={() => <Authenticated Component={Buyers} />}
        ></Route>
        <Route
          exact
          path="/signup"
          render={() =>
            data.currentuser.token != null ? (
              <Redirect to="/" />
            ) : (
              <SignUpAndSignInPage />
            )
          }
        ></Route>
        <Route
          exact
          path="/describe"
          component={SingleSupplierPage}
        ></Route>
             <Route exact path='/notification'  render={() => <Authenticated Component={NotificationPage} />} ></Route>
      </Switch>
    </div>
  );
}

export default App;
