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
import EditProduct from "./components/products/EditProduct";

import NewOrder from "./components/orders/NewOrder";
import CustomerOrdersList from "./components/orders/CustomerOrdersList";

import Panel from "./components/panel";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

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
            <div className="sm:container sm:mx-auto w-full h-screen">
              <Switch>
                <Route exact path="/" component={CustomersList} />
                <Route exact path="/customers/new" component={NewCustomer} />
                <Route exact path="/customers/edit/:id" component={EditCustomer} />

                <Route exact path="/products" component={ProductsList} />
                <Route exact path="/products/new" component={NewProduct} />
                <Route exact path="/products/edit/:id" component={EditProduct} />

                <Route exact path="/orders/new/:customerId" component={NewOrder} />
                <Route exact path="/panel" component={Panel} />
                <Route
                  exact
                  path="/orders/:customerId"
                  component={CustomerOrdersList}
                />

                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
