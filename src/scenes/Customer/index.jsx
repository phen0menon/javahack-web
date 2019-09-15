import React from "react";
import { connect } from "react-redux";
import { Switch, Redirect, Route, withRouter } from "react-router";
import Page from "#/components/Page";
import ApproveForm from "./ApproveForm";
import FinishForm from "./FinishForm";


const CustomerScene = props => {
  const { match } = props;

  return (
    <div className="auth-scene">
      <div className="auth-scene-inner">
        <Switch>
          <Route
            path={`${match.url}/fill_email`}
            exact={true}
            render={props => (
              <Page title="Подтверждение сделки">
                <ApproveForm {...props} />
              </Page>
            )}
          />
          <Route
            path={`${match.url}/finalize`}
            exact={true}
            render={props => (
              <Page title="Завершение сделки">
                <FinishForm {...props} />
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
  )(CustomerScene),
);
