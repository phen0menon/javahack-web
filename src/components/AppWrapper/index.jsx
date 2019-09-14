import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "#/engine/store";
import history from "#/engine/history";

const AppWrapper = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <>{children}</>
    </BrowserRouter>
  </Provider>
);

export default AppWrapper;
