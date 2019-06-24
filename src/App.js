import React from "react";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import gql from "graphql-tag";

import { ApolloProvider } from "react-apollo";

import HomePage from "./components/HomePage/HomePage";

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, location, path }) => {
      console.log(
        `[Graphql Error] message: ${message}, Location: ${location}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.log(
      `[Network Error ${networkError.message}] Operation: ${
        operation.operationName
      }`
    );
  }
});

const httpLink = new HttpLink({ uri: "https://api.spacex.land/graphql" });

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, httpLink])
});

client
  .query({
    query: gql`
      {
        launchesPast(limit: 10) {
          mission_name
          launch_date_local
        }
      }
    `
  })
  .then(result => console.log(result));

const App = () => (
  <ApolloProvider client={client}>
    <HomePage />
  </ApolloProvider>
);

export default App;
