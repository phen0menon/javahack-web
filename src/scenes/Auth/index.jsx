import React from "react";
import { connect } from "react-redux";
import { Switch, Redirect, Route, withRouter } from "react-router";
import Page from "#/components/Page";
import Login from "./Login";
import Register from "./Register";
import { isAuthenticated } from "#/engine/util";

const AuthScene = props => {
  const { match } = props;

  if (isAuthenticated()) {
    return <Redirect to="/cabinet" />;
  }

  return (
    <div className="auth-scene">
      <div className="auth-scene-inner">
        <Switch>
          <Route
            path={`${match.url}`}
            exact={true}
            render={props => (
              <Page title="Авторизация">
                <Login {...props} />
              </Page>
            )}
          />
          <Route
            path={`${match.url}/register`}
            exact={true}
            render={props => (
              <Page title="Регистрация нового клиента">
                <Register {...props} />
              </Page>
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(
  connect(
    null,
    null,
  )(AuthScene),
);
