/* eslint-disable no-console */
import CustomersList from "./components/customers/CustomersList";
import EditCustomer from "./components/customers/EditCustomer";

import NewProduct from "./components/products/NewProduct";
import ProductsList from "./components/products/ProductsList";
import EditProduct from "./components/products/EditProduct";

import NewOrder from "./components/orders/NewOrder";
import CustomerOrdersList from "./components/orders/CustomerOrdersList";

import Panel from "./components/panel";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Session from "./components/Session";

const App = ({ refetch, session }) => {
  const { getUser } = session;
  const message = getUser ? (
    `Bienbenido: ${getUser.username}`
  ) : (
    <Redirect to="/login" />
  );
  return (
    <Router>
      <Fragment>
        <Header session={session} />
        <div className="sm:container sm:mx-auto w-full h-screen">
          <p className="text-right mt-3 mr-3">{message}</p>
          <Switch>
            <Route exact path="/" component={CustomersList} />
            <Route exact path="/customers/new" component={NewCustomer} />
            <Route exact path="/customers/edit/:id" component={EditCustomer} />

            <Route exact path="/products" component={ProductsList} />
            <Route exact path="/products/new" component={NewProduct} />
            <Route exact path="/products/edit/:id" component={EditProduct} />

            <Route exact path="/orders/new/:customerId" component={NewOrder} />
            <Route exact path="/panel" component={Panel} />
            <Route exact path="/orders/:customerId" component={CustomerOrdersList} />

            <Route exact path="/register" component={Register} />
            <Route exact path="/login" render={() => <Login refetch={refetch} />} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

const RootSession = Session(App);
export { RootSession };
