import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Header from './components/header/header.component';
import {Switch,Route} from 'react-router-dom';
import Buyers from './pages/buyers/buyers.component';
import Suppliers from './pages/suppliers/suppliers.component';
import Products from './pages/products/products.component';
import Home from './pages/homepage/homepage.component';
import './App.css';

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
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/suppliers" component={Suppliers}></Route>
        <Route exact path="/buyers" component={Buyers}></Route>

      </Switch>
      
     
  
    </div>
  );
}

export default App;
