/* eslint-disable no-console */
import React from "react";
import { Redirect, Route } from "react-router";

export const ProtectedRoute = ({ component: Component, user, session, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (user) return <Component session={session} />;
        else return <Redirect to="/login" />;
      }}
    ></Route>
  );
};
