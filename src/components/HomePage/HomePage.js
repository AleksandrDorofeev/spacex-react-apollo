import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const TEST_QUERY = gql`
  query Test {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
    }
  }
`;

const HomePage = () => (
  <Query query={TEST_QUERY}>
    {({ data, loading }) => {
      if (loading) {
        return <span>Loading...</span>;
      }

      return <span>{console.log(data)}</span>;
    }}
  </Query>
);

export default HomePage;
