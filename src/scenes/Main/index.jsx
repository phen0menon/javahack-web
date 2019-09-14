import React from "react";
import { connect } from "react-redux";
import { Switch, Redirect, Route, withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { isAuthenticated } from "#/engine/util";
import Sidebar from "#/components/Sidebar";
import Page from "#/components/Page";
import Cabinet from "./Cabinet";
import Organization from "./Organization";
import Settings from "./Settings";
import "./index.scss";

const useStyles = makeStyles(theme => ({
  root: { display: "flex" },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const CabinetScene = props => {
  const classes = useStyles();
  const { match } = props;

  if (!isAuthenticated()) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.root}>
      <Sidebar />

      <main className={classes.content}>
        <Switch>
          <Route
            path={`${match.url}`}
            exact={true}
            render={props => (
              <Page title="Личный кабинет">
                <Cabinet {...props} />
              </Page>
            )}
          />

          <Route
            exact={true}
            path={`${match.url}/organization`}
            render={props => (
              <Page title="Организация">
                <Organization {...props} />
              </Page>
            )}
          />

          <Route
            path={`${match.url}/settings`}
            render={props => (
              <Page title="Настройки">
                <Settings {...props} />
              </Page>
            )}
          />
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(
  connect(
    null,
    null,
  )(CabinetScene),
);
