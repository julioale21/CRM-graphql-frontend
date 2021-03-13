import gql from "graphql-tag";

export const GET_ALL_CUSTOMERS_QUERY = gql`
  {
    getCustomers {
      id
      name
      lastName
      age
      company
      emails {
        email
      }
    }
  }
`;
