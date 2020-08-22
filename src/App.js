import React from 'react';
import './App.css';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

function App() {
  const { data } = useQuery(FETCH_TEST_MESSAGE);

  if (data) {
    console.log(data);
  }
  return (
    <div className="App">
      <h1>#ITSMYDAM</h1>
    </div>
  );
}

const FETCH_TEST_MESSAGE = gql`
  {
    getTestMessage
  }
`;

export default App;
