import React from 'react';
import OctocatList from './component/OctocatList.jsx'
import {ApolloProvider} from 'react-apollo'

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql/'
})


// 1. apollo client setup
const client = new ApolloClient ({
  cache, 
  link,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Liste d'Octocats</h1>
        <OctocatList/>
      </div>
    </ApolloProvider> 
  );
}

export default App;
