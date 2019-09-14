import React from "react";
import Grid from "@material-ui/core/Grid";
import "./index.scss";

const Cabinet = props => {
  return (
    <div className="main-scene-screen cabinet-screen">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className="main-scene-screen__topbar"
      >
        <h1 className="main-scene-screen__topbar__title">Панель управления</h1>
      </Grid>
    </div>
  );
};

export default Cabinet;
