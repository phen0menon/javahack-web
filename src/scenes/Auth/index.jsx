import React from "react";
import { connect } from "react-redux";
import { Switch, Redirect, Route, withRouter } from "react-router";
import Page from "#/components/Page";
import Login from "./Login";
import Register from "./Register";

const AuthScene = props => {
  const { authenticated, match } = props;
  
  if (authenticated) {
    return <Redirect to="/cabinet" />;
  }

  return (
    <div className="auth-scene">
      <div className="auth-scene-inner">
        <Switch>
          <Route
            path={`${match.url}/login`}
            exact
            render={props => (
              <Page title="Войти">
                <Login {...props} />
              </Page>
            )}
          />
          <Route
            path={`${match.url}/register`}
            exact
            render={props => (
              <Page title="register">
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
