import gql from "graphql-tag";

export const GET_ALL_CUSTOMERS_QUERY = gql`
  query($limit: Int, $offset: Int, $seller: String) {
    getCustomers(limit: $limit, offset: $offset, seller: $seller) {
      id
      name
      lastName
      age
      company
      emails {
        email
      }
    }
    totalCustomers(seller: $seller)
  }
`;

export const GET_CUSTOMER_QUERY = gql`
  query($id: ID!) {
    getCustomer(id: $id) {
      id
      name
      lastName
      age
      company
      emails {
        email
      }
      type
    }
  }
`;

export const GET_ALL_PRODUCTS_QUERY = gql`
  query($limit: Int, $offset: Int, $stock: Boolean) {
    getProducts(limit: $limit, offset: $offset, stock: $stock) {
      id
      name
      price
      stock
    }
    totalProducts
  }
`;

export const GET_PRODUCT_QUERY = gql`
  query($id: ID!) {
    getProduct(id: $id) {
      id
      name
      price
      stock
    }
  }
`;

export const GET_ORDERS_BY_CUSTOMER = gql`
  query($customer: String) {
    getOrders(customer: $customer) {
      id
      order {
        id
        quantity
      }
      total
      date
      status
    }
  }
`;

export const GET_TOP_CUSTOMERS = gql`
  query {
    topCustomers {
      total
      customer {
        name
      }
    }
  }
`;

export const GET_TOP_SELLERS = gql`
  query {
    topSellers {
      total
      seller {
        name
      }
    }
  }
`;

export const CURRENT_USER = gql`
  query {
    getUser {
      id
      username
      name
      role
    }
  }
`;
