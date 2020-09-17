import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Header from './components/header/header.component';
import {Switch,Route} from 'react-router-dom';
import Buyers from './pages/buyers/buyers.component';
import Suppliers from './pages/suppliers/suppliers.component';
import Products from './components/products/products.component';
import Home from './pages/homepage/homepage.component';
<<<<<<< HEAD
import SignUpAndSignInPage from './pages/sign-up-and-sign-in/sign-up-and-sign-in.component';
import ProductPage from './pages/product-page/product-page.component';
import NotificationPage from './pages/notification-page/notification-page.component';
=======
import SingleSupplierPage from "./pages/single-supplier/single-supplier.component"
import SignUpAndSignInPage from './pages/sign-up-and-sign-in/sign-up-and-sign-in.component'
import './App.css';
>>>>>>> develop

const FETCH_TEST_MESSAGE = gql`
  {
    getTestMessage
  }
`;

function App() {
  const { data } = useQuery(FETCH_TEST_MESSAGE);

  if (data) {
    console.log(data);
  }
  return (
    <div >

      <Header/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/product' component={ProductPage}></Route>
        <Route exact path='/supplier' component={Suppliers}></Route>
        <Route exact path='/buyer' component={Buyers}></Route>
        <Route exact path='/signup' component={SignUpAndSignInPage}></Route>
        <Route exact path='/notification' component={NotificationPage}></Route>


      </Switch>
      
     
  
    </div> 
  );
}

export default App;
