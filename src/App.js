import React from 'react';
import ApolloClient from 'apollo-boost';

import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/"
})

client.query({
  query:gql`
  {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
    }
  }
  `
})
.then(result => console.log(result))

const App = () => (
  <div>Hello!</div>
);

export default App;