import React from 'react';
import {ApolloClient, createHttpLink, ApolloProvider} from '@apollo/client';
import {cache} from './apollo/cache.js';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri:'https://coffee-port-server.herokuapp.com/'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = window.localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
});




const ApolloProviderContainer=({children})=>(
           <ApolloProvider client={client}>
            {children}
           </ApolloProvider>
);

export default ApolloProviderContainer
