import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

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
    <div className="App">
      <h1>#ITSMYDAM</h1>
    </div>
  );
}

export default App;
