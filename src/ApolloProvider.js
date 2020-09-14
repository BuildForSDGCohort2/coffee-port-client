import React from 'react';
import {ApolloClient,ApolloProvider} from '@apollo/client';
import {cache} from './apollo/cache.js';



const client = new ApolloClient({
  uri: 'https://coffee-port-server.herokuapp.com/',
  cache: cache,
});

const ApolloProviderContainer=({children})=>(
           <ApolloProvider client={client}>
            {children}
           </ApolloProvider>
);

export default ApolloProviderContainer
