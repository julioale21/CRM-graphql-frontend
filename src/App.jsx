/* eslint-disable no-console */
import { Fragment } from "react";
import Header from "./components/layout/Header";
import CustomersList from "./components/customers/CustomersList";
import EditCustomer from "./components/customers/EditCustomer";

import NewProduct from "./components/products/NewProduct";
import ProductsList from "./components/products/ProductsList";
import EditProduct from "./components/products/EditProduct";

import NewCustomer from "./components/customers/NewCustomer";

import NewOrder from "./components/orders/NewOrder";
import CustomerOrdersList from "./components/orders/CustomerOrdersList";

import Panel from "./components/panel";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Session from "./components/Session";

const App = ({ refetch, session }) => {
  const { getUser } = session;
  const message = getUser ? `Bienbenido: ${getUser.name}` : "";

  return (
    <Router>
      <Fragment>
        <Header session={session} />
        <div className="sm:container sm:mx-auto w-full h-screen">
          <p className="text-right mt-3 mr-3">{message}</p>
          <Switch>
            <ProtectedRoute
              exact
              path="/customers"
              session={session}
              user={getUser}
              component={CustomersList}
            />
            <ProtectedRoute
              exact
              path="/customers/new"
              session={session}
              user={getUser}
              component={NewCustomer}
            />
            <ProtectedRoute
              exact
              path="/customers/edit/:id"
              user={getUser}
              component={EditCustomer}
            />
            <ProtectedRoute
              exact
              path="/products"
              user={getUser}
              component={ProductsList}
            />
            <ProtectedRoute
              exact
              path="/products/new"
              user={getUser}
              component={NewProduct}
            />
            <ProtectedRoute
              exact
              path="/products/edit/:id"
              user={getUser}
              component={EditProduct}
            />
            <ProtectedRoute
              exact
              path="/orders/new/:customerId"
              user={getUser}
              session={session}
              component={NewOrder}
            />
            <ProtectedRoute exact path="/panel" user={getUser} component={Panel} />
            <ProtectedRoute
              exact
              path="/orders/:customerId"
              user={getUser}
              component={CustomerOrdersList}
            />
            <ProtectedRoute
              exact
              path="/register"
              user={getUser}
              session={session}
              component={Register}
            />
            <Route exact path="/login" render={() => <Login refetch={refetch} />} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

const RootSession = Session(App);
export { RootSession };
