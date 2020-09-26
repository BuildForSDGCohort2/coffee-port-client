import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {storeUser} from './utils'
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
import ProfilePage from './pages/profile/profile.component';

function App() {
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      storeUser(token);
    }
  }, []);
  const { data, loading } = useQuery(GET_CURRENT_USER);

  if (loading) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/products">
          {' '}
          <Authenticated Component={ProductPage} />
        </Route>
        <Route  path="/suppliers">
          <Authenticated Component={Suppliers} />
        </Route>
        <Route exact path="/buyers">
          {' '}
          <Authenticated Component={Buyers} />
        </Route>
        <Route exact path="/signup">
          {data.currentuser.loggedIn ? (
            <Redirect to="/" />
          ) : (
            <SignUpAndSignInPage />
          )}
        </Route>
        <Route exact path="/describe">
          <SingleSupplierPage />
        </Route>
        <Route exact path="/notification">
          <Authenticated Component={NotificationPage} />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
