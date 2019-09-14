import React, { useEffect } from "react";
import { connect } from "react-redux";
import routes from "#/routes/app";
import { Route, Switch } from "react-router";

const renderedRoutes = (() => {
  const appRoutes = routes.map(route => <Route {...route} key={route.path} />);
  return <Switch>{appRoutes}</Switch>;
})();

const Application = props => {
  useEffect(() => {}, []);

  return (
    <div className="wrapper">
      <div>{renderedRoutes}</div>
    </div>
  );
};

const mapDispatchToProps = {};

export default connect(
  null,
  mapDispatchToProps,
)(Application);
