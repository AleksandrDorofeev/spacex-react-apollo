import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from '../apolloClient';

import HomePage from "./components/HomePage/HomePage";

const App = () => (
  <ApolloProvider client={ApolloClient}>
    <HomePage />
  </ApolloProvider>
);

export default App;
