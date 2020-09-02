import React from 'react';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';



const httpLink = createHttpLink({
  uri: 'https://coffee-port-server.herokuapp.com/',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
const ApolloProviderContainer=({children})=>(
           <ApolloProvider client={client}>
            {children}
           </ApolloProvider>
);

export default ApolloProviderContainer
