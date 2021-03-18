/* eslint-disable no-console */
import React, { Component, Fragment } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import Header from "./components/layout/Header";
import CustomersList from "./components/customers/CustomersList";
import NewCustomer from "./components/customers/NewCustomer";
import EditCustomer from "./components/customers/EditCustomer";
import NewProduct from "./components/products/NewProduct";
import ProductsList from "./components/products/ProductsList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    addTypename: false,
  }),
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <Header />
            <div className="mx-4 sm:container sm:mx-auto">
              <Switch>
                <Route exact path="/" component={CustomersList} />
                <Route exact path="/customers/new" component={NewCustomer} />
                <Route exact path="/customers/edit/:id" component={EditCustomer} />
                <Route exact path="/products" component={ProductsList} />
                <Route exact path="/products/new" component={NewProduct} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
