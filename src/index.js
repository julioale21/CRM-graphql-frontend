import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import { RootSession } from "./App.jsx";
import { ApolloProvider } from "react-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://damp-brook-19716.herokuapp.com/graphql",
  fetchOptions: {
    credentials: "include",
  },
  request: (operation) => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
  cache: new InMemoryCache({
    addTypename: false,
  }),
  onError: ({ networkError, graphQLErrors }) => {
    // eslint-disable-next-line no-console
    console.log("graphQLErrors", graphQLErrors);
    // eslint-disable-next-line no-console
    console.log("networkError", networkError);
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootSession />
  </ApolloProvider>,
  document.getElementById("root")
);
