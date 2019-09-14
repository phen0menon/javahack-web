import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "#/engine/store";
import history from "#/engine/history";

const AppWrapper = ({ children }) => (
  <Provider store={store}>
    <Router history={history}>
      <>{children}</>
    </Router>
  </Provider>
);

export default AppWrapper;
