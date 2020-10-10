import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { storeUser } from './utils';
import Header from './components/header/header.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Buyers from './pages/buyers/buyers.component';
import Suppliers from './pages/suppliers/suppliers.component';
import Home from './pages/homepage/homepage.component';
import SingleSupplierPage from './pages/single-supplier/single-supplier.component';
import SignUpAndSignInPage from './pages/sign-up-and-sign-in/sign-up-and-sign-in.component';
import GET_CURRENT_USER from './apollo/client/queries';
import Authenticated from './components/authenticated/authenticated.component';
import ProductPage from './pages/product-page/product-page.component';
import NotificationPage from './pages/notification-page/notification-page.component';
import { default as ProfilePage } from './pages/profile/profile.container';
import { default as Comments } from './components/comments/comments.container';
import ConfirmPage from './pages/confirm-page/confirm.component';
import Footer from './components/footer/footer.component';
import WaitingPage from './pages/waitingpage/waitingpage.component';
import Information from './pages/information/information.component';
import ErrorPage from './pages/errorpage/errorpage.component';

function App() {
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      storeUser(token);
    }
  }, []);

  const { data, loading } = useQuery(GET_CURRENT_USER);

  if (loading ) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <div className="allButFooter">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/products">
            {' '}
            <Authenticated Component={ProductPage} />
          </Route>
          <Route path="/suppliers">
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
            <Authenticated Component={ProfilePage} />
          </Route>
          <Route exact path="/comments">
            <Comments />
          </Route>

          <Route exact path="/confirm/:token">
            <ConfirmPage />
          </Route>

          <Route exact path="/waiting">
            <WaitingPage />
          </Route>

          <Route exact path="/information">
            <Information />
          </Route>

          <Route exact path="/error">
            <ErrorPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
